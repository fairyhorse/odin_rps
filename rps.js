const form = document.querySelector('#form');
const input = document.querySelector('#input');
// const computer = document.querySelector('#computer');

// const moves = ['rock', 'paper', 'scissors'];


form.addEventListener("submit", function (e) {
    e.preventDefault();

    function onlyLettersAndNumbers(str) {
        return Boolean(str.match(/^[A-Za-z0-9]*$/));
    }

    if (!onlyLettersAndNumbers(item) || item === '') {
        input.value = '';
        alert('ENTER A VALID ITEM NAME');
    } else {
        input.value = '';
    }
})


// function round(playerSelection, computerSelection) {
    
// }

// console.log(round(pl_sl, () => moves[Math.floor(Math.random() * 3)]));


