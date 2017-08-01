angular.module('meanarticle').factory('articleDatafactory',articleDatafactory);

function articleDatafactory($http)
{
	return {
		articlelist :articlelist,
		articledetail :articledetail
	};

function articlelist()
{
    return $http.get('/api/listall').then(complete).catch(failed);
}
function articledetail(id)
{
	return $http.get('/api/article/'+id).then(complete).catch(failed);
}

function complete(response) {
    return response;
  }

function failed(error) {
    console.log(error.statusText);
  }
}
