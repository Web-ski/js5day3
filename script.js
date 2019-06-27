const carElement = document.createElement('div');
const body = document.querySelector('body');
const tickDuration = 10;
const maxAcceleration = 10;

let position = 0;
let acceleration = 0;
let velocity = 0;

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
    const time = tickDuration / 1000;
    const newPosition = position + velocity * time + (acceleration * time * time) / 2
    position = newPosition < position ? position : newPosition;
    const newVelocity = velocity = velocity + acceleration * time;
    velocity = Math.max(0, newVelocity);
    carElement.style.left = position + 'px';
}

applyStylesToCar();

const intervalId = setInterval(
    moveCar,
    tickDuration
)

window.addEventListener(
    'keydown',
    function (event) {
        if (event.key === 'a') {
            acceleration = maxAcceleration;
        }
        if (event.key === 'd') {
            acceleration = -maxAcceleration;
        }
    }
)

window.addEventListener(
    'keyup',
    function (event) {
        if (event.key === 'a') {
            acceleration = 0;
        }
        if (event.key === 'd') {
            acceleration = 0;
        }
    }
)