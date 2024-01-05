let  randomNum = (parseInt(Math.random()*100+1));
let  submit = document.querySelector('#subt')
let  userInput = (document.querySelector("#guessField"))
let  guessSlot = document.querySelector(".guesses")
let  remaining = document.querySelector(".lastResult")
let  lowOrHi = document.querySelector(".lowOrHi")
let  StartOver = document.querySelector(".resultParas")


let p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault(); 
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please Enter A Valid Number')
    }else if(guess<1){
         alert('Please Enter A Valid Number More than 1')

     }else if(guess>100){
        alert('Please Enter A Valid Number less than 100')
     }else{
        prevGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNum){
        displayMessage(`Number is too low`)
    }else if(guess>randomNum){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML =` <h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        console.log("PA");
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);

    playGame = true;
    })
}







