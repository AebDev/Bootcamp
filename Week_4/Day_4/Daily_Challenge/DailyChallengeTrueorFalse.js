const allTruthy = (...array) => {
    console.log(array.every(Boolean));
}


allTruthy(true, true, true);

allTruthy(true, false, true);

allTruthy(5, 4, 3, 2, 1, 0);

