const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

async function uploadFile(req) {
    return new Promise((resolve, reject) => {
        upload.single('file')(req, null, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(req.file ? req.file.path : null);
            }
        });
    });
}

module.exports = { uploadFile };
