var n1 = 0,
    n2 = 0,
    maior = 0,
    menor = 0,
    enesimo = 0;
n1 = parseInt(prompt('Insira o 1 número inteiro:'));
n2 = parseInt(prompt('Insira o 2 número inteiro:'));
maior = pegarMaior(n1, n2);
menor = pegarMenor(n1, n2);
for (i = 3; i <= 20; i++) {
    enesimo = parseInt(prompt('Insira o ' + i + ' número inteiro:'));
    maior = pegarMaior(maior, enesimo);
    menor = pegarMenor(enesimo, menor);
}
console.log(maior + ' ' + menor);

function comparableTwoValues(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function pegarMaior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function pegarMenor(n1, n2) {
    if (n1 > n2) {
        return n2;
    } else {
        return n1;
    }
}