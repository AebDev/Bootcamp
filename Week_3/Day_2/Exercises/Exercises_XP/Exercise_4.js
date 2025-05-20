const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);

console.log(`number of apprtements on the first floor: ${building.numberOfAptByFloor.firstFloor}\nnumber of appartments are on the 3rd floor : ${building.numberOfAptByFloor.thirdFloor}`);

console.log(`the second tenant is ${building.nameOfTenants[1]} and the number of rooms he has in his apartment is ${building.numberOfRoomsAndRent.dan[0]}`);

if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
