var express = require("express");
var path = require("path");

app.get("/api/friends", function(req, res) {
    return res.json(friends);
})

app.post("/api/friends", function (req,res) {

    var newFriend = req.body;


})