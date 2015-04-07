'use strict';

module.exports = function(app) {

  app.use('/api/posting', require('./api/posting'));

};