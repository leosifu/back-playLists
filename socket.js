const PlayListController = require('./controllers/playList');

exports = module.exports = function(io){
  io.on('connection', (socket) => {
    console.log(`New connection, ${socket.id}`);

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
