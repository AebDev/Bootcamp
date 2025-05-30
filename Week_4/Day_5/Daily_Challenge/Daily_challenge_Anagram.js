const Anagram = (str1, str2) => {
    return str1.toLowerCase().split('').sort().join('').trim() === str2.toLowerCase().split('').sort().join('').trim();

};

console.log(Anagram("Astronomer", "Moon starer"));
console.log(Anagram("School master", "The classroom"));
console.log(Anagram('The Morse Code', 'Here come dots'));
