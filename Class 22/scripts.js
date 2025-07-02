const aPromise = current => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(current){
                resolve('Promise run Successfully');
            }else{
                reject('Something Went wrong');
            }
        },3000 );
    });
}
aPromise(true).then(res =>{
    return res + "hahahaha"
}).then(res =>{
    setTimeout(() =>{
    console.log(res);
    },1000)
    return res + "hohohohhoho"
}).then(res => {
    console.log(res);
}).catch(err =>{
    console.log(err)
})

console.log("Hello World !")