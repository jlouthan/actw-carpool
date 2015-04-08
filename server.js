var express = require('express');
var mongoose = require('mongoose');
var exphbs  = require('express-handlebars');
var path = require('path');

var db = mongoose.connect('mongodb://localhost/carpool');
require('./backend/api/posting/posting.model');

var app = express();

//Handlebars & other front end config
app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs( require('./exphbsOptions') ) );
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: { 
        ifEq: function(param1, param2, options) { 
            if ( param1 === param2) {
                return options.fn(this);  
            }            
        }
    }
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// back end config
require('./backend/config')(app);

// include all api routes
require('./backend/routes')(app);

// include all routes for frontend
require('./routes')(app);

// add in error handling middleware
// require('./backend/components/errorHandlers')(app);

app.listen(8000, '0.0.0.0');
console.log('Listening on port 8000');