angular.module('user.signup', [])

.controller('signupController', function ($scope , $window , $location , signup ) {



	$scope.sign_up=function(){
		var record={
				name: $scope.user_name,
				email:$scope.user_email,
				password:$scope.user_password
		}
		if($scope.user_password==$scope.user_password_repeat){
	 		 signup.adduser(record)
    		.then(function (i) {
	        	console.log(i);
	       		$scope.matching="";	
	       		$location.path('/main');
       			$window.localStorage.setItem('user.email', record.name);
	          $window.localStorage.setItem('user.username',record.email);      
	          $window.location="/#/myprofile";
	          $scope.accountUser=$window.localStorage.getItem('user.email')+ " : "+$window.localStorage.getItem('user.username') ;
	          $scope.user=$window.localStorage.getItem('user.email')+ $window.localStorage.getItem('user.username') ;
            })
			.catch(function (error) {
			$scope.matching = "user not Found...Sign up First";

			console.log(error);
           })
		}
		else
		{
			$scope.matching="password is not match";
			$scope.user_password="";
			$scope.user_password_repeat="";
		}



     }//end $scope.sign_up

     $scope.cancel=function(){
     		$location.path('/');
     }

});
