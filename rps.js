const form = document.querySelector('#form-move');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restart = document.querySelector('#restart');
const player = document.querySelector('#player')
const computer = document.querySelector('#computer');
const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');
const output = document.querySelector('#output');

const moves = [ 'paper', 'rock', 'scissors'];



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
        let plScore = 0;
        let compScore = 0;
        
        if (playerSelection == computerSelection){
            output.innerText = "It's a tie!";
        } else if (diff == -1 || diff == 2){
            output.innerText = "You win!";
            plScore = 1;
    
        } else {
            output.innerText = "You lose!";
            compScore = 1;
        }

        return [plScore, compScore]
}


function game(rounds) {
    let getComputerSelection = () => moves[Math.floor(Math.random() * 3)];
    let playerScore = 0;
    let computerScore = 0;

    restart.addEventListener("click", () => location.reload())

    rock.addEventListener("click", () => {
        player.innerText = moves[1];
    })
    paper.addEventListener("click", () => {
        player.innerText = moves[0];
    })
    scissors.addEventListener("click", () => {
        player.innerText = moves[2];
        
    })
    form.addEventListener('click', () => {
        let scores = playRound(player.innerText, getComputerSelection(), playerScore, computerScore);    playerScore += scores[0];
        playerScoreText.innerText = playerScore;
        computerScore += scores[1];
        computerScoreText.innerText = computerScore; 
        if (playerScore == rounds || computerScore == rounds) {
            if (playerScore > computerScore){
                output.innerText = "YOU WIN!";
            } else {
                output.innerText = "COMPUTER WINS!";
            }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        }
    })
}

game(5);
