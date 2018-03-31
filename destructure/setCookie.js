function setCookie(name,value,{secure,path,domain,expires}={}){
    //设置cookie的代码
    console.log(expires);
}
setCookie("type","js",{
    secure:6000,
    expires:60000
})
