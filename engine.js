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

    // 保存文件的 API
    app.post('/save', (req, res) => {
        const { filePath, content } = req.body;
    
        // 检查 filePath 是否为空
        if (!filePath || filePath.trim() === '') {
            return res.status(400).json({ error: '文件未命名' });
        }
    
        const fullPath = path.join(__dirname, filePath);
        fs.writeFile(fullPath, content, (err) => {
            if (err) {
                console.error('文件保存失败:', err);
                return res.status(500).json({ error: '文件保存失败' });
            }
            res.status(200).json({ message: '文件已保存' });
        });
    });

    // 创建一个空文件
    app.post('/createEmptyFile', (req, res) => {
        const { fileName } = req.body;
    
        if (!fileName) {
            return res.status(400).json({ error: '文件名不能为空' });
        }
    
        const filePath = path.join(__dirname, 'uploads', fileName);
    
        // 创建一个空文件
        fs.writeFile(filePath, '', (err) => {
            if (err) {
                return res.status(500).json({ error: '创建文件失败' });
            }
            // 返回相对路径（从 /uploads 开始）
            res.json({ success: true, filePath: '/uploads/' + fileName });
        });
    });

    // 删除文件的接口
    app.delete('/deleteFile', (req, res) => {
        const { filePath } = req.body;

        fs.unlink(filePath, (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: '删除文件失败' });
            }
            res.json({ success: true, message: '文件已删除' });
        });
    });
}

module.exports = engineInit;