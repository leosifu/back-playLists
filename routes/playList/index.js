const router = require('express').Router();
// individual products routes
const PlayListController = require('../../controllers/playList');

router.get('/', PlayListController.getAllPlayList);

router.put('/:id/add', PlayListController.editPlayList);

router.get('/:id', PlayListController.getPlayListById);

router.post('/', PlayListController.newPlayList);


module.exports = router;
