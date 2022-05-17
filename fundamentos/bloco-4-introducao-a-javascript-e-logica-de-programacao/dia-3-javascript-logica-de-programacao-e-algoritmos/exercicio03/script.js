let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = [];

for (i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
        maior = array[i];
    };
};

console.log('A maior palavra é:', maior);