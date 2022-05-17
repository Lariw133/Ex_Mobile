function SAL_1(SALB_2, INSS, IMP) {
    SAL_2 = SALB_2 - INSS - IMP;
    return SAL_2;
}

function INSS_V(SALB_2) {
    INSS = SALB_2 * 11 / 100;
    return INSS
}

function SALB_1(HT, VH, SALB_2) {
    SALB_2 = HT * VH;
    return SALB_2
}
var SALB_2, INSS, VH, HT, ALQT, D, IMP, SAL_2, OP;
do {
    HT = parseInt(prompt("Digite Quantas horas foram Trabalhadas: "));
    VH = parseInt(prompt("Digite o Valor de sua Hora: "));
    SALB_2 = SALB_1(HT, VH, SALB_2);
    console.log("Seu Salario Bruto será de: " + SALB_2);
    if (SALB_2 < 900) {
        ALQT = 0;
        D = 0;
    } else if (SALB_2 >= 900 && SALB_2 <= 1800) {
        ALQT = 15 / 100;
        D = 135;
    } else {
        ALQT = 27.5 / 100;
        D = 360;
    }
    INSS = INSS_V(SALB_2);
    IMP = ALQT * (SALB_2 - INSS) - D;
    SAL_2 = SAL_1(SALB_2, INSS, IMP);
    console.log("O seu Salario Liquido será de: " + SAL_2);
    OP = (prompt("Voce Deseja continuar para o Proximo Funcionario?: (S)im ou (N)ão: "));
}