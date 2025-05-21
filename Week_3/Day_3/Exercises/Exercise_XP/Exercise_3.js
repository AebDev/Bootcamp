const changeEnough = (itemPrice, amountOfChange) => {
    let sum = 0;
    let change = [0.25, 0.10, 0.05, 0.01];
    for (i in amountOfChange) {
        sum += amountOfChange[i] * change[i];

    }

    if (sum > itemPrice) {
        return true;
    }
    else {
        return false;
    }
}

console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

