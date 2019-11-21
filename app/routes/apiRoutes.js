var friends = require("../data/friends");
var express = require("express");


module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    return res.json(friends);
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
        total += newFriend.scores[i] - friends[1].scores[i] 
    }
}
console.log("2 "+total2);

for (var i=0;i<friends.length;i++) {
    if (friends[2].scores[i] > newFriend.scores[i]) {
        total3 += friends[2].scores[i] - newFriend.scores[i];
    } else if (friends[2].scores[i] < newFriend.scores[i]){
        total += newFriend.scores[i] - friends[2].scores[i] 
    }
}
console.log("3 "+total3);

    




    // compare(newFriend, friends);

    // function compare (arr1, arr2) {
    //   var newArray = [];
    //   if (arr1.scores[0] > arr2[0].scores[0]) {
    //       arr1.scores[0] - arr2[0].scores[0];
    //       newArray.push(arr1);
    //   } else if (arr1.scores[0] < arr2[0].scores[0]) { 
    //       arr2[0].scores[0] - arr10.scores[0];
    //       newArray.push(arr2);
    //   }
    //   console.log(newArray);
    // }

    

  
  
});



}