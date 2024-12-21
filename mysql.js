const mysql=require('mysql2');

const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'jzq20100505',
    database:'guangfang'
});

db.connect(err=>{
    if(err){
        console.error('guangfang 数据库连接失败:',err);
        return;
    }
    console.log('guangfang 数据库连接成功');
});

module.exports=db;