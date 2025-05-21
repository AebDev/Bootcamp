function hotelCost(nights) {
    // let nights;
    // do {
    //     nights = parseInt(prompt("Enter the number of nights they would like to stay : "));
    // }
    // while (isNaN(nights));
    return nights * 140;
}

function planeRideCost(destination) {
    // let destination;
    // do {
    //     destination = prompt("Insert your destination : ").trim();
    // }
    // while (destination.length == 0);

    switch (destination.toLowerCase()) {
        case "london":
            return 183;

        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost(days) {
    // let days;
    // do {
    //     days = parseInt(prompt("Enter the number of days you would like to rent the car : "));
    // }
    // while (isNaN(days));
    const price = days > 10 ? days * 40 * 0.95 : days * 40;
    return price;
}

function totalVacationCost() {

    let nights, destination, days;
    do {
        destination = prompt("Insert your destination : ").trim();
        nights = parseInt(prompt("Enter the number of nights they would like to stay : "));
        days = parseInt(prompt("Enter the number of days you would like to rent the car : "));

    }
    while (destination.length == 0 || !isNaN(destination) || isNaN(nights) || isNaN(days));


    const planeCost = planeRideCost(destination);
    const hotel = hotelCost(nights);
    const carCost = rentalCarCost(days);
    console.log(`The car cost: ${carCost}, the hotel cost: ${hotel}, the plane tickets cost: ${planeCost}.`)
}

totalVacationCost();
