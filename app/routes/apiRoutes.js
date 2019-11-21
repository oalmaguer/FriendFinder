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

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);

    
    

    console.log("new friend array is " + newFriend.scores[0]);
    console.log("first array score is " + friends[0].scores[0]);

    var oliver = 0;
    var oliver2 = 0;
    var newArray = [];
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var total = 0;
    var total2 = 0;
    
    function compare(numberArray) {
    for (var i=0;i<newFriend.scores.length;i++) {
        oliver = newFriend.scores[i];
        oliver2 = friends[numberArray].scores[i];
        newArray.push(oliver);
        newArray.push(oliver2);

        if (newArray[0] > newArray[1]) {
          sum1 = newArray[0] - newArray[1];
        } else if (newArray[1] > newArray[0]) {
          sum1 = newArray[1] - newArray[0];
        }

        if (newArray[2] > newArray[3]) {
          sum2 = newArray[2] - newArray[3];
        } else if (newArray[3] > newArray[2]) {
          sum2 = newArray[3] - newArray[2];
        }

        if (newArray[4] > newArray[5]) {
          sum3 = newArray[4] - newArray[5];
        } else if (newArray[5] > newArray[4]) {
          sum3 = newArray[5] - newArray[4];
        }

        if (newArray[6] > newArray[7]) {
          sum4 = newArray[6] - newArray[7];
        } else if (newArray[7] > newArray[6]) {
          sum4 = newArray[7] - newArray[6];
        }
        total = sum1+sum2+sum3+sum4;
        

      }
    }

    compare(0);
    compare(1);
    compare(2);


     console.log("total is " + total);
      console.log(newArray);




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