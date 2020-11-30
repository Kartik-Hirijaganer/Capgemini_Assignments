const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  quantity:{
    type: Number,
    required: true
  }
});

const item = mongoose.model('item', itemSchema);
module.exports = item;