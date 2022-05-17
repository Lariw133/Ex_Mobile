var x = [0],
    y = [0],
    z = [0];

x = parseFloat(prompt('Digite o valor de x: '));
y = parseFloat(prompt('Digite o valor de y: '));
z = parseFloat(prompt('Digite o valor de z: '));

function valor(x, y, z, valor) {
    valor = x ** 5 * y * z;
    return valor;
}

console.log(valor(x, y, z));