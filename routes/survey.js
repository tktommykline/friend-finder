var express = require('express');
var router = express.Router();
var friends = require("../public/javascripts/friends")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('survey', {title: "finder"}, {friends});
});

module.exports = router;
