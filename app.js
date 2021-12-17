const app = require('./index')
const http = require('http');
const mongoose = require("mongoose");
const socketIO = require("socket.io");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Prueba',
                 { useNewUrlParser: true})
  .then(() => {
    console.log('Connected to database.')
  })
  .catch(() => {
    console.log('Cannot connect to database. Exiting.')
    process.exit()
  }
)

app.use('/api', require('./routes'));

app.get('*', (req, res) => res.status(200).send({
message: 'Welcome to the beginning of nothingness.',
}));


const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

// const io = require('socket.io')(server);

const io = socketIO(server, {
  transports:['polling'],
  cors:{
    cors: {
      origin: "http://localhost:3000"
    }
  }
})

global.io = io;

file1 = require('./socket')(io)

// require('./socket')(server);

// const io = socketIo(server);



module.exports = server;
