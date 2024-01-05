// const tinderUser = new Object()

const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name = "Parth"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Parth",
            lastName: "Sharma"
        }
    }
}

// console.log(regUser.fullname.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 ={obj1, obj2}
// const obj3  = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));