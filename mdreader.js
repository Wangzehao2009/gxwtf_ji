const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const express = require('express');

// 主页路由：展示上传 Markdown 文件的表单
function homePage(req, res) {
    res.render('index');
}

// 预览路由：处理 Markdown 文件并渲染
function previewPage(req, res) {
    const fileName = req.query.file;

    if (!fileName || !fileName.endsWith('.md')) {
        return res.status(400).send('请提供有效的 Markdown 文件');
    }

    const filePath = path.join(__dirname, 'markdown_files', fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('文件未找到');
    }

    // 使用 pandoc 将 Markdown 转换为 HTML
    exec(`pandoc ${filePath} -f markdown -t html --mathml`, (err, stdout, stderr) => {
        if (err) {
            console.error(`执行 pandoc 时出错: ${stderr}`);
            return res.status(500).send('文件转换失败');
        }

        // 渲染预览页面
        res.render('preview', { content: stdout });
    });
}

function init(app) {
    app.set('view engine', 'ejs'); // 设置视图引擎为 EJS
    app.set('views', path.join(__dirname, 'views')); // 设置视图目录
    app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录
    app.get('/mdreader', homePage); // 主页路由
    app.get('/mdreader/preview', previewPage); // 预览路由
}

module.exports = init;