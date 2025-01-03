class Table{
    constructor(bodyId,translate,load){
        this.bodyId=bodyId;
        this.translate=translate;
        this.currentPage=1;
        this.pageSize=15;
        this.sortField='id';
        this.sortOrder='DESC';
        this.count=0;
        this.load=load;
    }
    clear(){
        this.count=0;
        document.getElementById(this.bodyId).innerHTML='';
    }
    reset(){
        this.currentPage=1;
        this.load(this);
    }
    addRow(obj){
        let table=document.getElementById(this.bodyId);
        let row=document.createElement('tr');
        row.innerHTML=this.translate(obj);
        table.appendChild(row);
        this.count++;
    }
    generate(list,count){
        this.clear();
        list.forEach(obj=>{this.addRow(obj);});
        this.count=count;
        this.loadPagination();
        this.updateSortIndicators();
    }
    loadPagination(){
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
    sortTable(field) {
        if (this.sortField === field) {
            // Toggle sort order when clicking the same field
            this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        } else {
            // Default to descending order when switching fields
            this.sortField = field;
            this.sortOrder = 'DESC';
        }
        this.reset();
    }
    updateSortIndicators() {
        const headers = document.querySelectorAll('.sortable-header');
        headers.forEach(header => {
            const field = header.getAttribute('onclick').match(/table.sortTable\('(.+)'\)/)[1];
            const arrow = header.querySelector('.arrow');
            if (field === this.sortField) {
                arrow.innerHTML = this.sortOrder === 'ASC' ? '▲' : '▼';
                header.classList.add('sorted');
            } else {
                arrow.innerHTML = '▲▼';
                header.classList.remove('sorted');
            }
        });
    }
}