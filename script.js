const carElement = document.createElement('div');
const body = document.querySelector('body');
let position = 0;

carElement.className = 'car-game__car-element';

carElement.style.width = '100px';
carElement.style.height = '100px';
carElement.style.backgroundColor = 'red';
carElement.style.position = 'absolute';
carElement.style.left = '0px';

body.appendChild(carElement);

setInterval(
    function(){
        position = position + 10;
        carElement.style.left = position + 'px';
    },
    1000
)