 let random = parseInt(Math.random()*100+1);

 const userInput = document.getElementById('inputfield');
 const SubmitButton = document.getElementById('btn');
 const previousGuess = document.querySelector('#span2');
 const remainingGuess = document.querySelector('#span');
 const lowOrHigh = document.querySelector('#lowOrHi');
 const result = document.querySelector('#result');


 const p =document.createElement('p');

 let preGuess=[];
 let numGuess=1;

 let playGame =true;

 if(playGame)
 {
    SubmitButton.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateguess(guess);
    });
 }

 function validateguess(guess)
 {
    if(isNaN(guess))
    {
        alert('Please enter a number');
    }
    else if(guess<1)
    {
        alert('Number is less than 1');
    }
    else if(guess>100)
    {
        alert('Number is greater than 100');
    }
    else 
    {
        preGuess.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${random}`);
            endGame();
        }
        else 
        {
            displayGuess(guess);
            checkguess(guess);
        }
    }

 }

 function checkguess(guess)
 {
        if(guess === random)
        {
            displayMessage(`You guessed it right!!!!<br>You won!!`);
            endGame();
        }
        else if(guess<random)
        {
            displayMessage(`Your guess is Tooo low`);
        }
        else
        {
            displayMessage(`Your guess is Tooo high`);
        }
 }

 function displayGuess(guess)
 {
    userInput.value='';
    previousGuess.innerHTML += `${guess}  `;
    numGuess++;
    remainingGuess.innerHTML = `${11-numGuess}`;
 }

 function displayMessage(message)
 {
    lowOrHigh.innerHTML= `<p>${message}<p>`;
 }

 function endGame()
 {
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h4 id="newgame">Start New Game</h4>`;
    result.appendChild(p);
    playGame=false;
    newGame();
 }

 function newGame()
 {
    const newGameBtn=document.getElementById('newgame');
    newGameBtn.addEventListener('click',function(e){
        random = parseInt(Math.random()*100+1);
        userInput.removeAttribute('disabled');
        preGuess=[];
        numGuess=1;
        result.removeChild(p);
        previousGuess.innerHTML='';
        remainingGuess.innerHTML=`${11-numGuess}`;
        playGame=true;
    });
 }