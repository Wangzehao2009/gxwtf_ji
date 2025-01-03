function connect(target,data,result,reject){
    console.log('connect');
    fetch(target,{
        method:'POST',
        headers:{
            'Content-Type':'text/plain;charset=UTF-8'
        },
        body:data,
        mode:'no-cors'
    }).then(async function(res){
        var data=await res.json();
        if(!res.ok) reject(data);
        else result(data);
    })
}
