// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
let creatorSchema = new mongoose.Schema({
    firstname:{
        type: String,
        require: true
    },
    lastname: String,
    image: String,
    birthYear: Number,
    deathYear: Number
  })
  
// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
let pieceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: String,
    creator: creatorSchema,
    museum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Museum'
    } 
  });
  
// TODO: Use Piece schema to create Piece model

// TODO: Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema);

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
