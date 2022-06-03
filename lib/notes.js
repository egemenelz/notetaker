const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray){
    let filteredResults = notesArray;
    
    if(query.title){
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if(query.text){
        filteredResults = filteredResults.filter(note => note.text === query.text);
    }

    return filteredResults;
}

const findById = (id, notesArray) => {
    return notesArray.filter(note => note.id === id)[0];
}

const createNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);

    console.log(note);

    fs.writeFileSync(
        path.join(__dirname, '../database/db.json'),
        JSON.stringify({ '' : notesArray }, null, 2)
    );
    return note;
}

const validateNote = (note) => {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }

    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}


module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
}