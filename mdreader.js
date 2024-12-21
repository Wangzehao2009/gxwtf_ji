const express = require('express');
const { marked } = require('marked');
const path = require('path');
const fs = require('fs');
const app = express();

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

a

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Markdown 预览工具正在运行，访问 http://localhost:${PORT}`);
});