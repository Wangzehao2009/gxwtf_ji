const textEditor = document.querySelector('.text-editor');
const preview = document.querySelector('.markdown-body');

// let isSyncing = false; // 用于防止循环滚动同步
// let editorInstance = null;

// // 选择 textarea 和预览容器

// // 初始化编辑器
// const initEditor = () => {
//     // 获取编辑器内容
//     const setEditorValue = (value) => {
//         textEditor.value = value;
//     };

//     // 监听滚动事件，实时同步预览
//     textEditor.addEventListener('scroll', () => {
//         if (isSyncing) return; // 如果正在同步滚动，则不再处理
//         isSyncing = true;

//         // 获取编辑器的滚动位置
//         const scrollTop = textEditor.scrollTop;
//         const scrollHeight = textEditor.scrollHeight;
//         const clientHeight = textEditor.clientHeight;

//         // 计算滚动百分比
//         const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

//         // 同步到预览区域
//         preview.scrollTop = scrollPercentage * (preview.scrollHeight - preview.clientHeight);
        
//         isSyncing = false; // 完成同步后，解除标记
//     });
// };

// // 监听预览视图的滚动事件
// const initPreviewSync = () => {
//     preview.addEventListener('scroll', () => {
//         if (isSyncing) return; // 如果正在同步滚动，则不再处理
//         isSyncing = true;

//         // 获取预览视图的滚动位置
//         const scrollTop = preview.scrollTop;
//         const scrollHeight = preview.scrollHeight;
//         const clientHeight = preview.clientHeight;

//         // 计算滚动百分比
//         const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

//         // 同步到编辑器
//         textEditor.scrollTop = scrollPercentage * (textEditor.scrollHeight - textEditor.clientHeight);

//         isSyncing = false; // 完成同步后，解除标记
//     });
// };

// // 当页面加载完成后，初始化编辑器
// window.addEventListener('DOMContentLoaded', (event) => {
//     initEditor();
//     initPreviewSync();
// });

let historyStack = [];
let redoStack = [];
let isUndoing = false;
let isRedoing = false;
let lastContent = '';
let lastSavedContent = '';

// 获取文件内容并显示在编辑器中
async function loadFileContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file');
    if (!fileName) {
        console.error('File name is null or undefined');
        return;
    }
    const filePath = `/filecontent/${fileName}`;
    console.log(`Fetching file from: ${filePath}`); // 调试信息
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const data = await response.json();
            console.log('File content loaded successfully'); // 调试信息
            textEditor.value = data.content;
            lastContent = data.content;
            lastSavedContent = data.content;
            // 触发一次 keyup 事件以渲染预览
            textEditor.dispatchEvent(new Event('keyup'));
            // 初始化历史记录
            historyStack.push(data.content);
        } else {
            console.error('Failed to load file content'); // 调试信息
            alert('无法加载文件内容');
        }
    } catch (error) {
        console.error('Error fetching file:', error); // 调试信息
        alert('无法加载文件内容');
    }
}

