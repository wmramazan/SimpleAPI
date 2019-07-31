var express = require('express');
var router = express.Router();

var random = require('../util/random')
var post = require('../json/post')
var post_failure = require('../json/post_failure')

router.get('/', function(req, res, next) {
  res.json(
    random(3) == 0 ? post_failure : post
  )
});

module.exports = router;
