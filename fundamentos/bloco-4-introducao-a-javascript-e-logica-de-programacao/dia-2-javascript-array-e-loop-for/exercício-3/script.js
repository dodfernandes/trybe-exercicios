let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    media += numbers[index];
};

media = media / numbers.length;

console.log('A média aritmética dos valores contidos no array é=', media);