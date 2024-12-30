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

textEditor.addEventListener("keyup", async (evt) => {
    const { value } = evt.target; // 获取输入内容
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
});