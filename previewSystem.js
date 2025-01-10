const express = require('express');
const path = require('path');
const fs = require('fs');

// 辅助函数：获取文件扩展名
function getFileExtension(fileName) {
    return path.extname(fileName).toLowerCase();
}

// 预览路由
function preview(req,res){
    const file = req.query.file;

    if (!file) {
        return res.status(400).send('File parameter is required');
    }

    // 解码文件路径
    const decodedFile = decodeURIComponent(file);
    const filePath = path.resolve(__dirname, decodedFile);

    // 确认文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found');
    }

    const ext = getFileExtension(decodedFile);

    if (ext === '.md') {
        // Markdown 文件，重定向到渲染页面
        res.redirect(`/mdreader/preview?file=${encodeURIComponent(decodedFile)}`);
    } else if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.pdf', '.txt'].includes(ext)) {
        // 图片、PDF 或 TXT 文件，返回文件
        res.sendFile(filePath);
    } else {
        res.status(415).send('Unsupported file type');
    }
}

function init(app){
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
    app.get('/preview', preview);
}

module.exports=init;
