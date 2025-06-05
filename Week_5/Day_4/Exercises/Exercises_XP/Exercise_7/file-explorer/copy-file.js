import fs from 'fs';

const copyFile = () => {
    fs.readFile('source.txt', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fs.writeFile('destination.txt', data, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("File copied successfully");
                }
            })
        }
    })
}

copyFile();