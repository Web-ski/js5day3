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