const axios = require('axios');
const db = require('./mysql.js');


async function getUserSubmitRank(user_id,type)
{
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
    return totScore;
}

async function getSubmitRank(req, res) {
    const { sortOrder, type } = req.query;
    
    try {
        const response = await axios.get(`http://localhost:3000/users`);
        const users = response.data;
        const userScores = [];

        for (let user of users) {
            let score = await getUserSubmitRank(user.id,type);
            if (score){
                userScores.push({
                    username: user.username,
                    score: score
                });
            }
        }

        userScores.sort((a, b) => b.score - a.score);

        let rank = 1;
        userScores.forEach((user, index) => {
            user.rank = rank;
            if (index < userScores.length - 1 && user.score !== userScores[index + 1].score) {
                rank = index + 2;
            }
        });

        if (sortOrder === 'ASC') userScores.reverse();

        res.status(200).json(userScores);
    } catch (err) {return res.status(500).json({ error: '服务器内部错误' });}
}

// 获取指定学校的所有用户
function getUsersBySchool() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT id, school FROM users';
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

// 根据学校分组并计算分数
async function getSchoolsRank(req, res) {
    const { sortOrder = 'DESC' } = req.query;
    try {
        const users = await getUsersBySchool();
        const schools = {};

        users.forEach(user => {
            if (!schools[user.school]) {
                schools[user.school] = {
                    totalScore: 0,
                    validUserCount: 0,
                    users: []
                };
            }
            schools[user.school].users.push(user.id);
        });

        for (let school in schools) {
            let schoolData = schools[school];
            for (let userId of schoolData.users) {
                const score = await getUserSubmitRank(userId,"totScore");
                if (score > 0) schoolData.validUserCount++;
                schoolData.totalScore += score;
            }
            schoolData.finalScore = schoolData.totalScore * Math.pow(Math.log(schoolData.validUserCount + 2), 2);
            if (schoolData.finalScore === 0) delete schools[school];
        }

        let sortedSchools = Object.keys(schools).map(school => ({
            school,
            score: schools[school].finalScore
        }));

        sortedSchools.sort((a, b) => b.score - a.score);

        let rank = 1;
        sortedSchools.forEach((school, index) => {
            school.rank = rank;
            if (index < sortedSchools.length - 1 && school.score !== sortedSchools[index + 1].score) {
                rank = index + 2;
            }
        });

        if (sortOrder === 'ASC') sortedSchools.reverse();

        res.status(200).json(sortedSchools);
    } catch (err) {return res.status(500).json({ error: '服务器内部错误' });}
}

function getGamesRank(req, res) {
    const columnName = req.query.game;
    let sortOrder = req.query.sortOrder || 'DESC';

    db.query(`SELECT * FROM users ORDER BY ${columnName} DESC`, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed.' });
        }

        let rank = 1;
        results.forEach((user, index) => {
            user.rank = rank;
            if (index < results.length - 1 && user[columnName] !== results[index + 1][columnName]) {
                rank = index + 2;
            }
        });

        let tableData = results.map(user => ({
            rank: user.rank,
            username: user.username,
            score: user[columnName]
        }));

        if (sortOrder === 'ASC') tableData.reverse();

        res.status(200).json(tableData);
    });
}


function init(app){
    app.get('/rank/submissions',getSubmitRank);
    app.get('/rank/schools', getSchoolsRank);
    app.get('/rank/games',getGamesRank);
}

module.exports = init;