// 监听 command+s 组合键
textEditor.addEventListener('keydown', async (event) => {
    if (event.metaKey && event.key === 's') {
        event.preventDefault(); // 阻止默认保存行为

        const urlParams = new URLSearchParams(window.location.search);
        const filePath = urlParams.get('file');
        if (!filePath) {
            console.error('File name is null or undefined');
            return;
        }
        const content = textEditor.value;

        try {
            const response = await fetch('/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ filePath, content })
            });

            if (response.ok) {
                lastSavedContent = content;
                console.log('File saved successfully'); // 调试信息
                alert('文件已保存');
            } else {
                console.error('Failed to save file'); // 调试信息
                alert('保存失败');
            }
        } catch (error) {
            console.error('Error saving file:', error); // 调试信息
            alert('保存失败');
        }
    }

    if (event.metaKey && event.key === 'z') {
        event.preventDefault(); // 阻止默认撤回行为
        undo();
    }

    if (event.metaKey && event.key === 'y') {
        event.preventDefault(); // 阻止默认重做行为
        redo();
    }

    if (event.key === 'Tab') {
        event.preventDefault(); // 阻止默认行为（页面滚动）
        
        // 获取光标的位置
        const cursorPos = textEditor.selectionStart;
        const text = textEditor.value;
        
        // 在光标位置插入 4 个空格
        textEditor.value = text.substring(0, cursorPos) + '    ' + text.substring(cursorPos); // 插入四个空格
        
        // 将光标移动到 Tab 后的位置
        textEditor.selectionStart = textEditor.selectionEnd = cursorPos + 4; // 因为插入了四个空格，所以光标位置增加4
    }

    // 处理 Backspace 键
    if (event.key === 'Backspace') {
        const cursorPos = textEditor.selectionStart;
        const text = textEditor.value;

        // 检查光标前是否是 4 个空格
        if (cursorPos >= 4 && text.substring(cursorPos - 4, cursorPos) === '    ') {
            event.preventDefault(); // 阻止默认的删除行为
            // 删除前面的 4 个空格
            textEditor.value = text.substring(0, cursorPos - 4) + text.substring(cursorPos);
            // 将光标移动到删除后的正确位置
            textEditor.selectionStart = textEditor.selectionEnd = cursorPos - 4;
        }
    }
});

textEditor.addEventListener("input", () => {
    const value = textEditor.value;
    if (value !== lastContent) {
        if (!isUndoing && !isRedoing) {
            historyStack.push(value);
            redoStack = []; // 清空重做栈
        }
        lastContent = value;
        isUndoing = false;
        isRedoing = false;
        renderMarkdown(value); // 实时渲染
    }
});

textEditor.addEventListener("keyup", async (evt) => {
    const { value } = evt.target; // 获取输入内容
    renderMarkdown(value);
});

async function renderMarkdown(value) {
    const response = await fetch('/mdreader/render', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ markdown: value })
    });
    const result = await response.json();
    // 将渲染的HTML插入到 preview 中
    preview.innerHTML = result.html;

    // 使用 MathJax 重新渲染数学公式
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    // 使用 highlight.js 对新渲染的代码块进行高亮
    hljs.highlightAll();
}

// 监听粘贴事件
textEditor.addEventListener('paste', async (event) => {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].kind === 'file' && items[i].type.startsWith('image/')) {
            const file = items[i].getAsFile();
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('/image/upload', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (data.error) {
                    console.error('Image upload failed:', data.error);
                } else {
                    const imageUrl = data.imageUrl;
                    const markdownImage = `![](${imageUrl})`;
                    const cursorPos = textEditor.selectionStart;
                    const text = textEditor.value;
                    textEditor.value = text.substring(0, cursorPos) + markdownImage + text.substring(cursorPos);
                    textEditor.selectionStart = textEditor.selectionEnd = cursorPos + markdownImage.length;
                    textEditor.dispatchEvent(new Event('input'));
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }
});

// 撤回功能
function undo() {
    if (historyStack.length > 1) {
        redoStack.push(historyStack.pop());
        isUndoing = true;
        textEditor.value = historyStack[historyStack.length - 1];
        textEditor.dispatchEvent(new Event('input'));
    }
}

// 重做功能
function redo() {
    if (redoStack.length > 0) {
        historyStack.push(redoStack.pop());
        isRedoing = true;
        textEditor.value = historyStack[historyStack.length - 1];
        textEditor.dispatchEvent(new Event('input'));
    }
}

// 页面加载时获取文件内容
window.addEventListener('DOMContentLoaded', loadFileContent);

window.onbeforeunload = function (e) {
    if(textEditor.value == lastSavedContent) return ;
    var message = 'leave?';
    e = e || window.event;
    if (e) {
        e.returnValue = message;
    }
    return message;
};