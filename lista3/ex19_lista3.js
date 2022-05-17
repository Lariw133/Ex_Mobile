var idade_1,
    cont = 0,
    op_filme;
var soma_1 = 0,
    media_1,
    porc_a,
    porc_b,
    porc_c,
    porc_d,
    porc_e,
    a = 0,
    b = 0,
    c1 = 0,
    d = 0,
    e = 0;
do {
    idade_1 = parseFloat(prompt('Digite sua idade: '));
    if (idade_1 >= 0) {
        cont = cont + 1;
        op_filme = parseInt(
            prompt(
                'Digite sua opinião sobre o filme: 1- Ótimo, 2- Bom, 3- Regular, 4- Ruim, 5- Péssimo'
            )
        );

        switch (op_filme) {
            case 1:
                a = a + 1;
                break;
            case 2:
                b = b + 1;
                break;
            case 3:
                c1 = c1 + 1;
                break;
            case 4:
                d = d + 1;
                break;
            case 5:
                e = e + 1;
                break;
        }
        soma_1 = soma_1 + idade_1;
    }
} while (idade_1 >= 0);
media_1 = soma_1 / cont;
porc_a = (a / cont) * 100;
porc_b = (b / cont) * 100;
porc_c = (c1 / cont) * 100;
porc_d = (d / cont) * 100;
porc_e = (e / cont) * 100;

function totalidade(media_1, soma_1, cont) {
    media_1 = soma_1 / cont;
    return media_1;
}

function otimo(a, a, cont) {
    a = (100 * a) / cont;
    return a;
}

function bom(b, b, cont) {
    b = (100 * b) / cont;
    return b;
}

function regular(c1, c1, cont) {
    c1 = (100 * c1) / cont;
    return c1;
}

function pessimo(d, d, cont) {
    d = (100 * d) / cont;
    return d;
}

function ruim(e, e, cont) {
    e = (100 * e) / cont;
    return e;
}
idadett = totalidade(media_1, soma_1, cont);
a = otimo(a, a, cont);
b = bom(b, b, cont);
c = regular(c1, c1, cont);
d = ruim(d, d, cont);
e = pessimo(e, e, cont);

console.log('Total de participantes: ' + cont);
console.log('Media das idades é: ' + media_1);
console.log('A porcentagem de otimo: ' + a + '%');
console.log('A porcentagem de bom: ' + b + '%');
console.log('A porcentagem de regular: ' + c + '%');
console.log('A porcentagem de ruim: ' + d + '%');
console.log('A porcentagem de pessimo: ' + e + '%');