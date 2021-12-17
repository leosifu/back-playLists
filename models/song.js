const mongoose = require('mongoose')

// set up fields with validation
const CounterSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', CounterSchema);

const SongSchema = new mongoose.Schema({
  songName: {
    type: String
  },
  url: {
    type: String
  },
  provider: {
    type: String
  },
  position: {
    type: String
  },
  image: {
    type: String,
  }
});

// SongSchema.pre('save', function(next) {
//   var doc = this;
//   Counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter) {
//       if(error) {
//         return next(error);
//       }
//       console.log(counter.seq);
//       doc.position = counter.seq;
//       next();
//   });
// });


// create a mongoose model using the Schema and export it
const Song = mongoose.model('Song', SongSchema);

module.exports = {
  Song,
  SongSchema,
};
