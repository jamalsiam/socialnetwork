var User = require('./models/userModel.js');
var Post = require('./models/postModel.js');
var Like = require('./models/likeModel.js');
var Comment = require('./models/commentModel.js');
var jwt = require('jwt-simple');


module.exports.handleUser = {
  // get book from data base
  addUser:function(req, res) {
    var username = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    

    // check to see if user already exists
    User.findOne({username: username})
      .exec(function (err, user) {
        if (user) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create({
            username: username,
            password: password,
            email: email
          }, function (err, newUser) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                var token = jwt.encode(user, 'secret');
                res.json({token: token}); 
              }     
          });
        }
      });
  },
    checkToLogin:function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email})
      .then(function (user) {
        if (!user) {
          res.status(404).json("user not found")
        } else {
          user.comparePasswords(password)
            .then(function (isMatch) {
              if (isMatch) {
                var token = jwt.encode(user, 'secret');
                res.json({token : token, user : user});
              } else {
                res.json("password not matched")
              }
            });
        }
      });
  }

  
  }

module.exports.handlePost={
addPost:function(req, res){
var username =req.body.username;
var email= req.body.email;
var status= req.body.status;
var feel= req.body.feel;
var photo= req.body.photo;
// console.log( username +" "+status);

          return Post.create({
            username: username,
            email: email,
            status: status,
            feel: feel,
            photo:photo
          }, function (err, newp) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                res.json("done");
               }     
          });
},
postOrderForUser:function(req, res){


  Post.find({email: req.body.email})
      .exec(function (err, post) {
        if (post) {
          res.json(post);
        } 
      })

},

getPosts:function(req, res){


  Post.find()
      .exec(function (err, post) {
        if (post) {
          res.json(post);
        } 
      })

}
}



module.exports.handleLike={
make_like:function(req, res){
  console.log(req.body);
var username =req.body.username;
var email= req.body.email;
var postId= req.body.postId;
var emailBoster= req.body.emailBoster;
         return Like.create({
            username: username,
            email: email,
            postId: postId,
            emailBoster:emailBoster
          }, function (err, newp) {
              // create token to send back for auth
              if(err){
                res.json(false);
              } else {
                res.json(true);
                console.log("post like");
               }     
          });
},
getlike:function(req,res){
    Like.find()
      .exec(function (err, likeD) {
        if (likeD) {
          res.json(likeD);
        } 
      })

},
getlikeOrder:function(req,res){
    Like.find({emailBoster:req.body.email})
      .exec(function (err, likeD) {
        if (likeD) {
          res.json(likeD);
        } 
      })

}

}

module.exports.handleComment={
make_comment:function(req, res){
 console.log(req.body);
var username =req.body.username;
var email= req.body.email;
var postId= req.body._id;
var comment=req.body.comment;
         return Comment.create({
            username: username,
            email: email,
            postId: postId,
            comment:comment
          }, function (err, newp) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                res.json("done");
                console.log("post comment");
               }     
          });

},
getcomment:function(req,res){
    Comment.find()
      .exec(function (err, commentD) {
        if (commentD) {
          res.json(commentD);
        } 
      })

}


}






