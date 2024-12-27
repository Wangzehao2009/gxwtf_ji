const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// 配置 multer 存储选项
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '/public/uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 上传图片路由
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: '请上传图片文件' });
    }
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    res.status(200).json({ message: '图片上传成功', imageUrl: imageUrl });
});

// 列出所有图片的路由
router.get('/list', (req, res) => {
    const uploadDir = path.join(__dirname, '/public/uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('无法读取上传目录:', err);
            return res.status(500).json({ error: '无法读取上传目录' });
        }
        const images = files.map(file => {
            const filePath = path.join(uploadDir, file);
            const stats = fs.statSync(filePath);
            return {
                name: file,
                url: `http://localhost:3000/uploads/${file}`,
                uploadTime: stats.mtime,
                size: stats.size // 文件大小，单位为字节
            };
        });
        res.status(200).json({ images: images });
    });
});

module.exports = router;