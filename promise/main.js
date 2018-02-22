const imgs=[
    'http://css88.b0.upaiyun.com/css88/2016/07/gold-xitu.png',
    'http//image.suning.cn/uimg/b2c/qrqm/0000000000000000000152287072_200x200.jpg?ver=2054&from=mobile',
    'http//image.suning.cn/uimg/b2c/qrqm/0000000000000000000152287072_200x200.jpg?ver=2054&from=mobile'
]

function loadImg(url){
    var p=new Promise(function(resolve,reject){
        const img=new Image();
        img.src=url;
        img.onload=function(){
            resolve(this);
        }
        img.error=function(err){

            reject(new Error('图片加载失败'));
        }

    })
    return p;
}
loadImg(imgs[0]).then(function(img){
    document.body.appendChild(img);
})