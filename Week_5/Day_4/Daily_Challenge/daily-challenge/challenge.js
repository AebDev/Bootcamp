import greet from './greeting.cjs';
import { coloredMessage } from './colorful-message.js';
import { readFile } from './read-file.js';


console.log(greet('John Doe'));
coloredMessage('Hello World!');
readFile();


