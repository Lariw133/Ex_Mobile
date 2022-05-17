function caixas(PR, T = 0, Q, C) {
    for (C = 1; C <= 45; C++) {
        T = Q * PR + T;
    }
    return T;
}

var PR,
    T = 0,
    Q,
    C;
for (C = 1; C <= 45; C++) {
    Q = parseInt(prompt('Digite a quantidade comprada deste produto:'));
    PR = parseFloat(prompt('Digite o preço pago por este produto:'));
}

console.log(caixas(PR, T, Q, C));