const path = require('path');
const router = require('express').Router();

/**
 * GET API method for htmlRoute
 * It will return homepage
 */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

/**
 * GET API method to /notes
 * it will return /notes page
 */
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

/**
 * Asteriks used as wildcard,
 * it will return to homepage
 */
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;