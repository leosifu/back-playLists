const PlayListController = require('./controllers/playList');

const SongController = require('./controllers/song');

exports = module.exports = function(io){
  io.on('connection', (socket) => {
    console.log(`New connection, ${socket.id}`);

    socket.on('saveSongToPlaylist', async (song, playListId) => {
      const findPlayList = await SongController.addSongToPlayList(song, playListId);
      io.emit('playList-updated', findPlayList);
    })

    socket.on('changeCurrentSongPlaylist', async (nextSong, playListId) => {
      const updatedPlayList = await PlayListController.changeSong(nextSong, playListId);
      io.emit('playList-updated', updatedPlayList);
    })

    socket.on('deleteSongFromPlayList', async (songId, playListId) => {
      const updatedPlayList = await PlayListController.deleteSongFromPlayList(songId, playListId);
      io.emit('playList-updated', updatedPlayList);
    })

    socket.on('get-playlist', (message) => {
      console.log(`message from ${socket.id} : ${message}`);
    })

    socket.on('disconnect', () => {
      socket.removeAllListeners();
    })
  })
}

// const socketIO = require("socket.io");
//
// module.exports = (function) => {
//   const io = socketIO(server, {
//     transports:['polling'],
//     cors:{
//       cors: {
//         origin: "http://localhost:3000"
//       }
//     }
//   })
//
//   io.on('connection', (socket) => {
//     console.log('A user is connected');
//
//     socket.on('message', (message) => {
//       console.log(`message from ${socket.id} : ${message}`);
//     })
//
//     socket.on('disconnect', () => {
//       console.log(`socket ${socket.id} disconnected`);
//     })
//   })
// }
