var friends = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.get("api/friends/:friend", function(req, res) {
        var chosen = req.params.friend;
      
        console.log(chosen);
      
        for (var i = 0; i < friends.length; i++) {
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

    friendsArray.push(newFriend);

    res.json(newFriend);

});



}