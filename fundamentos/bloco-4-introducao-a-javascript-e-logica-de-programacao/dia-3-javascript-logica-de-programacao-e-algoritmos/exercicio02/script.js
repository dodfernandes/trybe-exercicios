let word = 'tryber';

let invertedWord = '';

for (i = 0; i < word.length; i += 1) {
    invertedWord += word[word.length - 1 - i];
};

console.log(invertedWord);