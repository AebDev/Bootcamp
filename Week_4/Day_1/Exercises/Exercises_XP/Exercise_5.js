function weight1(kg) {
    return kg * 1000;
}
weight1(10);

const weight2 = function (kg) {
    return kg * 1000;
}
weight2(10);

// function expression canot be called before it is declared,but function declaration can.

const weight3 = (kg) => kg * 1000;
weight3(10);



