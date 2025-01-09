class Table {
    constructor(bodyId, translate, load) {
        this.bodyId = bodyId;
        this.translate = translate;
        this.currentPage = 1;
        this.pageSize = 15;
        this.sortField = 'id';  // 默认排序字段
        this.sortOrder = 'DESC';  // 默认排序顺序
        this.count = 0;
        this.load = load;
    }

    clear() {
        this.count = 0;
        document.getElementById(this.bodyId).innerHTML = '';
    }

    reset() {
        this.currentPage = 1;
        this.load(this);
    }

    addRow(obj) {
        let table = document.getElementById(this.bodyId);
        let row = document.createElement('tr');
        row.innerHTML = this.translate(obj);
        table.appendChild(row);
        this.count++;
    }

    generate(list, count) {
        this.clear();
        list.forEach(obj => { this.addRow(obj); });
        this.count = count;
        this.loadPagination();
        this.updateSortIndicators();
    }

    loadPagination() {
        const totalPages = Math.ceil(this.count / this.pageSize);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.textContent = i;
            pageItem.onclick = () => { this.currentPage = i; this.load(this); };
            pagination.appendChild(pageItem);
        }
    }
    
    // 更新排序按钮的点击状态
    updateSortButtons() {
        const buttons = document.querySelectorAll('.sortable-header');
        buttons.forEach(button => {
            button.classList.remove('clicked');  // 移除所有按钮的 clicked 类
        });
        const currentButton = document.querySelector(`.sortable-header[onclick="table.sortTable('${this.sortField}')"]`);
        if (currentButton) {
            currentButton.classList.add('clicked');  // 给当前排序按钮添加 clicked 类
        }
    }

    sortTable(field) {
        if (this.sortField === field) {
            // Toggle sort order when clicking the same field
            this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        } else {
            // Default to descending order when switching fields
            this.sortField = field;
            this.sortOrder = 'DESC';
        }
        this.updateSortButtons();  // 更新排序按钮
        this.reset();
    }

    updateSortIndicators() {
        const headers = document.querySelectorAll('.sortable-header');
        headers.forEach(header => {
            const field = header.getAttribute('onclick').match(/table.sortTable\('(.+)'\)/)[1];
            const arrow = header.querySelector('.arrow');
            
            // Update sorting arrow based on current sorting state
            if (field === this.sortField) {
                // If the field is sorted, show appropriate arrow (up or down)
                arrow.innerHTML = this.sortOrder === 'ASC' ? 
                    '<i class="fa-solid fa-sort-up"></i>' : 
                    '<i class="fa-solid fa-sort-down"></i>';
                header.classList.add('sorted');
            } else {
                // If not sorted, reset to show both arrows
                arrow.innerHTML = '<i class="fa-solid fa-sort-up"></i><i class="fa-solid fa-sort-down"></i>';
                header.classList.remove('sorted');
            }
        });
    }
}