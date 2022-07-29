const express = require("express");
const app = express();

app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
});

//default route 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//import and setup of routes
app.use('/view', require("./routes/view.js"));

app.use('/animals', require("./routes/animals.js")); 