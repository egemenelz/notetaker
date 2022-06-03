const router = require('express').Router();
const { findById, createNewNote, validateNote, filterByQuery } = require('../../lib/notes');
const notes = require('../../database/db.json');

router.get('/notes', (req, res) => {
    console.log(notes)
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

router.get('/notes/:id', (req, res) => {
    console.log(notes)

    const result = findById(req.params.id, notes);

    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

router.post('/notes', (req, res) => {
    console.log(req.body);
    console.log(notes)
    // console.log(notes.length.toString())

    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const noteToDelete = findById(req.params.id, notes);

    if(noteToDelete){
        res.json(noteToDelete);
    }else{
        res.send(404);
    }

    notes.splice(notes.indexOf(noteToDelete), 1);
})


module.exports = router;