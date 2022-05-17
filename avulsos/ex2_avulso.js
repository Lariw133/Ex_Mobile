var numero = [3, 3],
    i = 1,
    j = 1,
    mult1,
    mult2,
    mult3,
    mult4,
    mult5,
    mult6,
    ttdet;

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        numero[(i, j)] = parseFloat(prompt('Digite um número: '));
    }
}

function determinante(mult1, mult2, mult3, mult4, mult5, mult6, numero, ttdet) {
    mult1 = numero[(0, 0)] * numero[(1, 1)] * numero[(2, 2)];
    mult2 = numero[(0, 1)] * numero[(1, 2)] * numero[(2, 0)];
    mult3 = numero[(0, 2)] * numero[(1, 0)] * numero[(2, 1)];
    //-----------------------------------------------
    mult4 = numero[(0, 2)] * numero[(1, 1)] * numero[(2, 0)];
    mult5 = numero[(0, 0)] * numero[(1, 2)] * numero[(2, 1)];
    mult6 = numero[(0, 1)] * numero[(1, 0)] * numero[(2, 2)];
    ttdet = mult1 + mult2 + mult3 - mult4 - mult5 - mult6;
    //det = ((numero[0,0] * numero[1,1] * numero[2,2]) + (numero[0,1] * numero[1,2] * numero[2,0]) + (numero[0,2] * numero[1,0] * numero[2,1])) - (((numero[0,0] * numero[1,2] * numero[2,1]) - (numero[1,1] * numero[1,0] * numero[2,2])) - (numero[0,2] * numero[1,0] * numero[2,0]));
    return ttdet;
}
console.log(
    'O determinante da matriz é: ' +
    determinante(mult1, mult2, mult3, mult4, mult5, mult6, numero, ttdet)
);