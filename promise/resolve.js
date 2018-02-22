const imgs=[
    'http://css88.b0.upaiyun.com/css88/2016/07/gold-xitu.png',
    'http//image.suning.cn/uimg/b2c/qrqm/0000000000000000000152287072_200x200.jpg?ver=2054&from=mobile',
    'http//image.suning.cn/uimg/b2c/qrqm/0000000000000000000152287072_200x200.jpg?ver=2054&from=mobile'
]
Promise.resolve({
    then(resolve,reject){
        const img=new Image();
        img.src=imgs[0];
        img.onload=function(){
            resolve(this)
        }

    }
}).then(function(img){
    document.body.appendChild(img)
})