//import of express webapp
const express = require("express");
//creation of express object called app which is able to handle HTTP requests
const app = express();

//app object acknowledging server hosted on http://localhost:3000
app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//import of routes
const view = require("./routes/view.js");
app.use('/view', view);

const add = require("./routes/add.js");
app.use('/add', add);