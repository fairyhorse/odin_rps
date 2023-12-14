const form = document.querySelector('#form');
const input = document.querySelector('#input');
const player = document.querySelector('#player')
const computer = document.querySelector('#computer');
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
    }
})


function playRound(playerSelection, computerSelection) {
    computer.innerText = computerSelection;
    // paper -> rock -> scissors -> paper
    // [ paper  rock  scissors]
    //     0     1       2

    // player:     1 rock          2 scissors       0 paper          2 scissors      1 rock        0 paper 
    // computer:   2 scissors      1 rock           2 scissors       0 paper         0 paper       1 rock
    //             -1              1                -2               2               1             -1
    //             win             lose             lose             win             lose          win
    // win:  -1,  2
    // lose:  1, -2

    let diff = moves.indexOf(playerSelection) - moves.indexOf(computerSelection);

    if (playerSelection == computerSelection){
        output.innerText = "It's a tie!"
    } else if (diff == -1 || diff == 2){
        output.innerText = "You win!"
    } else {
        output.innerText = "You lose!"
    }
}

playRound(player.innerText, () => moves[Math.floor(Math.random() * 3)]);


