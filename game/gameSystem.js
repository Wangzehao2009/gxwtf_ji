const db = require('../mysql');

function updateGameScore(req,res)
{
    const {userId,add,type} = req.query;
    db.query(
        `UPDATE users set ${type}=${type}+${add} where id=${userId}`,
        (err,result2)=>{
            if(err){
                console.error('数据库错误', err);
                return res.status(500).json({ error: '数据库错误' });
            }
            return res.status(200).json({ message: '提交成功'});
        }
    );
}

function init(app)
{
    app.get('/game/update',updateGameScore);
}

module.exports = init;