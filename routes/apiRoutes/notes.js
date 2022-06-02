const router = require('express').Router();
const { findByTitle, createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/notes/:title', (req, res) => {
    console.log(notes);
    const result = findByTitle(req.params.title, notes);
    console.log(result);

    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

router.post('/notes', (req, res) => {
    console.log(req.body);

    // req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});


module.exports = router;