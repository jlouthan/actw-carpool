'use strict';
var Posting = require('mongoose').model('Posting');

exports.create = function(req, res, next) {
	var posting = new Posting(req.body);
	posting.save(function(err){
		if(err){
			return next(err);
		}
		res.json(posting);
	});
}

exports.list = function(req, res, next) {
	Posting.find({}, function(err, postings) {
		if(err) {
			return next(err);
		}
		res.json(postings);
	});
}

exports.show = function(req, res, next) {
	Posting.findOne({_id: req.params.postingId}, function(err, posting){
		if(err) {
			return next(err);
		}
		res.json(posting);
	});
}

exports.update = function(req, res, next) {
	Posting.findByIdAndUpdate(req.params.postingId, req.body, function(err, posting){
		if(err) {
			return next(err);
		}
		res.json(posting);
	});
}

exports.delete = function(req, res, next) {
	Posting.remove({_id: req.params.postingId}, function(err){
		if(err) {
			return next(err);
		}
		res.sendStatus(204);
	});
}