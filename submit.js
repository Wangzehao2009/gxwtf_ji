const express = require('express');
const cookieParser = require('cookie-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const { url } = require('inspector');
const fs=require('fs');

const app = express();
const saltRounds = 10;

app.use(express.text());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const urlencodedParser=bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 配置数据库连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'guangfang'
});

db.connect(err => {
    if (err) {
        console.error('guangfang 数据库连接失败:', err);
        return;
    }
    console.log('guangfang 数据库连接成功');
});

// 引擎
fs.readdir('html',(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    for(var i=0;i<files.length;i++){
        app.get('/'+files[i],(req,res)=>{
            var data=fs.readFileSync('html'+req.originalUrl);
            res.end(data);
        });
    }
});

// 注册用户
app.post('/register', urlencodedParser, async (req, res) => {
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
});

// 用户登录
app.post('/login', urlencodedParser, (req, res) => {
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
});

// 退出登录
app.get('/logout', (req, res) => {
    // 清空 userId 的 cookie
    res.clearCookie('userId');
    res.send('您已登出，userId cookie 已清除');
});

// 获取并使用 cookie 的路由示例
app.get('/dashboard', (req, res) => {
    const userId = req.cookies.userId; // 读取 'userId' 的 cookie

    if (userId) {
        // 这里可以查询数据库来获取用户的详细信息
        res.json({ message: `欢迎回来，用户ID：${userId}` ,userId: userId});
        
    } else {
        res.status(401).json({ error: '未授权访问，请登录' });
    }
});

// 设置文件上传存储
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        console.log(req.body);
        const userId = JSON.req.body;
        console.log("jijiji",userId);
        const uniqueSuffix = Date.now() + '-' + toString(userId);
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


// 提交记录的路由
app.post('/submit', upload.single('file'), async (req, res) => {
    const { user_id, phase_id, subject } = req.body;
    const file_path = req.file ? req.file.path : null;
    console.log(file_path);
    try {
        const [result] = await db.query(
            'INSERT INTO submissions (user_id, phase_id, subject, file_path) VALUES (?, ?, ?, ?)',
            [user_id, phase_id, subject, file_path]
        );

        res.json({ message: '提交成功', submissionId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
});

// 显示提交记录的路由
app.get('/submissions', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM submissions');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});