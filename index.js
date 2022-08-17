// First-class functions!

function receivesAFunction(calledFunction = () => console.log('Naitwa!')) {
    return calledFunction();
}

function returnsANamedFunction() {
    return (namedFunction = () => console.log('I got a name BRUV!!!'));
}

function returnsAnAnonymousFunction() {
    return (() => console.log('Born a stranger, Nameless!'))
}

// const calledFunction = () => console.log('Naitwa!');

// function receivesAFunction(calledFunction) {
//     return calledFunction();
// }

// function returnsANamedFunction() {
//     return calledFunction;
// }

// function returnsAnAnonymousFunction() {
//     return () => console.log('Stealth Mode!');
// }
