app.controller("homeController", function ($scope, $facebook){
	$scope.message = 'hola mundo';

	$scope.user;
	$scope.albums = [];

	$scope.$on('fb.auth.authResponseChange', function (){
		$scope.status = $facebook.isConnected();
		if($scope.status) {
			$facebook.api('/me').then(function(user) {
				$scope.user = user;
			});
		}
	});

	$scope.loginFB = function () {
		$facebook.login();
	};

	$scope.getPhotos = function () {
		if (!$scope.status) return;
		$facebook.api("/me/albums").then(function (r){
			if (r.data){
				$scope.albums = r.data;
			}
		});
	}
});