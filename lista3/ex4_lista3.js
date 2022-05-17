function dias(NH, T = 0, i) {
    for (i = 1; i <= 30; i++) {
        T = NH + T;
    }
    T = T * 10;
    return T;
}

var NH,
    T = 0,
    i;
for (i = 1; i <= 30; i++) {
    NH = parseInt(
        prompt('Digite a quantidade de horas cheias trabalhadas no dia:')
    );
}

console.log(dias(NH, T, i));