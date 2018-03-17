var a=[];
for(var i=0;i<10;i++){
    var c=i;
    console.log(i);
    a[i]=function(){
        console.log(c);
    }
}
console.log(a[6]());