angular.module('meanarticle').controller('articledisplay',articledisplay);

function articledisplay($route , $routeParams , articleDatafactory)
{
	var vm = $this;
	vm.title = 'mean article app';
	var id = $routeParams.id;
	articleDatafactory.articledetail(id).then(function(response)
	{
		vm.articles=response.data;
	});
}