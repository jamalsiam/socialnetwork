angular.module('profile', [])




.controller('profileController', function ($scope , $window , $location  , $route ,posts , postOrder ,likes , comments) {
  $scope.username=$window.localStorage.getItem('user.username');
  $scope.email=$scope.main=$window.localStorage.getItem('user.email');
  $scope.stepsModel = [];
  $scope.status;
  $scope.feel;



  if(!$scope.email){
    console.log("no username here");
  }
  else
  {
    console.log("hi "+$scope.email);
    postOrder.getPost({email:$scope.email})
    .then(function (i) {
          console.log(i);///////
          $scope.postsInfo=i;
        })

    .catch(function (error) {
     $scope.msg = "err";
     console.log(error);
   })

    likes.getlikeOrder({email:$scope.email})
    .then(function(d) {
      console.log(d);

      $scope.likess=d;


    });



    comments.getcomment()
    .then(function(d) {
      console.log(d);

      $scope.commentss=d;
    });

  }
  $scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
           var file = files[i];
           var reader = new FileReader();
           reader.onload = $scope.imageIsLoaded; 
           reader.readAsDataURL(file);
         }
       }

       $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
          $scope.stepsModel.push(e.target.result);
        });
        
      }

      $scope.post=function(){
       if($scope.username){
        $scope.msg="";
        $route.reload();

        var record={
          username: $scope.username,
          email: $scope.email,
          status:$scope.status+" ",
          feel:$scope.feel+" ",
          photo:$scope.stepsModel
        }

        posts.addPost(record)
        .then(function (i) {
         $state.reload();
       })

        .catch(function (error) {
         $scope.msg = "err";
         console.log(error);
       })
      }
      else{
        $scope.msg="login to post";
      }

    }

    // [
    // {
    //   likes: [id,id,id],
    //   comments: {
    //     id:"hi",
    //     id: "test"
    //   }
    //   friends: [id, id, id],
    //   posts: {
    //     likes:[id,id],
    //     comments:{
    //       id:"hi"
    //     },
    //     text:"asdasadsadssadsadsad"
    //   }
    // }
//   ,{

//   }
// ]
    $scope.make_Like=function(id,emailBoster){
      $scope.likess.push({
            email:$scope.email,
            username:$scope.username,
            postId:id,
            emailBoster:emailBoster
      })
      likes.add_like({
        email:$scope.email,
        username:$scope.username,
        postId:id,
        emailBoster:emailBoster
      }).then(function (i) {
        if(!i){
          $scope.likess.pop();
        }
      })
      .catch(function (error) {
        console.log(error);
      })


    }

    $scope.make_Comment=function(comment,id){
     $route.reload();
     var record={
      email:$scope.email,
      username:$scope.username,
      comment:comment,
      _id:id
    };

    comments.add_comment(record)
    .then(function (i) {        
    })   
    .catch(function (error) {
     console.log(error);
   })
  }
});

