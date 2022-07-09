const express = require("express");
const func = require("./functions.js");

const app = express();

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/view", function(req, res){
    res.sendFile(__dirname + "/view.html");
    document.getElementsByID("data").innerHTML = func.getInformation();
})

app.get("/submission", function(req, res){
    res.sendFile(__dirname + "/submission.html");
})
