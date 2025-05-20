const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

let tostring = '';

for (number in numbers) {
    tostring += numbers[number].toString();

    if (number < numbers.length - 1) {
        tostring += ', ';
    }
}

console.log(tostring);

let join = numbers.join(', ');
console.log(join);

let temp, nested;

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
        if (numbers[i] < numbers[j]) {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }

    }
}

console.log(numbers);