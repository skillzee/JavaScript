const userEmail = []

if (userEmail) {
    console.log("Got User Email");
}else{
    console.log("Dont Have Email");
}


// Falsy values-> false, 0, -0 , BigInt 0n, "", null, undefined,  NaN


// truthy values-> "0", 'false', " ",[], {}, function(){}, 


if(userEmail.length === 0){
    console.log("Array is Empty");
}


// Nullish coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //Null ka safety check hai ye 
// val1 = undefined ?? 15

val1 = null ??10??15


console.log(val1);



// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice>=80?console.log("Greater than 80"): console.log("Less Than 80");;





