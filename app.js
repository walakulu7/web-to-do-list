const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    // res.send("Hello");
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.send("<h1>Boo! I have to work!</h1>");
    }
});



app.listen(3000, function() {
    console.log("Server is running on port 3000");
});