const fs=require('fs');
// 引擎
function engineInit(app){
    fs.readdir('html',(err,files)=>{
        if(err){
            console.log(err);
            return;
        }
        for(var i=0;i<files.length;i++){
            app.get('/'+files[i],(req,res)=>{
                var data=fs.readFileSync('html'+req.originalUrl);
                res.end(data);
            });
        }
    });
}

module.exports=engineInit;