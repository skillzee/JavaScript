// 

// if(true){
    
// }
// else{

// }


// const isUserLoggedIn = true

const temperature = 69;
// if(temperature <50){//Strict equal
//     console.log(`Temperature is ${temperature} and this is less than 50`);

// }else{
//     console.log(`Temperature is ${temperature} and this is greater than 50`);
// }
    
const score = 200

// if(score > 100){
//     const power = "Fly"
//     console.log(`User power is ${power}`);
// }





const balance = 1000

// if(balance > 500) console.log("Test");


// if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }



const isUserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allowed to buy");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User logged In");
}
