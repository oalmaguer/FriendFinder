var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

friendsArray = [

    {
        name: "ahmed", 
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            5,
            1,
            4,
            4,
        ]
    },
    
    {
        name: "juan", 
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            2,
            1,
            9,
            2,
        ]
    },

    {
        name: "jacob", 
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            1,
            1,
            3,
            9,
        ]
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
})


app.get("/api/survey", function (req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.get("/api/friends", function (req, res){
    return res.json(friendsArray);
});

app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friend;

    for (var i=0;i<friendsArray.length;i++) {
        if(chosen == friendsArray[i].name) {
            return res.json(friendsArray[i]);
        }
    }

    return res.json(false);
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
})

app.post("/api/friends", function(req,res) {

    var newFriend = req.body;

    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

    newFriend.scores = newFriend.scores.map(Number);

    console.log(newFriend);

    friendsArray.push(newFriend);

    res.json(newFriend);

})

    for (var i=0;i<friendsArray.length;i++) {
        for (var y=0;y<friendsArray.length;y++) {
        console.log(friendsArray[i].scores[y]);

    }
}

   


app.listen(PORT, function() {
    console.log("App on http://localhost:" +PORT);
})