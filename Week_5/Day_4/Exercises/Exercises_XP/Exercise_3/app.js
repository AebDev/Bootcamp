const { readFile, writeFile } = require('./fileManager');


writeFile('Hello World.txt', 'Hello World !! ');
writeFile('Bye World.txt', 'Bye World !! ');

readFile('Hello World.txt');
writeFile('Bye World.txt', 'Writing to the file');