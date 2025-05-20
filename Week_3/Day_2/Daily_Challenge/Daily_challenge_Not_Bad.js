let sentence = "The movie is not that bad, I like it.";

let wordNot = parseInt(sentence.indexOf("not"));
let wordBad = parseInt(sentence.indexOf("bad"));


if (wordBad > wordNot) {
    sentence = `${sentence.slice(0, wordNot)}good${sentence.slice(wordBad + 3, sentence.length)}`;
}

console.log(sentence);