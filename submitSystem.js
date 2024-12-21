const db=require('./mysql.js');

// 保存提交
async function submit(req, res) {
    console.log(req.body);
    const { userId, issue, subject } = req.body;
    const file_path = req.file ? req.file.path : null;
    try {
        db.query(
            'INSERT INTO submissions (user_id, issue, subject, file_path) VALUES (?, ?, ?, ?)',
            [userId, issue, subject, file_path],
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

// 获取所有提交记录
async function submissions(req,res){
    try {
        db.query('SELECT * FROM submissions',(err,result)=>{
            if(err) return res.status(500).json({error:'数据库错误'+error});
            console.log(result);
            return res.status(200).json(result);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '服务器错误' });
    }
}

function init(app,fileStorage){
    app.post('/submit', fileStorage.single('file'), submit);
    app.get('/submissions', submissions);
}

module.exports = init;