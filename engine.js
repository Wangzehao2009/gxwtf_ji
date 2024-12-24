const fs = require('fs');
const path = require('path');

// 递归读取目录中的所有文件
function readFilesRecursively(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            readFilesRecursively(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });
    return fileList;
}

// 引擎初始化
function engineInit(app) {
    const files = readFilesRecursively('html');
    files.forEach(file => {
        const routePath = '/' + path.relative('html', file).replace(/\\/g, '/').replace(/\.html$/, '');
        app.get(routePath, (req, res) => {
            fs.readFile(file, (err, data) => {
                if (err) {
                    res.status(500).send('服务器错误');
                    return;
                }
                res.end(data);
            });
        });
    });
}

module.exports = engineInit;