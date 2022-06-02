const fs = require('fs');
const path = require('path');

function findByTitle(title, notesArr) {
    const result = notesArr.filter(note => note.title === title)[0];
    return result;
}

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
}

function deleteNote(title) {
    const rawData = fs.readFileSync('../db/db.json');
    const setValue = JSON.parse(rawData);

    const dataRemoved = setValue.filter((e) => {
        return e.title !== title;
    })

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: dataRemoved })
    )
    return `${title} is removed!`
}

module.exports = {
    findByTitle,
    createNewNote,
    deleteNote
}