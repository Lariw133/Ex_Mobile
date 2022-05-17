function valor(F = 0, N = 0) {
    for (F = 1; N > 1; N = N - 1) {
        F = F * N;
    }
    return F;
}

var F = 0,
    N = 0;
do {
    N = parseInt(
        prompt('Insira um número inteiro positivo para calcular o seu fatorial')
    );
} while (N < 0);

console.log(valor(F, N));