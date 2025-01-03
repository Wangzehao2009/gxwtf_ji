const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const express = require('express');
const os = require('os');

// 主页路由：展示上传 Markdown 文件的表单
function homePage(req, res) {
    res.render('index');
}

function previewPage(req, res) {
    const fileName = req.query.file;
    
    if (!fileName || !fileName.endsWith('.md')) {
        return res.status(400).send('请提供有效的 Markdown 文件');
    }

    const filePath = path.join(__dirname, 'uploads', fileName);

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

function render(req, res)
{
    const markdownContent = req.body.markdown;

    // 创建临时文件路径
    const fileName = "tmp_" + Math.floor(Math.random()*(1e6)).toString() + '.md';
    const tempFilePath = path.join(os.tmpdir(), fileName);

    // 将Markdown内容写入临时文件
    fs.writeFile(tempFilePath,markdownContent, (err) => {
        if (err) return res.status(500).send('文件写入错误');
        exec(`pandoc "${tempFilePath}" -f markdown -t html --mathml`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return res.status(500).send('渲染错误');
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return res.status(500).send('渲染错误');
            }
            
            res.send({ html: stdout });
        });
    });
}

// 处理 /mdeditor 请求
function mdEditorPage(req, res) {
    const fileName = req.query.file;
    
    if (!fileName || !fileName.endsWith('.md')) {
        return res.status(400).send('请提供有效的 Markdown 文件');
    }

    const filePath = path.join(__dirname,fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('文件未找到');
    }

    res.sendFile(path.join(__dirname, 'html', 'mdeditor.html'), {
        headers: {
            'X-File-Path': filePath
        }
    });
}

function getFileContent(req, res) {
    const fileName = req.params[0]; // 使用通配符获取文件路径
    
    if (!fileName || !fileName.endsWith('.md')) {
        return res.status(400).send('请提供有效的 Markdown 文件');
    }

    const filePath = path.join(__dirname,fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('文件未找到');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('文件读取错误');
        }
        res.send({ content: data });
    });
}

function init(app) {
    app.set('view engine', 'ejs'); // 设置视图引擎为 EJS
    app.set('views', path.join(__dirname, 'views')); // 设置视图目录
    app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录
    app.get('/mdreader', homePage); // 主页路由
    app.get('/mdreader/preview', previewPage); // 预览路由
    app.post('/mdreader/render', render); // 渲染路由
    app.get('/mdeditor', mdEditorPage); // 修改为处理查询参数的路由
    app.get('/filecontent/*', getFileContent); // 获取文件内容的路由，支持子目录
}

module.exports = init;
