const mysql=require('mysql2');
var connection;
exports.init=function(hst,usr,pswd,dtbs){
    connection=mysql.createConnection({
        host:hst,user:usr,password:pswd,database:dtbs
    });
    connection.connect();
}
exports.query=function(table,add,callback){
    connection.query('SELECT * FROM '+table+' '+add,callback);
};
exports.querySync=function(table,add,callback){
    return new Promise(function(resolve,reject){
        connection.query('SELECT * FROM '+table+' '+add,function(err,res){
            callback(err,res);
            if(err) reject('error');
            else resolve('success');
        });
    });
}
exports.insert=function(table,title,content,callback){
    connection.query('INSERT INTO '+table+' ('+title+') VALUES ('+content+')',callback);
};
exports.update2=function(table,content,add,callback){
    connection.query('UPDATE '+table+' SET '+content+' '+add,callback);
};
exports.close=function(){
    connection.end();
}
exports.insertallcolumn=function(table,content,callback){
    //example:table='Issues' content=[0,'Hello',14]
    str='INSERT INTO '+table+' VALUES (';
    for(let i=0;i<content.length;i++) str+=content[i]+',';
    str=str.substr(0,str.length-1);
    str+=')';
    connection.query(str,callback);
}
exports.insertsuchcolumn=function(table,title,content,callback){
    //example:table='Issues' title=['id','userid'] content=[0,14]
    str='INSERT INTO '+table+' (';
    for(let i=0;i<title.length;i++) str+=title[i]+',';
    str=str.substr(0,str.length-1);
    str+=') VALUES (';
    for(let i=0;i<content.length;i++) str+=content[i]+',';
    str=str.substr(0,str.length-1);
    str+=')';
    connection.query(str,callback);
}
exports.delete=function(table,where,callback){
    //example:table='Issues' where=['id>5','AND','issue=\"Hello\"']
    str='DELETE FROM '+table+' WHERE ';
    for(let i=0;i<where.length;i++) str+=where[i]+' ';
    str=str.substr(0,str.length-1);
    connection.query(str,callback);
}
exports.update=function(table,field,value,where,callback){
    //example:table='Forum' field=['likes'] value=[10] where=['id=5','OR','likes=9']
    str='UPDATE '+table+' SET';
    for(let i=0;i<field.length;i++) str+=' '+field[i]+'='+value[i]+',';
    str=str.substr(0,str.length-1)+' WHERE ';
    for(let i=0;i<where.length;i++) str+=where[i]+' ';
    str=str.substr(0,str.length-1);
    connection.query(str,callback);
}