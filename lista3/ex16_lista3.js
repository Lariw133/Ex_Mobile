function ALT(A_CLETO, A_CM, F_BERTO, F_CM, AN) {
    do {
        A_CLETO = A_CLETO + A_CM;
        F_BERTO = F_BERTO + F_CM;
        AN++;
    } while (F_BERTO < A_CLETO);
    return AN;
}
var A_CLETO = 1.5,
    A_CM = 0.02,
    F_BERTO = 1.1,
    F_CM = 0.03;
AN = 0;

AN = ALT(F_BERTO, A_CM, A_CLETO, F_CM, AN);

console.log(
    'Vai Ser Necessário ' + AN + ' Ano, Para Felisberto Ser Maior Que Anacleto'
);