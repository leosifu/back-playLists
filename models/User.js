const mongoose = require('mongoose')

// set up fields with validation
const UserSchema = new mongoose.Schema({
  username: {
	  type: String,
	  required: true,
	  minlength: 6,
	  trim: true,   // remove leading and trailing whitespace
	  unique: true
  },
  password: {
	  type: String,
	  required: true,
	  minlength: 6
  },
  age: {
	  type: Number,
	  default: 1,
	  min: 18,
	  max: 118
  }
});

// create a mongoose model using the Schema and export it
const User = mongoose.model('User', UserSchema)
module.exports = {User}
