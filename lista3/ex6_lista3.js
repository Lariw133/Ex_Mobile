function valor(H = 0, i = 0) {
    for (i = 1; i <= N; i++) {
        H = H + i;
    }
    return H;
}

var H = 0,
    N = 0,
    i = 0;
do {
    N = parseInt(
        prompt(
            'Insira um número inteiro maior que 0 para determinar o   valor de H:'
        )
    );
} while (N <= 0);

console.log(valor(H, N, i));