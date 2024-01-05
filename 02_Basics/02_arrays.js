const marvelHeroes = ["Thor", "IronMan", "SpiderMan"];
const DCHeroes = ["Flash", "Superman", "Batman"]

// marvelHeroes.push(DCHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);




// const newHeroes = marvelHeroes.concat(DCHeroes)
// console.log(newHeroes);



const all_new_heroes = [...marvelHeroes, ...DCHeroes]//Spread operator(...)
// console.log(all_new_heroes);



const anArr = [1,2,3,[4,5,6], 7, [6,7, [4,5]]]
const real_another_arr = anArr.flat(Infinity);
console.log(real_another_arr);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))//Interesting case



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))




