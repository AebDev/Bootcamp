const makeAllCaps = (arrayOfWords) => {
    return new Promise((resolve, reject) => {
        if (arrayOfWords.every(word => typeof word === "string")) {
            resolve(arrayOfWords.map(word => word.toUpperCase()))
        }
        else {
            reject("Not all elements are strings")
        }
    })

}

const sortWords = (arrayOfWords) => {
    return new Promise((resolve, reject) => {
        if (arrayOfWords.length > 4) {
            resolve(arrayOfWords.sort());
        }
        else {
            reject("Not enough words")
        }
    });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))