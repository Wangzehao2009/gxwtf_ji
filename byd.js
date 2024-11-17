const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const { url } = require('inspector');

const app = express();
const saltRounds = 10;

app.use(express.text());
app.use(express.urlencoded({ extended: true }));
var urlencodedParser=bodyParser.urlencoded({ extended: false });

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

app.get('/byd',(req,res)=>{
    res.end('byd');
})
app.post('/byd', urlencodedParser, (req, res) => {
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
            console.log(JSON.stringify({ message: '登录成功', userId: user.id }));
            res.status(200).send(JSON.stringify({ message: '登录成功', userId: user.id }));
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send(JSON.stringify({ error: '服务器错误' }));
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});