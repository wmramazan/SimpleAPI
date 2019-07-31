var express = require('express');
var router = express.Router();

var random = require('../util/random')
var notification = require('../json/notification')
var notification_failure = require('../json/notification_failure')

router.get('/', function(req, res, next) {
  res.json(
    random(3) == 0 ? notification_failure : notification
  )
});

module.exports = router;
