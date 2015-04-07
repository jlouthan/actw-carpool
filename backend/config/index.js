'use strict';

// var config = require('./environment');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
}