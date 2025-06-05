import fs from 'fs';

const readDirectory = () => {
    fs.readdir('./', (err, files) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(files);
        }
    })
}

readDirectory();