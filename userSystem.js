const bcrypt = require('bcrypt');
const db = require('./mysql');
const saltRounds = 10;

// 注册
async function register(req, res) {
    const { username, real_name, school, grade, phone, email, password } = JSON.parse(req.body);
    if (!password) {
        return res.status(400).send(JSON.stringify({ error: '密码不能为空' }));
    }
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const query = 'INSERT INTO users (username, real_name, school, grade, phone, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [username, real_name, school, grade, phone, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('数据库错误:', err);
                return res.status(500).send(JSON.stringify({ error: '用户注册失败' }));
            }
            res.status(201).send(JSON.stringify({ message: '用户注册成功' }));
        });
    } catch (error) {
        console.error('服务器错误:', error);
        res.status(500).send(JSON.stringify({ error: '服务器错误' }));
    }
}

// 登录
function login(req, res) {
    const { username, password } = JSON.parse(req.body);
    try {
        const query = 'SELECT * FROM users WHERE username = ?';
        db.query(query, [username], async (err, results) => {
            if (err || results.length === 0) {
                return res.status(401).send(JSON.stringify({ error: '用户名或密码错误' }));
            }
            const user = results[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).send(JSON.stringify({ error: '用户名或密码错误' }));
            }
            const userId = user.id;
            res.cookie('userId', userId, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
            res.status(200).send(JSON.stringify({ message: '登录成功', userId: user.id }));
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(JSON.stringify({ error: '服务器错误' }));
    }
}

// 登出
function logout(req, res) {
    res.clearCookie('userId');
    res.status(200).send(JSON.stringify({ message: '成功登出' }));
}

// 登录状态
function loginStatus(req, res) {
    const userId = req.cookies.userId;
    if (userId) {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [userId], (err, results) => {
            if (err || results.length === 0) {
                return res.status(401).json({ error: '未授权访问，请登录' });
            }
            const username = results[0].username;
            const admin = results[0].admin;
            res.json({ userId: userId, userName: username, admin: admin});
        });
    } else {
        res.status(401).json({ error: '未授权访问，请登录' });
    }
}

// 用户列表
function userList(req, res) {
    const { id, name, sortField = 'id', sortOrder = 'ASC', page = 1, pageSize = 15 } = req.query;
    let query = 'SELECT * FROM users WHERE 1=1';
    if (id) query += ` AND id = ${id}`;
    if (name) query += ` AND (username = ${name} or real_name = ${name})`;
    query += ` ORDER BY ${sortField} ${sortOrder}`;
    const offset = (page - 1) * pageSize;
    query += ` LIMIT ${pageSize} OFFSET ${offset}`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results);
    });
}

// 获取提交记录总数
function userCount(req, res) {

    let query = 'SELECT COUNT(*) AS count FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results[0]);
    });
}

function init(app) {
    app.post('/register', register);
    app.post('/login', login);
    app.get('/logout', logout);
    app.get('/dashboard', loginStatus);
    app.get('/users', userList);
    app.get('/users/count',userCount);
}

module.exports = init;