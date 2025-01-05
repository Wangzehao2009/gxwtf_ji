const axios = require('axios');


async function getSubmitRank(req,res)
{
    const { user_id } = req.query;

    if (!user_id) {
        return res.status(400).json({ error: '缺少必要的参数: userId' });
    }

    const subjects = ["数学", "物理", "化学", "生物", "信息"];
    const counts = {};
    let totScore = 0;
    for (const subject of subjects) {
        try {
            const response = await axios.get(`http://localhost:3000/submissions/count?userId=${user_id}&subject=${subject}`);
            counts[subject] = response.data.count || 0;
            totScore += Math.log(counts[subject]+1);
    
        } catch (err) {
            console.error(`查询 ${subject} 失败:`, err);
            counts[subject] = 0;
        }
    }
    const response = await axios.get(`http://localhost:3000/submissions/count?userId=${user_id}&excel=1`);
    const excel_count = response.data.count;
    if(excel_count) totScore = totScore * (excel_count ** Math.E);
    totScore = totScore * Math.PI;
    return res.status(200).json({
        math: counts["数学"],
        pythsics: counts["物理"],
        chemistry: counts["化学"],
        biology: counts["生物"],
        oi: counts["信息"],
        totScore: totScore
    });
}

function init(app){
    app.get('/rank/submissions',getSubmitRank);
}

module.exports = init;
