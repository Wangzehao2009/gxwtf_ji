const db = require('./mysql.js');

// 新建一期并插入多个题目
async function newissue(req, res) {
    const { name, problemIds } = req.body; // 接收问题 ID 列表
    try {
        db.query(
            'INSERT INTO issues (name) VALUES (?)',
            [name],
            (err, result) => {
                if (err) return res.status(500).json({ error: '未登录' });
                const issueId = result.insertId;

                // 插入多个题目
                if (problemIds && problemIds.length > 0) {
                    const values = problemIds.map(problemId => [issueId, problemId]);
                    db.query(
                        'INSERT INTO issue_problem_graph (issue_id, problem_id) VALUES ?',
                        [values],
                        (err, result) => {
                            if (err) return res.status(500).json({ error: '数据库错误' + err });
                            return res.status(200).json({ message: '提交成功', issueId: issueId });
                        }
                    );
                } else {
                    return res.status(200).json({ message: '提交成功', issueId: issueId });
                }
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 搜索题目
async function searchProblems(req, res) {
    const { query } = req.query;
    try {
        db.query(
            'SELECT * FROM problems WHERE id LIKE ? OR name LIKE ?',
            [`%${query}%`, `%${query}%`],
            (err, results) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json(results);
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 插入从属关系
async function addProblemToIssue(req, res) {
    const { issueId, problemId } = req.body;
    try {
        db.query(
            'INSERT INTO issue_problem_graph (issue_id, problem_id) VALUES (?, ?)',
            [issueId, problemId],
            (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json({ message: '题目添加成功' });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 删除从属关系
async function removeProblemFromIssue(req, res) {
    const { issueId, problemId } = req.body;
    try {
        db.query(
            'DELETE FROM issue_problem_graph WHERE issue_id = ? AND problem_id = ?',
            [issueId, problemId],
            (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json({ message: '题目删除成功' });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 查询某个 issue 中包含的题目
async function getProblemsInIssue(req, res) {
    const { issueId } = req.query;
    try {
        db.query(
            'SELECT problems.* FROM problems JOIN issue_problem_graph ON problems.id = issue_problem_graph.problem_id WHERE issue_problem_graph.issue_id = ?',
            [issueId],
            (err, results) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json(results);
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 保存题单
async function saveIssue(req, res) {
    const { issueId, problemIds } = req.body;
    try {
        // 删除旧的从属关系
        db.query(
            'DELETE FROM issue_problem_graph WHERE issue_id = ?',
            [issueId],
            (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });

                // 插入新的从属关系
                if (problemIds && problemIds.length > 0) {
                    const values = problemIds.map(problemId => [issueId, problemId]);
                    db.query(
                        'INSERT INTO issue_problem_graph (issue_id, problem_id) VALUES ?',
                        [values],
                        (err, result) => {
                            if (err) return res.status(500).json({ error: '数据库错误' + err });
                            return res.status(200).json({ message: '题单保存成功' });
                        }
                    );
                } else {
                    return res.status(200).json({ message: '题单保存成功' });
                }
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

function init(app, fileStorage) {
    app.post('/newissue', fileStorage.single('file'), newissue);
    app.get('/searchProblems', searchProblems);
    app.post('/addProblemToIssue', addProblemToIssue);
    app.post('/removeProblemFromIssue', removeProblemFromIssue);
    app.get('/getProblemsInIssue', getProblemsInIssue);
    app.post('/saveIssue', saveIssue);
}

module.exports = init;