const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const {Song, SongSchema} = require('./song');

// set up fields with validation
const PlayListSchema = new Schema({
  playListName: {
    type: String
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song"
    }
  ],
  songsOrder: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song"
    }
  ],
  currentSongPosition: {
    type: Number,
    default: 0,
  },
  currentSongMinute: {
    type: String,
    default: '0:00'
  },
});

// create a mongoose model using the Schema and export it
const PlayList = model('PlayList', PlayListSchema);

module.exports = {PlayList};
