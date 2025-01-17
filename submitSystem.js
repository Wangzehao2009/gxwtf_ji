const axios = require('axios');
const db = require('./mysql.js');
const fs = require('fs');
const path = require('path');

// 保存提交
async function submit(req, res) {
    const { userId, issue_id, problem_id } = req.body;
    const file_path = req.file ? req.file.path : null;
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
            axios.get(`/problems?id=${problem_id}`)
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
                            db.query(
                                `UPDATE problems set submit_num=${problem.submit_num+1} where id=${problem.id}`,
                                (err,result2)=>{
                                    if(err){
                                        console.error('数据库错误', err);
                                        return res.status(500).json({ error: '数据库错误' });
                                    }
                                    return res.status(200).json({ message: '提交成功', submissionId: result.insertId });
                                }
                            );
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
async function submitlist(req, res) {
    const { userId, issue_id, subject, problem_id, sortField = 'id', sortOrder = 'ASC', page = 1, pageSize = 15 } = req.query;
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
        await axios.get(`http://localhost:3000/users?name="${userId}"`)
        .then(response => {
            if(response.data.length === 0){
                query += ` AND submissions.user_id = ${db.escape(userId)}`;
                return;
            }
            const realuser_id = response.data[0].id;
            query += ` AND (submissions.user_id = ${db.escape(userId)} OR submissions.user_id = ${db.escape(realuser_id)})`;
        });
    }
    if (issue_id) {
        await axios.get(`http://localhost:3000/issues?search=${issue_id}`)
            .then(response => {
                if(response.data.length === 0){
                    query += ` AND submissions.issue_id = ${db.escape(issue_id)}`;
                    return;
                }
                const realissue_id = response.data[0].id;
                query += ` AND (submissions.issue_id = ${db.escape(issue_id)} OR submissions.issue_id = ${db.escape(realissue_id)})`;
            });
    }
    if(subject) query+=` AND submissions.subject=${db.escape(subject)}`;
    if (problem_id) {
        await axios.get(`http://localhost:3000/problems?search=${problem_id}`)
            .then(response => {
                if(response.data.length === 0){
                    query += ` AND submissions.problem_id = ${db.escape(problem_id)}`;
                    return;
                }
                const realproblem_id = response.data[0].id;
                query += ` AND (submissions.problem_id = ${db.escape(problem_id)} OR submissions.problem_id = ${db.escape(realproblem_id)})`;
            });
    }
    // 排序
    query += ` ORDER BY ${sortField} ${sortOrder}`;
    // 分页
    const offset = (page - 1) * pageSize;
    query += ` LIMIT ${pageSize} OFFSET ${offset}`;

    // 查询数据
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results);
    });
}

// 获取提交记录总数
function submitcount(req, res) {
    const { userId, issue_id, submission_id, subject, excel } = req.query;
    let query = 'SELECT COUNT(*) AS count FROM submissions WHERE 1=1';
    if (userId) {
        query += ` AND user_id = ${db.escape(userId)}`;
    }
    if (issue_id) {
        query += ` AND issue_id = ${db.escape(issue_id)}`;
    }
    if (submission_id) {
        query += ` AND problem_id = ${db.escape(submission_id)}`;
    }
    if (subject){
        query += ` AND subject= ${db.escape(subject)}`;
    }
    if (excel){
        query += `AND is_excel_answer = 1`;
    }
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

// 删除提交记录
function deleteSubmission(req, res) {
    const submissionId = req.params.id;
    // 查询题目文件路径
    db.query('SELECT * FROM submissions WHERE id = ?', [submissionId], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, error: '查询失败', details: err });
        }
        const submission = results[0];
        const filePath = submission.file_path;
        const problemId = submission.problem_id;
        axios.get(`/problems?id=${problemId}`)
            .then(response => {
                const problem = response.data[0];
                // 删除题目记录
                db.query('DELETE FROM submissions WHERE id = ?', [submissionId], (err) => {
                    if (err) {
                        return res.status(500).json({ success: false, error: '删除失败', details: err });
                    }
        
                    db.query(
                        `UPDATE problems set submit_num=${problem.submit_num-1} where id=${problem.id}`,
                        (err)=>{if(err) console.error('数据库错误', err);}
                    );
        
                    // 删除文件
                    if (filePath) {
                        fs.unlink(path.join(__dirname, filePath), (err) => {
                            if (err) {
                                return res.status(500).json({ success: false, error: '文件删除失败', details: err });
                            }
                            res.json({ success: true, message: '提交记录及文件删除成功' });
                        });
                    } else {
                        res.json({ success: true, message: '提交记录删除成功，但未找到文件路径' });
                    }
                });
            })
            .catch(error => {
            console.error('查询题目信息时出错:', error);
        });

    });
}

function init(app, fileStorage) {
    app.post('/submit', fileStorage.single('file'), submit);
    app.get('/submissions', submitlist);
    app.get('/submissions/count', submitcount);
    app.delete('/submissions/:id', deleteSubmission);
}

module.exports = init;