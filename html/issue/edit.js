var issueId = -1;
let problems = [];

// 获取 URL 参数
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 加载 Issue 基本信息
async function loadIssueInfo() {
    issueId = getQueryParam('issueId');
    if (issueId) {
        const response = await fetch(`/issues?id=${issueId}`);
        const issue = await response.json();
        if (issue.length > 0) {
            document.getElementById('name').value = issue[0].name;
        }
    }
}

async function initIssueProblems(){
    await fetch('/getProblemsInIssue?issueId=' + issueId)
        .then(response => response.json())
        .then(data => {
            problems = data.map(problem => problem.id);
        });
}

document.getElementById('saveBasicInfo').addEventListener('click', async function () {
    const name = document.getElementById('name').value;
    const response = await fetch('/saveIssueBasicInfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ issueId, name })
    });
    const result = await response.json();
    alert(result.message || result.error);
});

document.getElementById('addProblemById').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    var problemId = data.problemId.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
    problems = problems.concat(problemId);
    loadIssueProblems();
    alert("添加成功");
});

async function addProblemToIssue(problemId) {
    problems.push(problemId);
    loadIssueProblems();
}

async function loadIssueProblems() {
    const issueProblems = document.getElementById('issueProblems');
    issueProblems.innerHTML = '';
    for (let i = 0; i < problems.length; i++) {
        const problemId = problems[i];
        const listItem = document.createElement('li');
        listItem.classList.add('draggable');
        await fetch('/problems?id=' + problemId)
            .then(response => response.json())
            .then(problem => {
                problem = problem[0];
                listItem.textContent = `${problem.id} ${problem.name}`;
                const removeButton = document.createElement('button');
                removeButton.textContent = '×';
                (function (index) {
                    removeButton.addEventListener('click', () => removeProblemFromIssue(index));
                })(i);
                listItem.appendChild(removeButton);
                issueProblems.appendChild(listItem);
            });
    }
}

async function removeProblemFromIssue(index) {
    problems.splice(index, 1);
    loadIssueProblems();
}

// 初始化拖拽排序功能
new Sortable(document.getElementById('issueProblems'), {
    animation: 150,
    ghostClass: 'sortable-ghost',
    onEnd: function (evt) {
        const itemEl = evt.item; // 被拖拽的元素
        const oldIndex = evt.oldIndex; // 元素原来的索引
        const newIndex = evt.newIndex; // 元素新的索引

        // 更新 problems 列表中的顺序
        const movedItem = problems.splice(oldIndex, 1)[0];
        problems.splice(newIndex, 0, movedItem);
    }
});

// 题目列表功能
const table=new Table('tbody',
    (problem)=>{
        var file_path=problem.file_path;
        file_path=file_path.substring(file_path.lastIndexOf('/')+1);
        return `
            <div class="card">
                <div class="card-content">
                    <div class="card-row">
                        <div class="card-item">${problem.id}</div>
                        <div class="card-item">${problem.time}</div>
                        <div class="card-item"><a href="/preview?file=${encodeURIComponent(problem.file_path)}">${problem.name}</a></div>
                        <div class="card-item">${problem.subject}</div>
                        <div class="card-item">${problem.submit_num}</div>
                        <div class="card-item">${problem.score}</div>
                        <div class="card-item">${problem.author}</div>
                        <div class="card-item">
                            <div class="operator">
                                <button onclick="addProblemToIssue(${problem.id})">添加</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    (tb)=>{
        const subject = document.getElementById('subject').value;
        const search = document.getElementById('search').value;
        const problemId = document.getElementById('problemIdInput').value;
        let url = `/problems?id=${problemId}&subject=${subject}&search=${search}&sortField=${tb.sortField}&sortOrder=${tb.sortOrder}&page=${tb.currentPage}&pageSize=${tb.pageSize}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                url=`/problems/count?id=${problemId}&subject=${subject}&search=${search}`;
                fetch(url)
                    .then(response => response.json())
                    .then(count => {tb.generate(data,count.count)});
            });
    }
);

document.getElementById('saveIssue').addEventListener('click', async function () {
    if (issueId !== -1) {
        const response = await fetch('/saveIssue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ issueId: issueId, problemIds: problems })
        });
        const result = await response.json();
        alert(result.message || result.error);
    } else {
        const response = await fetch('/newissue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: document.getElementById('name').value, problemIds: problems })
        });
        const result = await response.json();
        if (response.ok) issueId = result.issueId;
        alert(result.message || result.error);
    }
});

// 初次加载
async function init() {
    loadIssueInfo();
    await initIssueProblems();
    await loadIssueProblems();
    table.pageSize=5;
    table.reset();
}

init();