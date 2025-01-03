const db = require('./mysql.js');

// 题目列表
function problemlist(req, res) {
    const { id, subject, sortField = 'id', sortOrder = 'ASC', search = '', page = 1, pageSize = 15 } = req.query;
    console.log("enter");
    // 构建 SQL 查询条件
    let query = 'SELECT * FROM problems WHERE 1=1';
    if (id) {
        query += ` AND id = ${id}`;
    } else {
        if (subject) query += ` AND subject = '${subject}'`;
        if (search) query += ` AND (name LIKE '%${search}%' OR author LIKE '%${search}%')`;
        // 排序
        query += ` ORDER BY ${sortField} ${sortOrder}`;
        // 分页
        const offset = (page - 1) * pageSize;
        query += ` LIMIT ${pageSize} OFFSET ${offset}`;
    }

    // 查询数据
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results);
    });
}

// 题目总数
function problemcount(req,res){
    const { id, subject, search = '' } = req.query;
    let query = 'SELECT COUNT(*) AS count FROM problems WHERE 1=1';
    if (id) {
        query += ` AND id = ${id}`;
    }
    if (subject) {
        query += ` AND subject = '${subject}'`;
    }
    if (search) {
        query += ` AND (name LIKE '%${search}%' OR author LIKE '%${search}%')`;
    }
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

function init(app){
    app.get('/problems', problemlist);
    app.get('/problems/count', problemcount);
}

module.exports=init;
