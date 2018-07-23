var path = require('path');
var friends = require('../data/friends.js');
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;
        var matchName;
        var matchPhoto;
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }
        friends.push(userInput);
        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });
    });
};