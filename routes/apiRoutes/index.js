const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notes');

/**
 * Points to router which apiRoutes will use
 */
router.use(notesRoutes);

module.exports = router;