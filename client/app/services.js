angular.module('u.services', [])


.factory('signup',function($http){
 var adduser = function (signup) {
  console.log("hereeee");
  console.log(signup);
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: signup
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    adduser:adduser
  }
})


.factory('posts',function($http){
 var addPost = function (posts) {
  console.log("hereeee");
  console.log(posts);
    return $http({
      method: 'POST',
      url: '/api/addPost',
      data: posts
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    addPost:addPost
  }

})
.factory('login',function($http){
 var checkToLogin = function (login) {
  console.log("hereeee");
  console.log(login);
    return $http({
      method: 'POST',
      url: '/api/login',
      data: login
    }).then(function (res) {
      return res.data;
    });
  };




      //GET data from server
  var checkLogin=function(){
    return $http({
      method:'GET',
      url:'/api/login'
    })
    .then(function(res){
      return res.data
    });
  };

  return {
    checkToLogin:checkToLogin,
    checkLogin:checkLogin
  }
})


.factory('postOrder',function($http){
 var getPost = function (user) {
  console.log("hereeee");
  console.log(user);
    return $http({
      method: 'POST',
      url: '/api/postOrderForUser',
      data: user
    }).then(function (res) {
      return res.data;
    });
  };

  var getPosts = function () {
  
  
    return $http({
      method: 'GET',
      url: '/api/getPosts',
  
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    getPost:getPost,
    getPosts:getPosts
  }
})



.factory('likes',function($http){
 var add_like = function (like_data) {
  console.log("hereeee");
  console.log(like_data);
    return $http({
      method: 'POST',
      url: '/api/make_like',
      data: like_data
    }).then(function (res) {
      return res.data;
    });
  };

var getlike = function (d) {
    return $http({
      method: 'GET',
      url: '/api/getlike',
       data:d
    })
    .then(function (res) {
      return res.data;
    });
  };

var getlikeOrder = function (d) {
    return $http({
      method: 'POST',
      url: '/api/getlikeOrder',
       data:d
    })
    .then(function (res) {
      return res.data;
    });
  };

  return {
    getlikeOrder:getlikeOrder,
    add_like:add_like,
    getlike:getlike
  }
})



.factory('comments',function($http){
 var add_comment = function (comment_data) {
  console.log("hereeee");
  console.log(comment_data);
    return $http({
      method: 'POST',
      url: '/api/make_comment',
      data: comment_data
    }).then(function (comment_data) {
      //return res.data;
    });
  };
var getcomment = function () {
    return $http({
      method: 'GET',
      url: '/api/getcomment',
       
    })
    .then(function (res) {
      return res.data;
    });
  };
  return {
    add_comment:add_comment,
    getcomment:getcomment
  }
})

