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

window.onload = function() {
    const bannerHTML = `
        <a href="/" class="banner-link">
            <div class="banner">
                <img src="/uploads/1735823331237-841608623.png" alt="Logo">
                <div>竞赛贯通·广学五题坊</div>
                <div class="english">Class 14·Xuguang Olympiad Workshop</div>
            </div>
        </a>
    `;
    document.getElementById('banner').innerHTML = bannerHTML;
}

console.log('version 1.0.0');