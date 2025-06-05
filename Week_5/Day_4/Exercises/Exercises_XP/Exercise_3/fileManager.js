const fs = require('fs');
const readFile = (fileName) => {
    //console.log("Reading file...");
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    })
}

const writeFile = (fileName, data) => {
    //console.log("Writing file...");
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File written successfully");
        }
    })
}

module.exports = { readFile, writeFile };