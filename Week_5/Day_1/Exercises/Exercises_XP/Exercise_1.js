

const compareToTen = value =>
    new Promise((resolve, reject) =>
        value <= 10 ? resolve("value lower then 10") : reject("value higher then 10"));


//In the example, the promise should reject
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))