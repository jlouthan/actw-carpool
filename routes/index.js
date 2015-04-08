'use strict';
var Posting = require('mongoose').model('Posting');

module.exports = function(app) {

	app.get('/', function(req, res){
		Posting.find({}, function(err, postings) {
			if(err) {
				return next(err);
			}
			res.render('home', {postings: postings});
		});
	});

}