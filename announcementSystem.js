const fs = require('fs');
const path = require('path');
const db = require('./mysql.js');

// 公告列表
function announcementList(req, res) {
    db.query(`SELECT * FROM announcements WHERE visible = 1 ORDER BY id`, (err, results) => {
        if (err) {
            return res.status(500).json({ error: '查询失败', details: err });
        }
        res.json(results);
    });
}

function init(app) {
    app.get('/announcement/list',announcementList);
}

module.exports = init;