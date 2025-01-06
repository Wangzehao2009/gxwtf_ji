const axios = require('axios');


async function getSubmitRank(req,res)
{
    const { user_id , type } = req.query;
    if (!user_id) return res.status(400).json({ error: '缺少必要的参数: userId' });
    let subjects = ["数学", "物理", "化学", "生物", "信息"];
    if(type!="totScore") subjects = [`${type}`]; 
    let totScore = 0, excel_count = 0;
    for (const subject of subjects) {
        try {
            let response = await axios.get(`http://localhost:3000/submissions/count?userId=${user_id}&subject=${subject}`);
            totScore += Math.log(response.data.count+1);
            response = await axios.get(`http://localhost:3000/submissions/count?userId=${user_id}&subject=${subject}&excel=1`);
            excel_count += response.data.count;
        } catch (err) {
            console.error(`查询 ${subject} 失败:`, err);
        }
    }

    totScore = totScore * ((excel_count+1) ** 2) * Math.PI;
    return res.status(200).json({score: totScore});
}

function init(app){
    app.get('/rank/submissions',getSubmitRank);
}

module.exports = init;
