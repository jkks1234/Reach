angular.module('meanarticle').controller('articlesController', articlesController);

function articlesController(articleDatafactory) {
	 console.log("hi");
  var vm = this;
  vm.titlel = 'MEAN Article App';
  articleDatafactory.articlelist().then(function(response) {
    vm.articles = response.data;
  });
}
