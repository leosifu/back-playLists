const {PlayList} = require('../../models/playList');
const {Song} = require('../../models/song');

module.exports = {
  async addSongToPlayList(req, res, next) {
    try {
      const {id} = req.params;
      const {songData, playListId} = req.body;
      // console.log(playListId);
      // console.log(songData);
      const data = {
        url: songData.id.videoId,
        songName: songData.snippet.title,
        provider: songData.provider,
        position: 0,
        image: songData.snippet.thumbnails.medium.url
      }
      const findPlayList = await PlayList.findById(playListId).populate('songs');
      console.log(findPlayList);
      const playListSongs = findPlayList.songs;
      // console.log(playListSongs);

      const newSong = await Song.create(data);
      // console.log(newSong);

      findPlayList.songs.push(newSong);
      findPlayList.songsOrder.push(newSong._id);
      await findPlayList.save();
      // console.log(io);

      io.emit('playList-updated', findPlayList);

      // const newSong = PlayList.findByIdAndUpdate(id,
      //   {
      //     $push: {
      //       songs: {
      //         provider: data.provider,
      //         id: data.id.videoId,
      //         title: data.snippet.title
      //       }
      //     }
      //   },
      //   { new: true, useFindAndModify: false }
      // )
      // console.log(newSong);
      return res.json({
        confirmation: 'success',
        data: findPlayList
      });

    } catch (e) {
      console.log('fallando aca....');
      console.log(e);
    }
  },
  async deleteSongFromPlayList(req, res, next) {
    try {

    } catch (e) {

    }
  }
}
