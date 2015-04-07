var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostingSchema = new Schema({
	firstName: String,
	lastName: String,
	type: String,
	text: String
});

mongoose.model('Posting', PostingSchema);