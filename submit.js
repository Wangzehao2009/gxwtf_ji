const express = require('express');
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
app.use(express.urlencoded({ extended: true }));
var urlencodedParser=bodyParser.urlencoded({ extended: false });
// 配置数据库连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jzq20100505',
    database: 'guangfang'
});

db.connect(err => {
    if (err) {
        console.error('guangfang 数据库连接失败:', err);
        return;
    }
    console.log('guangfang 数据库连接成功');
});


// 配置文件上传
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

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
            // console.log(passwordMatch);
            if (!passwordMatch) {
                return res.status(401).send(JSON.stringify({ error: '用户名或密码错误' }));
            }
            // console.log(JSON.stringify({ message: '登录成功', userId: user.id }));
            res.status(200).send(JSON.stringify({ message: '登录成功', userId: user.id }));
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send(JSON.stringify({ error: '服务器错误' }));
    }
});

// 提交试题答案（文本或文件）
app.post('/submit', urlencodedParser, upload.single('file'), (req, res) => {
    const { userId, questionName, textSubmission } = req.body;
    const fileSubmission = req.file ? req.file.filename : null;
    console.log(fileSubmission);
    const query = 'INSERT INTO submissions (user_id, question_name, text_submission, file_submission) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, questionName, textSubmission, fileSubmission], (err, result) => {
        if (err) {
            return res.status(500).send(JSON.stringify({ error: '提交失败' }));
        }
        res.status(201).send(JSON.stringify({ message: '提交成功' }));
    });
});

// 获取提交记录
app.get('/submissions/:userId', (req, res) => {
    const userId = req.params.userId;

    const query = `
        SELECT u.real_name, s.submission_time, s.question_name
        FROM submissions s
        JOIN users u ON s.user_id = u.id
        WHERE s.user_id = ?
        ORDER BY s.submission_time DESC
    `;

    db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).send(JSON.stringify({ error: '获取提交记录失败' }));
        }
        res.status(200).send(JSON.stringify(results));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});