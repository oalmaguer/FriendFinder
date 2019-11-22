var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App on http://localhost:" +PORT);
})