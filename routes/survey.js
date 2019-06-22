var express = require('express');
var router = express.Router();
var friends = require("../public/javascripts/friends")
/* GET home page. */

function ranum() {
  return Math.floor(Math.random() * 3);
};
var randomNumber = ranum();
for(var i = 0; i < friends.length; i++){
  selection = ranum();
  friends[i].total = friends[i].scores[selection];
};

if(friends[0].total === friends[1].total){
  console.log("Bill and Jim are friends")
}if(friends[0].total === friends[2].total){
  console.log("Bill and Bob are friends")
}if(friends[1].total === friends[2].total){
  console.log("Jim and Bob are friends")
}else{
  console.log("Everyone hates eachother.")
};
router.get('/', function(req, res, next) {
  res.render('survey', {title: "finder", friends: friends, randomNumber: randomNumber});
});

module.exports = router;
