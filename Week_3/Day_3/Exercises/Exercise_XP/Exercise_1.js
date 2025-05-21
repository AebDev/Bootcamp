const displayNumbersDivisible = (x) => {
    let sum = 0, outcome = 'Outcome :';
    for (let i = 0; i <= 500; i++) {
        if (i % x == 0) {
            console.log(i);
            outcome += ' ' + i.toString();
            sum += i;
        }
    }
    console.log(outcome);
    console.log("Sum : ", sum);
}

displayNumbersDivisible(50);