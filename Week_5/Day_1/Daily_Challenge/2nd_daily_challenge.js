
const morse = `{
            "0": "-----",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--..",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
            "!": "-.-.--",
            "-": "-....-",
            "/": "-..-.",
            "@": ".--.-.",
            "(": "-.--.",
            ")": "-.--.-"
        }`;

const toJs = (jsonString) => {
    return new Promise((resolve, reject) => {
        if (jsonString === '') {
            reject('Empty string');
        } else {
            resolve(JSON.parse(jsonString));
        }
    });
}

const toMorse = (morseJS) => {
    let word = prompt('Enter a word : ').trim().toLowerCase();
    return new Promise((resolve, reject) => {
        if (word === null) {
            reject('User cancelled input');
            return;
        }
        if (word === '') {
            reject('Empty input');
            return;
        }

        const allCharsFound = Array.from(word).every(char => morseJS.hasOwnProperty(char));

        if (!allCharsFound) {
            reject('Character(s) not found in Morse dictionary');
        } else {
            const morseTranslation = Array.from(word).map(char => morseJS[char]);
            resolve(morseTranslation);
        }
    });
}

const joinWords = (morseTranslation) => {
    console.log(morseTranslation.join(`\n`));
}

toJs(morse)
    .then(result => toMorse(result))
    .then(result => joinWords(result))
    .catch(error => console.error(error));