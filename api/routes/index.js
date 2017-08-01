var express = require('express');
var router = express.Router();

var cnt1=require('../controller/myfc.js');

router
	.route('/addone')
	.post(cnt1.addone);

router
	.route('/article/:articleid')
	.get(cnt1.showone);

module.exports =router;