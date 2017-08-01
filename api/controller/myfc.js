var mongoose = require('mongoose');
var article =mongoose.model('article');
module.exports.addone= function(req,res)
{
	console.log('post the data');
	article
		.create({
			username : req.body.username,
			password  :req.body.password
		},function(err,articles)
		{
			if(err)
			{
				console.log('error creating hotel :'+err);
				res
					.status(400)
					.json(err);
			}
			else{
				console.log('hotel created successfully');
				res
				  .status(200)
				  .json(articles);
			}
		});
}
module.exports.showone = function(req,res)
{
	var id=req.params.articleid;

	article
		.findById(id)
		.exec(function(err,articles)
		{
			if(err)
			{
				console.log('err in finding :'+err);
				res
					.status(400)
					.json(err);
			}
			else{
				console.log('found');
				res
					.status(200)
					.json(articles);
			}
		})
}
