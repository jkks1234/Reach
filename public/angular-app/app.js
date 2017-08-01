angular.module('meanarticle',['ngRoute']).config(config);

function config($routeProvider)
{
	$routeProvider
		.when('/',{
			templateUrl : 'angular-app/article-list/articles.html',
		  	controller: articlesController,
      		controllerAs: 'vm'	
      	})
		.when('/article/:id/',{
			templateUrl : 'angular-app/article-display/article.html',
			controller: articledisplay,
      		controllerAs: 'vm'
		});


}