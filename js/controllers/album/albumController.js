app.controller("albumController", function ($scope, $facebook, $routeParams){
	var id = $routeParams.id;
	$scope.photos = [];

	$facebook.api(id+"/photos").then(function (r){
		if (r.data)
			$scope.photos = r.data;
		console.log(r);
	});
});