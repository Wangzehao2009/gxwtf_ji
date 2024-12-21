const db=require('./mysql.js');

// 新建一期
async function newissue(req,res){
    console.log(req.body);
    const { name, subject, author } = req.body;
    const file_path = req.file ? req.file.path : null;
    console.log(file_path);
    try {
        db.query(
            'INSERT INTO problems (name, subject, author, file_path) VALUES (?, ?, ?, ?)',
            [name, subject, author, file_path],
            (err,result)=>{
                if(err) return res.status(500).json({ error: '未登录'});
                return res.status(200).json({ message: '提交成功', submissionId: result.insertId });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

function init(app, fileStorage){
    app.post('/newissue', fileStorage.single('file'), newissue);
}

module.exports = init;