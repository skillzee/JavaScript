

function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");

}

// sayMyName()

// function addTwoNum(number1, number2){
//     console.log(number1+number2);
// }
function addTwoNum(number1, number2){
    let result= number1 + number2
    // console.log("Parth");
    return result
}

const result = addTwoNum(3,5 )
// console.log("Result is" ,result);



function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please Enter a username");
        // return
    }
    else{
    return `${username} just logged in`
    }
}



// console.log(loginUserMessage("Parth"))



function calculateCartPrice(...num1){ //{... -> this is rest operator}
    return num1

}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Parth",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}. `);
}


// handleObject(user)

handleObject({
    username: "Sam",
    price: 299
})



const myNewArray =  [200, 400, 100, 600]

function returnSecVal(getArray){
    return getArray[1]
}

console.log(returnSecVal(myNewArray));