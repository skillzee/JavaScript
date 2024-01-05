

let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ",a);
}
var c = 300//Var use nhi karenge


// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Parth"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if(true){
    const username = "Parth"
    if(username ==="Parth"){
        const website = " Youtube"
        // console.log(username+ website);
    }
    // console.log(website);
}

// console.log(username);












// ++++++++++++++++++++  INTERESTING +++++++++++++++++


addone(5)
function addone(num){
    return num+1

}

// console.log(addone(5))



addTwo(5)
const addTwo = function(num){
    return num +2
}

