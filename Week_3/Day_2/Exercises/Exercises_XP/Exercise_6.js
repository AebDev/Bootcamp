const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let string = '';
for (key in details) {
    string += `${key} ${details[key]} `;
    console.log(`${key} ${details[key]}`);
}

console.log(string);
