const myNums= [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc}, curVAl = ${currVal}`);
//     return acc +currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => {
    return acc+currVal
}, 0 )

console.log(myTotal);