// Route for all page when url go to page
angular.module('user',
  ['profile',
   'b',
   'main',
   'user.signup',
   'u.services',
   'ngRoute'
	])
.config(function($routeProvider, $httpProvider){
  $routeProvider
	.when('/', {
      templateUrl: 'app/account/main.html',
      controller:  'mainController'
    })
  .when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller:  'signupController'
    })
    .when('/myprofile', {
      templateUrl: 'app/account/profile.html',
      controller:  'profileController'
    })     
  .when('/b', {
      templateUrl: 'app/account/b.html',
      controller:  'bController'
    })

    .otherwise({
      redirectTo:'/'
    })
})

.controller('loginController', function ($scope , $window ,$route, $location , login) {
  $scope.fuck="okey";

$scope.accountUser=$window.localStorage.getItem('user.email')+ " : "+$window.localStorage.getItem('user.username') ;

$scope.user=$window.localStorage.getItem('user.email')+ $window.localStorage.getItem('user.username') ;
console.log($scope.user);
$scope.login=function(){
      var record={
        email:$scope.email,
        password:$scope.password
      }

      var email=$scope.email;
      var password=$scope.password;

      
      if(!email && !password){
          $scope.msg="Enter email and password";
      }
      else{
          if(!email){
              $scope.msg="Enter email";
          }
          if(!password){
              $scope.msg="Enter email";
          }
      }


      if(email && password){
        $scope.msg = ""
      //POST data to servies
      login.checkToLogin(record)
      .then(function (i) {
          $window.localStorage.setItem('user.email', i.user.email);
          $window.localStorage.setItem('user.username', i.user.username);      
          $window.location="/#/myprofile";
          document.getElementById('id01').style.display='none';
          $scope.accountUser=$window.localStorage.getItem('user.email')+ " : "+$window.localStorage.getItem('user.username') ;
          $scope.user=$window.localStorage.getItem('user.email')+ $window.localStorage.getItem('user.username') ;
        })
      .catch(function (error) {
        $scope.msg = "user not Found...Sign up First";
        console.log(error);
           })
      }
}
$scope.signout=function(){      
        $window.localStorage.removeItem('user.email');
        $window.localStorage.removeItem('user.username');
        $scope.accountUser=""
        scope.user=""
        $window.location="/main"; 
}
});