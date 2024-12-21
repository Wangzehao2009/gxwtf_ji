const path = require('path');
const fs = require('fs');
const {marked} = require('marked');
const hljs = require('highlight.js');
const renderer = new marked.Renderer();
const express = require('express');

// 配置 marked 使用 highlight.js 进行代码块高亮
marked.setOptions({
    renderer: renderer,
    gfm: true, // 启用 GitHub Flavored Markdown
    tables: true, // 启用表格支持
    breaks: true, // 启用 GFM 换行符
    highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'; // 确保高亮的语言有效
    return hljs.highlight(code, { language }).value;  // 返回高亮后的代码
  }
});

// 主页路由：展示上传 Markdown 文件的表单
function homePage(req,res){
    res.render('index');
}

// 预览路由：处理 Markdown 文件并渲染
function previewPage(req,res){
    const fileName = req.query.file;

    if (!fileName || !fileName.endsWith('.md')) {
        return res.status(400).send('请提供有效的 Markdown 文件');
    }

    const filePath = path.join(__dirname, 'markdown_files', fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('文件未找到');
    }

    // 读取文件并将 Markdown 转换为 HTML
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('文件读取失败');
        }

        // 使用 marked 将 Markdown 转换为 HTML
        const htmlContent = marked(data);
        // 渲染预览页面
        res.render('preview', { content: htmlContent });
    });
};

// 新增的 /markdown 路由
function markdownPage(req, res){
    const markdownFilePath = path.join(__dirname, 'path_to_your_markdown_file.md');
    fs.readFile(markdownFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading markdown file');
            return;
        }
        const htmlContent = marked(data);
        res.send(htmlContent);
    });
};

function init(app){
    app.set('view engine', 'ejs'); // 设置视图引擎为 EJS
    app.set('views', path.join(__dirname, 'views')); // 设置视图目录
    app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录

    app.get('/mdreader', homePage); // 主页路由
    app.get('/mdreader/preview', previewPage); // 预览路由
    app.get('/mdreader/markdown', markdownPage); // 新增的 /markdown 路由
}

module.exports = init;