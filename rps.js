const form = document.querySelector('#form-move');
const input = document.querySelector('#input-move');
const player = document.querySelector('#player')
const computer = document.querySelector('#computer');
const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');
const output = document.querySelector('#output');

const moves = [ 'paper', 'rock', 'scissors'];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const item = input.value.toLowerCase();
    let onlyLettersAndNumbers = (str) => Boolean(str.match(/^[a-zA-Z]+$/));

    if (!moves.includes(item) || !onlyLettersAndNumbers(item) || item === '') {
        input.value = '';
        alert('ENTER A VALID ITEM NAME');
    } else {
        player.innerText = item;
        input.value = '';
        playRound(player.innerText, getComputerSelection());
    }
})

function game(rounds) {
    let getComputerSelection = () => moves[Math.floor(Math.random() * 3)];
    let playerScore = 0;
    let computerScore = 0;
    


    function playRound(playerSelection, computerSelection) {
        computer.innerText = computerSelection;
    
        // paper -> rock -> scissors -> paper
        // [ paper  rock  scissors]
        //     0     1       2
    
        // ======================================================================================================
        // player:     1 rock          2 scissors       0 paper          2 scissors      1 rock        0 paper 
        // computer:   2 scissors      1 rock           2 scissors       0 paper         0 paper       1 rock
        //             -1              1                -2               2               1             -1
        //             win             lose             lose             win             lose          win
        // ------------------------------------------------------------------------------------------------------
        // win:  -1,  2
        // lose:  1, -2
        // ======================================================================================================
    
        let diff = moves.indexOf(playerSelection) - moves.indexOf(computerSelection);
        
        if (playerSelection == computerSelection){
            output.innerText = "It's a tie!";
        } else if (diff == -1 || diff == 2){
            output.innerText = "You win!";
            playerScore++;
            playerScoreText.innerText = playerScore;
    
        } else {
            output.innerText = "You lose!";
            computerScore++;
            computerScoreText.innerText = computerScore;
        }
    }

    if (playerScore == rounds || computerScore == rounds) {
        if (playerScore > computerScore){
            output.innerText = "YOU WON!";
        } else {
            output.innerText = "YOU LOST!";
        }
    }

}

game(5);