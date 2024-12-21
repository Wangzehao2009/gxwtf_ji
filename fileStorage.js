const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const userId = req.body.userId;
        const uniqueSuffix = Date.now() + '-' + userId;
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });
module.exports = upload;