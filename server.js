const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
var handlers = require('./handlers.js')



//middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;



app.post('/api/signup',handlers.handleUser.addUser);
app.post('/api/login',handlers.handleUser.checkToLogin);
app.post('/api/addPost',handlers.handlePost.addPost);
app.post('/api/postOrderForUser',handlers.handlePost.postOrderForUser);		
app.post('/api/make_like',handlers.handleLike.make_like);
app.post('/api/make_comment',handlers.handleComment.make_comment);
app.get('/api/getlike',handlers.handleLike.getlike);
app.get('/api/getcomment',handlers.handleComment.getcomment)
app.get('/api/getPosts',handlers.handlePost.getPosts);		
app.post('/api/getlikeOrder',handlers.handleLike.getlikeOrder);		








//app.post('/api/postOrderForUser',function(req,res){console.log(req.body)});		//test
// app.get('/api/login', function(req,res){
// 		var	data="dataaaaaaa";
// 		console.log(data);
// 	    res.writeHead(200, {'Content-Type': 'text/html'});
// 	    res.write(data);
// 	    res.end();
// })




app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;