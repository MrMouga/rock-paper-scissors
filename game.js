let Choices=["Rock","Paper","Scissors"];
let playerChoice='start';
let computerChoice='start';
let playerScore=0;
let computerScore=0;
let round=0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const button = document.getElementById("button1");



function getComputerChoice() // function to get a random computerChoice
{
    computerChoice = Choices[(Math.floor(Math.random() * Choices.length))];
    return computerChoice;
}

function getWhoWon() // function to determine who's the winner
{
    if (playerScore>computerScore){
        document.getElementById("comment").innerHTML=("Congratulations! You won the game! Now flee before the Witch gets you!");
        let btn = document.createElement("button");
        btn.innerHTML = "Play again";
        btn.setAttribute("id","button1");
        document.getElementById("score").appendChild(btn);
        btn.addEventListener("click", playAgain);

        
    }
    else {document.getElementById("comment").innerHTML=("You lose... Beg for mercy and maybe the Witch will let you try again... ");
    let btn = document.createElement("button");
    btn.innerHTML = "Beg for mercy";
    btn.setAttribute("id","button1");
    document.getElementById("score").appendChild(btn);
    btn.addEventListener("click", playAgain);

  
    }
}


function playGame() // function to play a rock paper scissors game, 3 choices, first to score 3 wins
{
        computerChoice=getComputerChoice();
        document.getElementById("witch-card").src=`img/${computerChoice}.png`;
        console.log(`The computer played ${computerChoice}`);

        if (playerChoice == "Rock" && computerChoice=="Scissors"){
            document.getElementById("comment").innerHTML="You won! Rock beats Scissors!";
            playerScore++;
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b><b>Witch:</b></b> ${computerScore}`;
        }

        else if (playerChoice =="Paper" && computerChoice=="Rock"){
            document.getElementById("comment").innerHTML="You won! Paper beats Rock!";
            playerScore++;
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b>Witch:</b> ${computerScore}`;
        }

        else if (playerChoice=="Scissors" && computerChoice=="Paper")
        {

            document.getElementById("comment").innerHTML="You won! Scissors beats Paper!";
            playerScore++;
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b>Witch:</b> ${computerScore}`;
        }

        else if (playerChoice=="Scissors" && computerChoice=="Rock"){
            document.getElementById("comment").innerHTML="You lost... Rock beats Scissors!";
            computerScore++;
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b>Witch:</b> ${computerScore}`;
        }

        else if (playerChoice=="Rock" && computerChoice=="Paper"){
            document.getElementById("comment").innerHTML="You lost... Paper beats Rock!";
            computerScore++;
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b>Witch:</b> ${computerScore}`;
        }

        else if (playerChoice=="Paper" && computerChoice=="Scissors"){
            document.getElementById("comment").innerHTML="You lost... Scissors beats Paper!";
            computerScore++;
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b>Witch:</b> ${computerScore}`;
            }

        else {
            document.getElementById("comment").innerHTML="It's a draw... Play again!";
            document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b>Witch:</b> ${computerScore}`;
        }
        if (playerScore==3 || computerScore==3){
            getWhoWon()
        }
    }

 

function playAgain() // function to play an other game or quit
{
    playerScore=0;
    computerScore=0;
    document.getElementById("score-text").innerHTML=`<b>You:</b> ${playerScore} &emsp;&emsp;|&emsp;&emsp; <b><b>Witch:</b></b> ${computerScore}`;
    document.getElementById("comment").innerHTML= "The Witch is back! Choose your card and pray for the Gods!";
    document.getElementById("witch-card").src=`img/witch.png`;
    document.getElementById('button1').remove();
    
        
}



rock.addEventListener('click', () => {
    if (playerScore < 3 && computerScore<3){
        playerChoice="Rock";
        playGame();}
    

    else {
        document.getElementById("comment").innerHTML="Click on the button to play an other game!"
    }
})


paper.addEventListener('click', () => {
    if (playerScore < 3 && computerScore<3){
        playerChoice="Paper";
        playGame();}
    

    else {
        document.getElementById("comment").innerHTML="Click on the button to play an other game!"
    }
})

scissors.addEventListener('click', () => {
    if (playerScore < 3 && computerScore<3){
        playerChoice="Scissors";
        playGame();}
    

    else {
        document.getElementById("comment").innerHTML="Click on the button to play an other game!"
    }
})


