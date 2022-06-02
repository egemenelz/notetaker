const router = require('express').Router();
const { findById, createNewNote, deleteNote } = require('../../lib/notes');
const {notes} = require('../../db/db');

router.get('/notes/:title', (req, res) => {

})



module.exports = router;