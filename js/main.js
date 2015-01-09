var app = angular.module("mainApp",["ngRoute","ngFacebook"]);

app.config(function ($routeProvider, $facebookProvider){
	$routeProvider
	.when('/',
	{
		templateUrl: 'js/controllers/home/template.html',
		controller: 'homeController'
	})
	.when('/album/:id',
	{
		templateUrl: 'js/controllers/album/template.html',
		controller: 'albumController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$facebookProvider.setAppId("782640321813761");
	$facebookProvider.setPermissions(["user_photos", "email"]);
});

app.run(function (){
	(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_LA/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
});