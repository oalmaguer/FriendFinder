var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("../FriendFinder/app/routes/apiRoutes")(app);
require("../FriendFinder/app/routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App on http://localhost:" +PORT);
})