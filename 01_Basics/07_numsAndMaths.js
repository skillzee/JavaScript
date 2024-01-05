const score = 400

const balance = new Number(100)
console.log(balance);
console.log(balance.toFixed(2));


const otherNum = 23.4966

console.log(otherNum.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en'));



// ******************************Maths****************************

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,8));

console.log((Math.random()*10) +1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+min); // Isko yaad rakhna important hai