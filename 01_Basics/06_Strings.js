const name = "Parth"
const repoCount = 50

// console.log(name + repoCount+ " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Parth-Sharma-com")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("P"));


const newStr = gameName.substring(0,8);
console.log(newStr);

const anotherStr = gameName.slice(-8,5) //Slice can use negative value
console.log(anotherStr);




const newStr1 = "   Parth    "

console.log(newStr1);
console.log(newStr1.trim())

const url = "https://parth.com/parth%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('parth'));

console.log(gameName.split("-"));