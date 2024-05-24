'use strict'
/*
console.log(document.querySelector('.message')
.textContent);
document.querySelector('.message').textContent = 'correct numberl';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess) {
        displayMessage('no number');
        //document.querySelector('.message').textContent = ' no number';
// when player win
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent =
        'correct number';
        document.querySelector('body').
        style.backgroundColor = '#FF9999';

        document.querySelector('.number').
        style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').
            textContent = highscore;
        }

    }else if(guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').
            textContent = 'to low';

            score--;

            document.querySelector('.score').
            textContent = score;  
        }else{
            document.querySelector('message').textContent = 'you lost the game';
        }
        
    }else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'to hight';
        score--;
        document.querySelector('.score').textContent = score;
    }
});
const againNumber = document.querySelector('.gain');
againNumber.addEventListener( click(),function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});