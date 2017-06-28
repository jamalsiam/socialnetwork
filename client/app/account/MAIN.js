angular.module('main',[])

.controller('mainController',  function ($scope , $window , $location  , $route ,posts , postOrder ,likes , comments) {
    $scope.username=$window.localStorage.getItem('user.username');
    $scope.email=$scope.main=$window.localStorage.getItem('user.email');
 

if(!$scope.email){
console.log("no username here");
}
else
{
 postOrder.getPosts()
  .then(function (i) {
    console.log(i);
    $scope.postsInfo=i;
    })
  .catch(function (error) {
    $scope.msg = "err";
    console.log(error);
    })



likes.getlike({email:$scope.email})
  .then(function(d) {
    console.log(d);
    $scope.likess=d;
    });



comments.getcomment({email:$scope.email})
	.then(function(d) {
 		console.log(d);
 		$scope.commentss=d;
  });






}
   


$scope.make_Like=function(id,emailBoster){
	likes.add_like({
    email:$scope.email,
    username:$scope.username,
    postId:id,
    emailBoster:emailBoster
    }).then(function (i) {

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


//$scope.main=$window.localStorage.getItem('user.email') +$window.localStorage.getItem('user.username') ;
