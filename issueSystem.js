const db = require('./mysql.js');

// 新建 issue 并保存基本信息
async function newEmptyIssue(req, res) {
    const { name } = req.body;
    try {
        db.query(
            'INSERT INTO issues (name) VALUES (?)',
            [name],
            (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                const issueId = result.insertId;
                return res.status(200).json({ message: '提交成功', issueId: issueId });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

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
                console.log(issueId);

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

// 删除 issue
async function deleteIssue(req, res) {
    const { issueId } = req.query;
    try {
        // 删除 issue_problem_graph 表中相关记录
        db.query(
            'DELETE FROM issue_problem_graph WHERE issue_id = ?',
            [issueId],
            (err, result) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });

                // 删除 issues 表中相关记录
                db.query(
                    'DELETE FROM issues WHERE id = ?',
                    [issueId],
                    (err, result) => {
                        if (err) return res.status(500).json({ error: '数据库错误' + err });
                        return res.status(200).json({ message: '删除成功' });
                    }
                );
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 保存 issue 基本信息
async function saveIssueBasicInfo(req, res) {
    const { issueId, name , trans} = req.body;
    let query = `UPDATE issues SET `;
    if(name) query +=`name = ${name}, `;
    query+=`visible = visible ^ ${trans} WHERE id = ${issueId}`;
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

// 保存 issue 基本信息get
async function saveIssueBasicInfoget(req, res) {
    const { issueId, name , trans} = req.query;
    let query = `UPDATE issues SET `;
    if(name) query +=`name = ${name}, `;
    query+=`visible = visible ^ ${trans} WHERE id = ${issueId}`;
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

// 搜索题目
async function searchProblems(req, res) {
    const { query } = req.query;
    try {
        db.query(
            'SELECT * FROM problems WHERE id=? OR name LIKE ?',
            [`${query}`, `%${query}%`],
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
    const { issueId , problemId, subject, sortField = 'id', sortOrder = 'ASC', search = '', page = 1, pageSize = 15 } = req.query;
    let query = `SELECT problems.* FROM problems JOIN issue_problem_graph ON problems.id = issue_problem_graph.problem_id`;
    if (problemId) {
        query += ` AND problems.id = ${problemId}`;
    } else {
        if (subject) query += ` AND problems.subject = '${subject}'`;
        if (search) query += ` AND (name LIKE '%${search}%' OR author LIKE '%${search}%')`;
    }
    query += ` WHERE issue_problem_graph.issue_id = ${issueId}`;
    // 排序
    query += ` ORDER BY ${sortField} ${sortOrder}`;
    // 分页
    const offset = (page - 1) * pageSize;
    query += ` LIMIT ${pageSize} OFFSET ${offset}`;
    try {
        db.query(query, (err, results) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json(results);
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

// 获取某个 issue 中包含的题目的总数
async function getProblemsInIssueCount(req, res) {
    const { issueId , problemId, subject , search=''} = req.query;
    let query = `SELECT problems.* FROM problems JOIN issue_problem_graph ON problems.id = issue_problem_graph.problem_id`;
    if (problemId) {
        query += ` AND problems.id = ${problemId}`;
    } else {
        if (subject) query += ` AND problems.subject = '${subject}'`;
        if (search) query += ` AND (name LIKE '%${search}%' OR author LIKE '%${search}%')`;
    }
    query += ` WHERE issue_problem_graph.issue_id = ${issueId}`;
    try {
        db.query(query, (err, results) => {
                if (err) return res.status(500).json({ error: '数据库错误' + err });
                return res.status(200).json(results[0]);
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

// 获取 issue 列表
async function issueList(req, res) {
    const { sortField = 'id', sortOrder = 'DESC', page = 1, pageSize = 15, search, id , visible } = req.query;

    // 构建 SQL 查询条件
    let query = 'SELECT * FROM issues WHERE 1=1';
    if (id) {
        query += ` AND id = ${db.escape(id)}`;
    }
    if (search) {
        query += ` AND name LIKE ${db.escape('%' + search + '%')}`;
    }
    if(visible){
        query += ` AND visible = ${visible}`;
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

// 获取 issue 总数
async function issueCount(req, res) {
    const { id, search, visible } = req.query;
    let query = 'SELECT COUNT(*) AS count FROM issues WHERE 1=1';
    if (id) {
        query += ` AND id=${id}`;
    }
    if (search) {
        query += ` AND name LIKE ${db.escape('%' + search + '%')}`;
    }
    if(visible){
        query += ` AND visible = ${visible}`;
    }
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

//修改issue基本信息


function init(app, fileStorage) {
    app.post('/newEmptyIssue', newEmptyIssue);
    app.post('/newissue', fileStorage.single('file'), newissue);
    app.get('/deleteissue', deleteIssue);
    app.post('/saveIssueBasicInfo', saveIssueBasicInfo);
    app.get('/saveIssueBasicInfo', saveIssueBasicInfoget);
    app.get('/searchProblems', searchProblems);
    app.post('/addProblemToIssue', addProblemToIssue);
    app.post('/removeProblemFromIssue', removeProblemFromIssue);
    app.get('/getProblemsInIssue', getProblemsInIssue);
    app.get('/getProblemsInIssue/count', getProblemsInIssueCount); // 添加获取某个 issue 中包含的题目总数的路由
    app.post('/saveIssue', saveIssue);
    app.get('/issues', issueList); // 添加获取 issue 列表的路由
    app.get('/issues/count', issueCount); // 添加获取 issue 总数的路由
}

module.exports = init;