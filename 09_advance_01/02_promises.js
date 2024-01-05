const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task -> 1. DB Calls 2.CryptoGraphy 3.Network call
    setTimeout(function(){
        console.log("Async class is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


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



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"Hitesh",
                password:1234
            })
        }else{
            reject("ERROR: Something went wrong")
        }
    },2000)
})


promiseFour.
then( (user) =>{
    console.log(user);
    return user.username
} )
.then( (username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally( () =>{
    console.log("The promise is either resolved or rejected");
} )


const promiseFive = new Promise( function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"JavaScript",
                password:1234
            })
        }else{
            reject("ERROR: JS went wrong")
        }
    },2000)
})


async function consumepromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumepromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }





// getAllUsers()





fetch("https://jsonplaceholder.typicode.com/users")
.then( (response)=>{
    return response.json()
}).then(  (data) =>{
    console.log(data);
})
.catch( (error) =>{
    console.log(error);
})


