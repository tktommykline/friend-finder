const friends = require("./friends");

friends.forEach(selector)

function selector(name, score) {
    var selection = Math.floor(Math.random() * 3);
    friends.total = friends.score[selection];
    console.log(friends.total);
};