const colors = ["Black", "Blue", "White", "Red", "Green"];
const suffix = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"];

for (index in colors) {
    console.log(`my #${parseInt(index) + 1} choice is ${colors[index]}`);
}

for (index in colors) {
    console.log(`my ${parseInt(index) + 1}${suffix[index]} choice is ${colors[index]}`);
}

