const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((value, index) => {
    index > 2 ? console.log(`${index + 1}${ordinal[0]} choice is ${value}`) : console.log(`${index + 1}${ordinal[index + 1]} choice is ${value}`);
});


