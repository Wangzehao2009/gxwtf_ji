const mysql=require('mysql2');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'guangfang',
    dateStrings:true
});

db.connect(err=>{
    if(err){
        console.error('guangfang 数据库连接失败:',err);
        return;
    }
    console.log('guangfang 数据库连接成功');
});

module.exports=db;