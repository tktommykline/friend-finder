var friends = { 
    name: Bill,
    scores: [
        7,
        9,
        1
    ],
    total,

    name: Jim,
    scores: [
        9,
        1,
        7
    ],
    total,

    name: Bob,
    scores: [
        1,
        7,
        9
    ],
    total
};

friends.forEach(selector)

function selector(name, score) {
    var selection = Math.floor(Math.random() * 3);
    friends.total = friends.score[selection];
    console.log(friends.total);
};

console.log(friends);

module.exports = friends

