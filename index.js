function receivesAFunction(help) {
    help();
}

function returnsANamedFunction() {
    return (function jimmyBob() {return 1 + 2;});
}

function returnsAnAnonymousFunction() {
    return (function () {return 3 + 4;})
}