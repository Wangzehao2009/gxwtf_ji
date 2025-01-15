const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const userSystem = require('./userSystem.js');
const fileStorage = require('./fileStorage.js');
const submitSystem = require('./submitSystem.js');
const problemSystem = require('./problemSystem.js');
const issueSystem = require('./issueSystem.js');
const markdown = require('./markdown.js');
const imageUpload = require('./imageUpload.js');
const rankSystem = require('./rankSystem.js');
const previewSystem = require('./previewSystem.js');
const announcementSystem = require('./announcementSystem.js');
const hangman = require("./hangman.js");
const gridGame = require("./gridGame.js");

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.text());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 引擎
const engine = require('./engine.js');

engine(app);
announcementSystem(app);
userSystem(app); // 用户系统
submitSystem(app, fileStorage); // 提交系统
problemSystem(app, fileStorage); // 题目系统
issueSystem(app, fileStorage); // 期刊系统
markdown(app); // Markdown 阅读器
rankSystem(app); // 排名系统
previewSystem(app); //预览系统
app.use('/image', imageUpload); // 图床功能
// 提供静态文件服务
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

hangman(app);
gridGame(app);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});