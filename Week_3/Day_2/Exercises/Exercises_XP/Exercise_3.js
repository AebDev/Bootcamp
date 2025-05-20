number = prompt("Enter a number :");



if (!isNaN(number)) {
    console.log("is number");
}
else {
    console.log("is not number");
}


do {

    number = prompt("Enter a number :");
}
while (parseInt(number) >= 10 || isNaN(number));