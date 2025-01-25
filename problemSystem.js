const fs = require('fs');
const path = require('path');
const db = require('./mysql.js');

// 获取最新的 problem_id
function getLatestProblemId(req, res) {
    db.query('SELECT MAX(id) AS latestId FROM problems', (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

// 新建题目
async function newproblem(req, res) {
    const { name, subject, author , filePath} = req.body;
    let file_path = req.file ? req.file.path : null;
    if(filePath) file_path = filePath;
    try {
        db.query(
            'INSERT INTO problems (name, subject, author, file_path) VALUES (?, ?, ?, ?)',
            [name, subject, author, file_path],
            (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json({ message: '提交成功', submissionId: result.insertId });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 题目列表
function problemlist(req, res) {
    const { id, subject, name, sortField = 'id', sortOrder = 'ASC', search = '', page = 1, pageSize = 15 ,visible } = req.query;

    // 构建 SQL 查询条件
    let query = 'SELECT * FROM problems WHERE 1=1';
    if (id) {
        query += ` AND id = ${id}`;
    } else {
        if (subject) query += ` AND subject = '${subject}'`;
        if (search) query += ` AND (name LIKE '%${search}%' OR author LIKE '%${search}%')`;
    }
    if(visible) query += ` AND visible = ${visible}`;
    // 排序
    if(sortField) query += ` ORDER BY ${sortField} ${sortOrder}`;
    // 分页
    const offset = (page - 1) * pageSize;
    query += ` LIMIT ${pageSize} OFFSET ${offset}`;

    // 查询数据
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results);
    });
}

// 题目总数
function problemcount(req, res) {
    const { id, subject, search = '' ,visible} = req.query;
    let query = 'SELECT COUNT(*) AS count FROM problems WHERE 1=1';
    if (id) query += ` AND id = ${id}`;
    if (subject) {
        query += ` AND subject = '${subject}'`;
    }
    if (search) {
        query += ` AND (name LIKE '%${search}%' OR author LIKE '%${search}%')`;
    }
    if(visible) query += ` AND visible = ${visible}`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

// 删除题目
function deleteProblem(req, res) {
    const problemId = req.params.id;
    // 查询题目文件路径
    db.query('SELECT file_path FROM problems WHERE id = ?', [problemId], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, error: '查询失败', details: err });
        }
        const filePath = results[0].file_path;
        console.log(filePath);
        // 删除题目记录
        db.query('DELETE FROM problems WHERE id = ?', [problemId], (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, error: '删除失败', details: err });
            }

            // 删除文件
            if (filePath) {
                fs.unlink(path.join(__dirname, filePath), (err) => {
                    if (err) {
                        return res.status(500).json({ success: false, error: '文件删除失败', details: err });
                    }
                    res.json({ success: true, message: '题目及文件删除成功' });
                });
            } else {
                res.json({ success: true, message: '题目删除成功，但未找到文件路径' });
            }
        });
    });
}

// 保存 issue 基本信息get
async function saveProblem(req, res) {
    const { problemId, name , trans} = req.query;
    let query = `UPDATE problems SET `;
    if(name) query +=`name = ${name}, `;
    query+=`visible = visible ^ ${trans} WHERE id = ${problemId}`;
    try {
        db.query(query, (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json({ message: '基本信息保存成功' });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

function init(app, fileStorage) {
    app.post('/newproblem', fileStorage.single('file'), newproblem);
    app.get('/problems', problemlist);
    app.get('/problems/count', problemcount);
    app.get('/problems/latestId', getLatestProblemId); // 添加获取最新 problem_id 的路由
    app.get('/problems/save',saveProblem);
    app.delete('/problems/:id', deleteProblem);
}

module.exports = init;