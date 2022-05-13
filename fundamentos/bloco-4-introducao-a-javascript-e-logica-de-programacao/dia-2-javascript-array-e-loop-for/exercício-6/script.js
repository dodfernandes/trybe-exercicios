let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let qntNumerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let teste = numbers[index] % 2;

    if (teste != 0) {
        qntNumerosImpares += 1;
    }
};

if (qntNumerosImpares === 0) {
     console.log('Nenhum valor ímpar encontrado!');
    } else {
     console.log('Quantidade de números ímpares:', qntNumerosImpares);
};
