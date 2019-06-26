function add(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return NaN
    }
        return a + b
}

function multiply(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return NaN
    }
        return a * b
}

function square(a){    
        return multiply(a,a);
}

const a = 5
const b = 4
let sum = 0;

for(let i = 0; i < b; i++) {
sum = sum + a
}

function multiply2(a, b){
    let sum = 0
    for(let i = 0; i < b; i++) {
        sum = sum + a
    }
        return sum
}