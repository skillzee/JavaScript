// Primitive 

// 7 Types: String, number, boolean, null, undefined, Symbol(For making a value Unique), BigInt

const score = 100
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["Parth", "Deep", "abhi"]

let myObj = {
    name: "Parth",
    age: 18,
}

const myFun = function(){
    // console.log("hello world");
}




// *************************************************

// Stack(Primitive), Heap(Non-Primitive)

let main = "Parth"

let anothermain = main;
anothermain = "Chintu";

console.log(main);
console.log(anothermain);


let userone = {
    email: "parth@gmail.com",
    upi: "parth@apl"
}


let usertwo = userone


usertwo.email = "pandit@gmail.com"

console.log(userone.email)
console.log(usertwo.email)