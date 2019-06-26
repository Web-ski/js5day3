const carElement = document.createElement('div');
const body = document.querySelector('body');
const tickDuration = 10;
const velocity = 100;
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
    const displacementPerTick = velocity * (tickDuration / 1000);
    position = position + displacementPerTick;
    carElement.style.left = position + 'px';
}

applyStylesToCar();

const intervalId = setInterval(
    moveCar,
    tickDuration
)