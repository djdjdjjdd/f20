'use strict'
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const current1El = document.getElementById('current--0');
const current2El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;
const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current1El.textContent = 0;
    current0El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

diceEl.classList.add('hidden');
const switchPlayer(){
    document.querySelector(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    //Generating radom 
    const dice = Math.trunc( (Math.random() * 6)) + 1;
    console.log(dice);
    //display roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice ${dice}.png`;
    //cheking
    if (dice != 1 ){
        currentScore =+ dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    } 
    if(playing) {
        scores[activePlayer] += currentScore;

        document
            .getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        if (score[activePlayer] >= 20){
            playing = false;
            document
             .querySelector(`.player--${activePlayer}`)
             .classList.add('player--winner');
            document
                .querySelector(`player-- ${activePlayer}`)
                .classList.remove('player--active');     
        } else {
            switchPlayer();
        }
    }
});
btnNew.addEventListener('click', init)