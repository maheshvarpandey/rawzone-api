// models/Item.js (or any other appropriate file)
const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
  },
  DOJoin: {
    type: String,
    required: true,
  },
  DOValid: {
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
  },
  Payment_mode: {
    type: String,
    required: true,
  },
  R_N: {
    type: String,
    required: true,
  },
  Amount: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false
  }
});

module.exports =  mongoose.models.User || mongoose.model('User', userSchema);