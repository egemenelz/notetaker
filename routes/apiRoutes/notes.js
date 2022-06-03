const router = require('express').Router();
const { findById, createNewNote, validateNote, filterByQuery } = require('../../lib/notes');
const notes = require('../../database/db.json');

/**
 * GET API method
 * /notes endpoint will return the data 
 * we have in database with help of filterByQuery method
 */
router.get('/notes', (req, res) => {
    console.log(notes)
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

/**
 * GET API method
 * /notes/:id endpoint will return specific data
 * with help of /:id will be able to pass id
 * with help of findByID method will find data we are looking in database
 */
router.get('/notes/:id', (req, res) => {
    console.log(notes)

    const result = findById(req.params.id, notes);

    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

/**
 * POST API method
 * We will be able to create a new data by passing body while sending request
 * first checking if note is match with expectections.
 * If doesn't it will throw error, otherwise create new note succesfully 
 */
router.post('/notes', (req, res) => {
    console.log(notes.length)
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

/**
 * DELETE API Method
 * We will be able to delete specific data from database
 * We can pass id number on and help of findByid we will find the specific data
 */
router.delete('/notes/:id', (req, res) => {
    const noteToDelete = findById(req.params.id, notes);

    if (noteToDelete) {
        res.json(noteToDelete);
    } else {
        res.send(404);
    }

    notes.splice(notes.indexOf(noteToDelete), 1);
})


module.exports = router;