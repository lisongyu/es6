const imgs=[
    'http://css88.b0.upaiyun.com/css88/2016/07/gold-xitu.png',
    'http//image.suning.cn/uimg/b2c/qrqm/0000000000000000000152287072_200x200.jpg?ver=2054&from=mobile',
    'http//image.suning.cn/uimg/b2c/qrqm/0000000000000000000152287072_200x200.jpg?ver=2054&from=mobile'
]
var p=new Promise(function(resolve,reject){
    const img=new Image();
    img.src=imgs[0];
    img.onload=function(){
        resolve(this);
    }
    img.error=function(err){

        reject(new Error('图片加载失败'));
    }

});
console.log(p);
console.log(2);
p.then(function(img){
    console.log('加载完成')
    document.body.appendChild(img)
},function(err){
    console.log(err)

})
console.log(3);