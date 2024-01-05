const user = {
    username: "Parth",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Parth"
//     console.log(this.username);
// }

// chai()

const chai = () => {
        let username = "Parth"
        console.log(this);

}

// chai()


// const addTow = (num1, num2)=>{
//     return num1 + num2
// }
// const addTow = (num1, num2)=>  (num1 + num2) //Implicit return

const addTow = (num1, num2)=> ( {username: "Parth"}) //Implicit return


console.log(addTow(3,4))



// const myArray = [2,5,3,7,8]