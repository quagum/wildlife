const express = require("express");

const app = express();

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/view.html", function(req, res){
    res.sendFile(__dirname + "/view.html")
})

app.get("/submission.html", function(req, res){
    res.sendFile(__dirname + "/submission.html")
})