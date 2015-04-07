'use strict';

var express = require('express');
var controller = require('./posting.controller');

var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.list);
router.get('/:postingId', controller.show);
router.put('/:postingId', controller.update);
router.delete('/:postingId', controller.delete);

module.exports = router;