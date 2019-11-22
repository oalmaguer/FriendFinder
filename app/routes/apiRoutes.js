var friends = require("../data/friends");
var nofriends = require("../data/nofriends");
var express = require("express");


module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.get("/api/nofriends", function(req, res) {
    return res.json(nofriends);
});



app.get("/api/friends/:friend", function(req, res) {
        var chosen = req.params.friend;
    
        for (var i=0; i<friends.length; i++) {
          if (chosen === friends[i].name) {
            return res.json(friends[i]);
          }
        }
      
        return res.json(false);
      });

app.post("/api/friends", function(req,res) {

    var newFriend = req.body;

    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

    newFriend.scores = newFriend.scores.map(Number);

    friends.push(newFriend);
    

    res.json(newFriend);

        var total = 0;
        var total2 = 0;
        var total3 = 0;
        var bestFriend = [];

    for (var i=0;i<friends.length;i++) {
        if (friends[0].scores[i] > newFriend.scores[i]) {
            total += friends[0].scores[i] - newFriend.scores[i];
            
        } else if (friends[0].scores[i] < newFriend.scores[i]) {
            total += newFriend.scores[i] - friends[0].scores[i] 
            
        }
    }
    console.log("1 "+total);
    
    for (var i=0;i<friends.length;i++) {
    if (friends[1].scores[i] > newFriend.scores[i]) {
        total2 += friends[1].scores[i] - newFriend.scores[i];
       
    } else if (friends[1].scores[i] < newFriend.scores[i]) {
        total2 += newFriend.scores[i] - friends[1].scores[i] 
       
    }
}
console.log("2 "+total2);

for (var i=0;i<friends.length;i++) {
    if (friends[2].scores[i] > newFriend.scores[i]) {
        total3 += friends[2].scores[i] - newFriend.scores[i];
       
    } else if (friends[2].scores[i] < newFriend.scores[i]){
        total3 += newFriend.scores[i] - friends[2].scores[i] 
       
    }
}
console.log("3 "+total3);

bestFriend.push(total, total2, total3);


var min = Math.min.apply(Math, bestFriend);
console.log(`Min num is ${min}`);

    if (min == total) {
        var bff = {name: `${friends[0].name}`,
                   photo: `${friends[0].photo}`}
    } else if (min == total2) {
        var bff = {name: `${friends[1].name}`,
                    photo: `${friends[1].photo}`}
    } else if (min == total3) {
        var bff = {name: `${friends[2].name}`,
                     photo: `${friends[2].photo}`}
    }
nofriends.push(bff);
console.log(bff);

});




}