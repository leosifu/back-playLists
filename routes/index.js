var router = require('express').Router();

playListRoutes = require('./playList');
songRoutes = require('./song');

router.use('/playList', playListRoutes);
router.use('/song', songRoutes);

module.exports = router;
