
var mongoose = require('mongoose');


// use schema to add it to mongo data base
var PostSchema = new mongoose.Schema({
 
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
  status:{
    type: String,
    //required: true,
    // unique: true
  },
  feel:{
    type: String,
    //required: true,
    // unique: true
  },
  photo: {
    type : Array ,
    "default" : []
  },
  datee: {
    type:Date,
    default:Date.now
  }
  

});
/*const Post =*/ module.exports = mongoose.model('posts', PostSchema);


//module.exports.getPosts = (callback) => {
  //Post.find(callback);
//}