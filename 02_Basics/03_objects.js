// Singleton :- From constructor 


// Object Literals

// Object.create --> Ye hi hai constructor method



const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    "Full name" : "Parth Sharma",
    [mySym]: "myKey1",
    age: 19,
    location: "Pilibhit",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "parth@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "parth@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());