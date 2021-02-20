//The button click event needs to send the user selection to the function. This function ne
//function for computer choice
//function to see who won (playRound)
//Function to add winner to the scoreboard
//function to see if the game has gone five rounds
//function to display the winner

//Increment to keep track of how many games we've played
let playerWins = 0;
let computerWins = 0;
let plays = 0;
const bearbtn = document.querySelector('#bearButton');
const hunterbtn = document.querySelector('#hunterButton');
const ninjabtn = document.querySelector('#ninjaButton');
const playerTable = document.querySelector('#playerScore');
const computerTable = document.querySelector('#computerScore');
const roundTable = document.querySelector('#round');


bearbtn.addEventListener('click', () =>{
    Game("bear");
});

hunterbtn.addEventListener('click', () =>{
    Game("hunter");
});

ninjabtn.addEventListener('click', () => {
    Game("ninja");
});


//Overall function: Game - This takes the users choice and passes it to playRound. Then it passes the winner to a function that 
//displays it in the table (we should increment here so we can use it to place the winner in the correct (td)). Then, it checks to see what increment is. 
//If increment is 5, then we call a function that uses an animation to display the winner and clear the score board.



function Game(playerChoice){
    //Retrieves the winner for the round: 1 means player won, 0 means bear won
    let theWinner = playRound(playerChoice);
    plays ++;
    //Displays the winner on the table
    winner(theWinner);


    //Checks to see if the increment is at 5 yet - Game over
    if (plays >= 5){
        gameOver();
    }
}


//Check who the winner is and display it to the player. Summarize the winds there as well. Then, whipe the scoreboard
function gameOver(){
    if(computerWins > playerWins){
        console.log("Computer won! You won " + playerWins + " rounds while the computer won " + computerWins + " rounds" );
    }
    else{
        console.log("You won! You won " + playerWins + " rounds while the computer won " + computerWins + " rounds" );
    }

    playerWins = 0;
    computerWins = 0;
    plays = 0;
    playerTable.textContent = playerWins;
    roundTable.textContent = plays;
    computerTable.textContent = computerWins;
}

//This displays the winner to the board. 
function winner(theWinner){

    //1 is player, 0 is computer
    if (theWinner == 1){
        playerWins ++;
        playerTable.textContent = playerWins;
        roundTable.textContent = plays;
    }
    else{
        computerWins ++;
        computerTable.textContent = computerWins;
        roundTable.textContent = plays;
    }
}



    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    function computerPlay(){
        //This function will randomly return either Rock, paper, or scissors as the computers play
        var roll = getRandomInt(3);
        if (roll === 0){
            return "bear"
        }
        else if (roll === 1){
            return "hunter"
        }
        else{
            return "ninja"
        }
    }


    function playRound(playerSelection){
        //This determins who wins
        let computerSelection = computerPlay();
        if (playerSelection === computerSelection){
            console.log("It's a tie!");
            return 0;
        }
        if (playerSelection === 'bear'){
            if (computerSelection === 'ninja'){
                console.log("Player Wins! User selected: "+ playerSelection + " and computer selected: " + computerSelection);
                return 1;
            }
            else{
                console.log("Computer Wins! User selected: "+ playerSelection + " and computer selected: " + computerSelection);
                return 0;
            }
        }

        if (playerSelection === 'hunter'){
            if (computerSelection === 'bear'){
                console.log("Player Wins! User selected: "+ playerSelection + " and computer selected: " + computerSelection);
                return 1;
            }
            else{
                console.log("Computer Wins! User selected: "+ playerSelection + " and computer selected: " + computerSelection);
                return 0;
            }
        }

        else{
            if (computerSelection === 'hunter'){
                console.log("Computer Wins! User selected: "+ playerSelection + " and computer selected: " + computerSelection);
                return 0;
            }
            else{
                console.log("Player Wins! User selected: "+ playerSelection + " and computer selected: " + computerSelection);
                return 1;
            }
        }
    }