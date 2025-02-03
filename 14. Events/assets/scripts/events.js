/*
const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    console.log(event);
/!*
    event.target.disabled = true;
*!/
};

buttons.forEach(btn => btn.addEventListener('mouseenter', buttonClickHandler));

*/
// ----------------------------------------------------------------

const button = document.querySelector('button');
const form = document.querySelector('form');
const div = document.querySelector('div');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
});















































