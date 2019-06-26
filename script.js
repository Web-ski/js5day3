const carElement = document.createElement('div');
const body = document.querySelector('body');
const tickDuration = 100;
const displacementPerTick = 10;
let position = 0;

function applyStylesToCar() {
    carElement.className = 'car-game__car-element';

    carElement.style.width = '100px';
    carElement.style.height = '100px';
    carElement.style.backgroundColor = 'red';
    carElement.style.position = 'absolute';
    carElement.style.left = position + 'px';

    body.appendChild(carElement);
}

function moveCar() {
    position = position + displacementPerTick;
    carElement.style.left = position + 'px';
}

applyStylesToCar();

const intervalId = setInterval(
    moveCar,
    tickDuration
)