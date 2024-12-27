let currentPage = 1;
let pageSize = 15;
let sortField = 'id';
let sortOrder = 'DESC'; // 默认降序

function resetPageAndLoadSubmissions() {
    currentPage = 1;
    loadSubmissions();
}

function loadSubmissions() {
    const subject = document.getElementById('subject').value;
    const search = document.getElementById('search').value;
    const submissionId = document.getElementById('submissionIdInput').value;
    let url = `/submissions?id=${submissionId}&subject=${subject}&search=${search}&sortField=${sortField}&sortOrder=${sortOrder}&page=${currentPage}&pageSize=${pageSize}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#submissionsTable tbody');
            tableBody.innerHTML = '';
            data.forEach(submission => {
                const row = document.createElement('tr');
                row.innerHTML = transSubmissionObjectIntoString(submission);
                tableBody.appendChild(row);
            });
            loadPagination(subject, search);
            updateSortIndicators();
        });
}

function loadPagination(subject, search) {
    fetch(`/submissions/count?subject=${subject}&search=${search}`)
        .then(response => response.json())
        .then(data => {
            const totalPages = Math.ceil(data.count / pageSize);
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const pageItem = document.createElement('li');
                pageItem.textContent = i;
                pageItem.onclick = () => { currentPage = i; loadSubmissions(); };
                pagination.appendChild(pageItem);
            }
        });
}

function sortTable(field) {
    if (sortField === field) {
        // Toggle sort order when clicking the same field
        sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    } else {
        // Default to descending order when switching fields
        sortField = field;
        sortOrder = 'DESC';
    }
    resetPageAndLoadSubmissions();
}

function updateSortIndicators() {
    const headers = document.querySelectorAll('.sortable-header');
    headers.forEach(header => {
        const field = header.getAttribute('onclick').match(/sortTable\('(.+)'\)/)[1];
        const arrow = header.querySelector('.arrow');
        if (field === sortField) {
            arrow.innerHTML = sortOrder === 'ASC' ? '▲' : '▼';
            header.classList.add('sorted');
        } else {
            arrow.innerHTML = '▲▼';
            header.classList.remove('sorted');
        }
    });
}