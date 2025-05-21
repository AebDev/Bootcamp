let wordList = prompt("Enter words separated by a comma : ").trim().split(',');

let size = 0;
for (word of wordList) {
    if (word.length > size) {
        size = word.length;
    }
}

console.log('*'.repeat(size + 4));

for (word of wordList) {
    //console.log(`* ${word}${' '.repeat(size - word.length)} *`);
    console.log(`* ${word.padEnd(size, ' ')} *`);
}

console.log('*'.repeat(size + 4));
