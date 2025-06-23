const fs = require('fs');

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note already exists');
    }
};

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log('Note removed!');
        saveNotes(notesToKeep);
    } else {
        console.log('No note found!');
    }
};

const listNotes = function () {
    const notes = loadNotes();

    console.log('Your notes:');
    notes.forEach((note) => {
        console.log(note.title);
    });
};

const readNote = function (title) {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
    } else {
        console.log('Note not found');
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
