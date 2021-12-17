const {PlayList} = require('../../models/playList');

// const CheckCoordinaciones = async (asignaturaId) => {
//   const FindAsignaturas = await InfoCoordinacion.findAll({
//
//   })
// }

module.exports = {
  prueba(req, res, next) {
    console.log('wiii');
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
  async changeSong(req, res, next) {
    try {
      const {id} = req.params;
      const updatedPlayList = await PlayList.findOneAndUpdate(
        {
          _id: id,
        },
        {
          currentSongPosition
        }
      )


    } catch (e) {
      console.log(e);
    }
  }
}
