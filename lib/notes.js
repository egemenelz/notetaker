const fs = require('fs');
const path = require('path');

/**
 * This method help us to filter the data by query
 * @param {*} query 
 * @param {*} notesArray 
 * @returns 
 */
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

/**
 * This method return data by passed id
 * @param {note.id} id 
 * @param {note database} notesArray 
 * @returns 
 */
const findById = (id, notesArray) => {
    return notesArray.filter(note => note.id === id)[0];
}

/**
 * This method help us to create new note
 * Used fs to override already created database
 * @param {request body user sends} body 
 * @param {note database} notesArray 
 * @returns 
 */
const createNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);

    console.log(note);
    console.log(notesArray)
    fs.writeFileSync(
        path.join(__dirname, '../database/db.json'),
        JSON.stringify(notesArray , null, 2)
    );
    return note;
}

/**
 * This method validates the data coming from user 
 * if matches with expectetions it returns true
 * otherwise false
 * @param {note db} note 
 * @returns 
 */
const validateNote = (note) => {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }

    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}

// exports the methods to other class
module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
}