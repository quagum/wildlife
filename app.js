//import of express webapp and middleware functions
const express = require("express");
const func = require("./functions.js");
//creation of express object called app which is able to handle HTTP requests
const app = express();
//import and setup of ejs viewer
const bodyParser = require('body-parser')
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', __dirname)


//app object acknowledging server hosted on localhost3000
app.listen(3000, function(){
    console.log("Server is running on localhost3000");
});

//routes 
//listening for / HTTP request which lead to app serving the main page "index.html"
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
//listening for /view HTTP request which will lead to the app serving "view.ejs" which will change accordingly to mySQL queried data
app.get("/view", async function(req, res){
    //res.sendFile(__dirname + "/view.html");
    const data = await func.getIDs();
    res.render('view.ejs', {data: data});
});
//listening for /view/:animalID HTTP request which stores the input ID after /view/ as a string and uses
//that ID to query the mySQL database for a specific animals' GPS history
//returns data in JSON format 
app.get("/view/:animalID", async function(req, res){
    ID = String(req.params.animalID)
    const data = await func.getGPS(ID);
    console.log(data);
    return data
});
//listening for /submission HTTP request which will call the .addInformation middlware which inputs hardcoded data into mySQL database
app.get("/submission", function(req, res){
    res.sendFile(__dirname + "/submission.html");
    func.addInformation("GGGGG", "Female"); 
});
