const fs = require('fs');
const path = require('path');
const express = require('express');
const marked = require('marked');

async function previewPage(req, res) {
    const fileName = req.query.file;
    if (!fileName) {
        return res.status(400).send('请提供有效的 Markdown 文件');
    }

    const filePath = path.join(__dirname, 'uploads', fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('文件未找到');
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const renderedHTML = marked.parse(fileContent);
        res.render('preview', { content: renderedHTML });
    } catch (error) {
        console.error(`渲染 Markdown 时出错: ${error}`);
        res.status(500).send('文件渲染失败');
    }
}

function init(app) {
    app.set('view engine', 'ejs'); // 设置视图引擎为 EJS
    app.set('views', path.join(__dirname, 'views')); // 设置视图目录
    app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录
    app.get('/mdreader/preview', previewPage); // 预览路由
}

module.exports = init;