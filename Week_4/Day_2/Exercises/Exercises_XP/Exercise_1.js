const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((value, index) => {
    console.log(`${index + 1}# choice is ${value}`);
});


let exist = colors.some((value) => value == 'Violet');

if (exist)
    console.log("Yeah");
else
    console.log("No...");
