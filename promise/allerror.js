const imgs=[
    'http://css88.b0.upaiyun.com/css88/2016/07/gold-xitu.png',
    'http://css88.b0.upaiyun.com/css88/2016/07/gold-xitu.png',
    'http://css88.b0.upaiyun.com/css88/2016/07/gold-xitu.png'
]

function loadImg(url){
    var p=new Promise(function(resolve,reject){
        const img=new Image();
        img.src=url;
        img.onload=function(){
            resolve(this);
        }
        img.onerror=function(err){

            reject(new Error('图片加载失败'));
        }

    })
    return p;
}

const allDone=Promise.all([loadImg(imgs[0]),loadImg(imgs[1]),loadImg('')]);
allDone.then(function(datas){
    datas.forEach(function(item,i){
        document.body
            .appendChild(item)    })
}).catch(function(err){
    console.log(err)
})
