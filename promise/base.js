var promise = new Promise(function(resolve, reject) {
    // ... some code
   var value=2
    if (true){
        resolve(value);
    } else {
        reject(error);
    }
});
console.dir(Promise);
promise.then(function(value) {
    // success
    console.log(value)
}, function(error) {
    // failure
});