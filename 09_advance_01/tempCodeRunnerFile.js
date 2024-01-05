const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){

        resolve({
            username: "Parth",
            email: "parth@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})