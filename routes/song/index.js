const router = require('express').Router();
// individual products routes
const SongController = require('../../controllers/song');

// const io = require('../../socket.js');

router.put('/add', SongController.addSongToPlayList);

module.exports = router;
