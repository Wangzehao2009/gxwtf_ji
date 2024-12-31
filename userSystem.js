const bcrypt = require('bcrypt');
const db = require('./mysql');
const saltRounds = 10;

// 注册
async function register(req,res){
    const { username, real_name, school, grade, phone, email, password } = JSON.parse(req.body);
    // console.log(username, real_name, school, grade, phone, email, password);
    // 确保密码存在
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
function login(req,res){
    const { username, password } = JSON.parse(req.body);

    try{
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
            // console.log(JSON.stringify({ message: '登录成功', userId: user.id }));
            const userId = user.id;
            console.log("userId =",userId);
            // 设置一个 cookie 存储 userId，有效期为 1 天
            res.cookie('userId', userId, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
            res.status(200).send(JSON.stringify({ message: '登录成功', userId: user.id }));
            console.log('登录成功，userId 已存储在 cookie 中');
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send(JSON.stringify({ error: '服务器错误' }));
    }
}

// 登出
function logout(req,res){
    // 清空 userId 的 cookie
    res.clearCookie('userId');
    res.send('您已登出，userId cookie 已清除');
}

// 登录状态
function loginStatus(req,res){
    const userId = req.cookies.userId;
    if (userId) {
        res.json({ message: `欢迎回来，用户ID：${userId}` ,userId: userId});
    } else {
        res.status(401).json({ error: '未授权访问，请登录' });
    }
}

// 用户列表
function userList(req, res) {
    const { id, name, sortField = 'id', sortOrder = 'ASC', page = 1, pageSize = 15 } = req.query;

    // 构建 SQL 查询条件
    let query = 'SELECT * FROM users WHERE 1=1';
    if (id) query += ` AND id = ${id}`;
    if(name) query += ` AND (username = ${name} or real_name = ${name})`;
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

function init(app){
    app.post('/register', register);
    app.post('/login', login);
    app.get('/logout', logout);
    app.get('/dashboard', loginStatus);
    app.get('/users', userList);
}

module.exports = init;