var mongoose = require('mongoose');


// use schema to add it to mongo data base
var CommentSchema = new mongoose.Schema({
 
username:{
    type: String,
    required: true,
    // unique: true
  },
  email:{
    type: String,
    required: true,
    // unique: true
  },
  postId:{
    type: String,
    //required: true,
    // unique: true
  },
  comment:{
    type: String,
    //required: true,
    // unique: true
  }
});
module.exports = mongoose.model('comments', CommentSchema);
