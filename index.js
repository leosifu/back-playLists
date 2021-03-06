const dotenv = require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
var cors = require('cors');

// var iconv = require('iconv-lite')
// const encodings = require('iconv-lite/encodings')
// iconv.encodings = encodings;
// require('iconv-lite').encodingExists('cesu8')

const app = express();
// Log requests to the console.
app.use(cors());
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// var models = require("./models")
// models.sequelize.sync().then(function(){
//     console.log("Conecta2");
// }).catch(function(error){
//   console.log(error);
//   console.log("Problemas al conectar con la DB");
// })
// require('./routes')(app)
// // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
// message: 'Welcome to the beginning of nothingness.',
// }));
// const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port);
module.exports = app;
