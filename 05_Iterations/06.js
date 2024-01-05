// const coding = ["js", "ruby", "Java", "Python"]


// const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item
// } )


// console.log(values);



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num>4
// } )


const newNums = []
myNums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }

} )

console.log(newNums);




const Movies = [
    {
        Name : "Game of Thrones",
        Type: "Favourite"
    },
    {
        Name : "Breaking Bad",
        Type: "Favourite"
    },
    {
        Name : "Sex Education",
        Type: "Favourite"
    },
    {
        Name : "Warrior Num",
        Type: "Non-Favourite"
    },
    {
        Name : "Bridgerton",
        Type: "Non-Favourite"
    }

]

const myMovies = Movies.filter( (fav) => {
    return fav.Type=="Non-Favourite"
} )

console.log(myMovies);

