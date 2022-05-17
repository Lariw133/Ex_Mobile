var nota1 = [0],
    nota2 = [0],
    nota3 = [0];

nota1 = parseFloat(prompt('Digite o valor da nota1: '));
nota2 = parseFloat(prompt('Digite o valor da nota2: '));
nota3 = parseFloat(prompt('Digite o valor da nota3: '));

function media(nota1, nota2, nota3, media) {
    media = (nota1 + nota2 + nota3) / 3;
    return media;
}

novaMedia = media(nota1, nota2, nota3);

if (novaMedia >= 7) console.log('aluno aprovado');
else console.log('aluno reprovado');