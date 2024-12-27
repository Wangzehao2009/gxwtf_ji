const axios = require('axios');
const db = require('./mysql.js');

// 保存提交
async function submit(req, res) {
    const { userId, issue_id, problem_id } = req.body;
    const file_path = req.file ? req.file.path : null;

    console.log('提交数据:', { userId, issue_id, problem_id, file_path });

    // 检查 problem_id 是否属于 issue_id
    db.query(
        'SELECT * FROM issue_problem_graph WHERE issue_id = ? AND problem_id = ?',
        [issue_id, problem_id],
        (err, results) => {
            if (err) {
                console.error('查询问题时出错:', err);
                return res.status(500).json({ error: '查询失败' });
            }
            if (results.length === 0) {
                return res.status(400).json({ error: '题目号不属于该期号' });
            }

            // 查询 problem_id 所对应的 problem 的 subject
            axios.get(`http://localhost:3000/problems?id=${problem_id}`)
                .then(response => {
                    const problem = response.data[0];
                    const subject = problem.subject;

                    // 插入提交记录
                    db.query(
                        'INSERT INTO submissions (user_id, issue_id, problem_id, subject, file_path) VALUES (?, ?, ?, ?, ?)',
                        [userId, issue_id, problem_id, subject, file_path],
                        (err, result) => {
                            if (err) {
                                console.error('插入提交记录时出错:', err);
                                return res.status(500).json({ error: '未登录' });
                            }
                            return res.status(200).json({ message: '提交成功', submissionId: result.insertId });
                        }
                    );
                })
                .catch(error => {
                    console.error('查询题目信息时出错:', error);
                    return res.status(500).json({ error: '查询题目信息失败' });
                });
        }
    );
}

// 获取提交记录列表
function submitlist(req, res) {
    const { userId, issue_id, problem_id, sortField = 'id', sortOrder = 'ASC', search = '', page = 1, pageSize = 15 } = req.query;

    // 构建 SQL 查询条件
    let query = `
        SELECT submissions.*, users.username, issues.name AS issue_name, problems.name AS problem_name, submissions.time
        FROM submissions
        JOIN users ON submissions.user_id = users.id
        JOIN issues ON submissions.issue_id = issues.id
        JOIN problems ON submissions.problem_id = problems.id
        WHERE 1=1
    `;
    if (userId) {
        query += ` AND submissions.user_id = ${db.escape(userId)}`;
    }
    if (issue_id) {
        query += ` AND submissions.issue_id = ${db.escape(issue_id)}`;
    }
    if (problem_id) {
        query += ` AND submissions.problem_id = ${db.escape(problem_id)}`;
    }
    if (search) {
        query += ` AND (submissions.subject LIKE '%${search}%' OR submissions.file_path LIKE '%${search}%')`;
    }
    // 排序
    query += ` ORDER BY ${sortField} ${sortOrder}`;
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

// 获取提交记录总数
function submitcount(req, res) {
    const { userId, issue_id, problem_id, search = '' } = req.query;
    let query = 'SELECT COUNT(*) AS count FROM submissions WHERE 1=1';
    if (userId) {
        query += ` AND user_id = ${db.escape(userId)}`;
    }
    if (issue_id) {
        query += ` AND issue_id = ${db.escape(issue_id)}`;
    }
    if (problem_id) {
        query += ` AND problem_id = ${db.escape(problem_id)}`;
    }
    if (search) {
        query += ` AND (subject LIKE '%${search}%' OR file_path LIKE '%${search}%')`;
    }
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

function init(app, fileStorage) {
    app.post('/submit', fileStorage.single('file'), submit);
    app.get('/submissions', submitlist);
    app.get('/submissions/count', submitcount);
}

module.exports = init;