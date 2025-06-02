
const resolvePromise = Promise.resolve(3)
    .then(result => console.log(result));

const rejectPromise = Promise.reject("Boo")
    .then(result => console.log(result))
    .catch(error => console.log(error));

