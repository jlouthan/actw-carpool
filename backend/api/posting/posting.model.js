var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostingSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	type: String,
	day: String,
	time: String
});

mongoose.model('Posting', PostingSchema);