const {PlayList} = require('../../models/playList');

// const CheckCoordinaciones = async (asignaturaId) => {
//   const FindAsignaturas = await InfoCoordinacion.findAll({
//
//   })
// }

module.exports = {
  prueba(req, res, next) {
    console.log('aca esta prueba...');
    return 0;
  },
  async getAllPlayList(req, res, next) {
    try {
      const allPlayLists = await PlayList.find({});
      console.log(allPlayLists);
      return res.json(allPlayLists);

    } catch (e) {
      console.log('fallando en get...');
      console.log(e);
    }
  },
  async editPlayList(req, res, next) {
    try {
      const {id} = req.params;
      const data = req.body;
      console.log(id);
      console.log(data);
      const newSong = PlayList.findByIdAndUpdate(id,
        {
          $push: {
            songs: {
              provider: data.provider,
              id: data.id.videoId,
              title: data.snippet.title
            }
          }
        },
        { new: true, useFindAndModify: false }
      )
      console.log(newSong);
      return res.json(newSong);

    } catch (e) {
      console.log('fallando en put...');
      console.log(e);
    }
  },
  async getPlayListById(req, res, next) {
    try {
      const {id} = req.params;
      console.log(id);
      const playListFind = await PlayList.findById(id).populate('songs');
      console.log(playListFind);
      return res.json(playListFind);

    } catch (e) {
      console.log('fallando en get by id...');
      console.log(e);
    }
  },
  async newPlayList(req, res, next) {
    try {
      const playListData = {
        playListName: 'Lista 1',
        songs: []
      }
      const newPlayList = await PlayList.create(playListData);
      return res.json(newPlayList);

    } catch (e) {
      console.log('fallando en post...');
      console.log(e);
    }
  },
  async changeSong(nextSong, playListId) {
    try {
      const playListFind = await PlayList.findById(playListId).populate('songs');
      if (playListFind.songs.length === nextSong) {
        playListFind.currentSongPosition = 0;
      }
      else {
        playListFind.currentSongPosition = nextSong;
      }
      await playListFind.save();
      return playListFind;

    } catch (e) {
      console.log(e);
    }
  },
  async deleteSongFromPlayList(songId, playListId) {
    try {
      const playListFind = await PlayList.findById(playListId).populate('songs');
      playListFind.songs.pull({ _id: songId });
      playListFind.songsOrder.pull({ _id: songId });
      playListFind.save();
      return playListFind;
    } catch (e) {
      console.log(e);
    }
  },
  async changeSongPositionInPlaylist(id, playListId, toIndex, currentIndex) {
    try {
      const playListFind = await PlayList.findById(playListId).populate('songs');

      const songsOrderCopy = [...playListFind.songsOrder];
      songsOrderCopy.splice(toIndex, 0, songsOrderCopy.splice(currentIndex, 1)[0]);
      playListFind.songsOrder = songsOrderCopy;

      const songsCopy = [...playListFind.songs];
      songsCopy.splice(toIndex, 0, songsCopy.splice(currentIndex, 1)[0]);
      playListFind.songs = songsCopy;

      playListFind.save();
      return playListFind;
    } catch (e) {
      console.log(e);
    }
  }
}
