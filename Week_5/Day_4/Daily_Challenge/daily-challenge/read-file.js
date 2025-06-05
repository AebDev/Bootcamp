import fs from 'fs';

export const readFile = () => {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    })
}