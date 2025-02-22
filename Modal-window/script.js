'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
console.log(btnsOpenModal);

const openModal = function(){
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};

for (let i = 0; i < btnsOpenModal.length;  i++)
    btnsOpenModal[i].addEventListener('click',
    openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('click', function(e){
    console.log('e');
    if (e.key === 'Escape'){
        if(!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});