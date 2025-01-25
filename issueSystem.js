const db = require('./mysql.js');
const axios = require('axios');
const jszip = require('jszip');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');


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
    const { issueId, name , trans=0} = req.body;
    let query = `UPDATE issues SET `;
    if(name) query +=`name = '${name}', `;
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
    const { issueId, name , trans=0} = req.query;
    let query = `UPDATE issues SET `;
    if(name) query +=`name = '${name}', `;
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
    if(sortField) query += ` ORDER BY ${sortField} ${sortOrder}`;
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

// 导出 Issue 的函数
async function exportIssue(req, res) {
    const { issueId } = req.query;

    try {
        // 获取 Issue 信息
        const issueResponse = await axios.get(`http://localhost:3000/issues?id=${issueId}`);
        const issue = issueResponse.data[0];

        if (!issue) {
            return res.status(404).send('Issue 不存在');
        }

        // 封面图片目录
        const coverDir = path.join(__dirname, 'public', 'covers', issue.name);

        // 如果目录已存在，删除并重新创建
        if (fs.existsSync(coverDir)) {
            fs.rmSync(coverDir, { recursive: true, force: true });
        }
        fs.mkdirSync(coverDir, { recursive: true });

        // 定义各个封面图片路径
        const coverPath = path.join(coverDir, `original.png`);
        const resized900x383Path = path.join(coverDir, `900x383.png`);
        const resized383x383Path = path.join(coverDir, `383x383.png`);
        const combinedImagePath = path.join(coverDir, `combined.png`);
        const backgroundPath = path.join(__dirname, 'public', 'backgrounds', '1.png');

        // 执行 Python 脚本生成图片
        await new Promise((resolve, reject) => {
            execFile(
                'python3',
                [
                    './coverGenerators/coverGenerator2.py',
                    '--text_line2', issue.name,
                    '--background', backgroundPath,
                    '--output_path', coverPath,
                    '--output_path_b', resized900x383Path,
                    '--output_path_c', resized383x383Path,
                    '--combined_output_path', combinedImagePath,
                    '--size_factor', '4'
                ],
                (error, stdout, stderr) => {
                    console.log(stdout);
                    if (error) {
                        reject(`执行错误: ${error}`);
                    } else if (stderr) {
                        reject(`stderr: ${stderr}`);
                    } else {
                        resolve(stdout);
                    }
                }
            );
        });

        // 获取问题列表
        const problemsResponse = await axios.get(`http://localhost:3000/getProblemsInIssue?issueId=${issueId}`);
        const problems = problemsResponse.data;

        // 创建 ZIP 对象
        const zip = new jszip();

        // 遍历问题列表，读取文件并添加到 ZIP 文件
        for (const [index, problem] of problems.entries()) {
            const { subject, name, author, file_path } = problem;
            const fileName = `${String(index + 1).padStart(2, '0')}_${subject}_${name}_${author}.md`;

            // 检查文件路径是否存在
            const fullFilePath = path.join(__dirname, file_path);
            if (fs.existsSync(fullFilePath)) {
                const fileContent = fs.readFileSync(fullFilePath, 'utf8');
                zip.file(fileName, fileContent);
            } else {
                console.error(`文件不存在: ${fullFilePath}`);
            }
        }

        // 创建封面文件夹并将封面图片添加到 ZIP
        const coverFolder = zip.folder('封面');
        coverFolder.file(`${issue.name}_original.png`, fs.readFileSync(coverPath));
        coverFolder.file(`${issue.name}_900x383.png`, fs.readFileSync(resized900x383Path));
        coverFolder.file(`${issue.name}_383x383.png`, fs.readFileSync(resized383x383Path));
        coverFolder.file(`${issue.name}_combined.png`, fs.readFileSync(combinedImagePath));

        // 打包 ZIP 文件
        const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

        // 返回文件给客户端
        const encodedFileName = encodeURIComponent(issue.name) + '.zip';
        res.set('Content-Type', 'application/zip');
        res.set('Content-Disposition', `attachment; filename="${encodedFileName}"`);
        res.send(zipBuffer);
    } catch (error) {
        console.error('导出 Issue 失败:', error);
        res.status(500).send('服务器错误');
    }
}

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
    app.get('/downloadIssue',exportIssue);
}

module.exports = init;