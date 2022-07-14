const express = require("express");
const func = require("./functions.js");

const app = express();

var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', __dirname)

app.listen(3000, 
    function(){
        console.log("Server is running on localhost3000");
    }
);

app.get("/", 
    function(req, res){
        res.sendFile(__dirname + "/index.html");
    }
);

app.get("/view", 
    function(req, res){
        //res.sendFile(__dirname + "/view.html");
        data = func.getInformation();
        console.log(data)
        res.render('view.ejs', {data: data});
    }
);

app.get("/submission", 
    function(req, res){
        res.sendFile(__dirname + "/submission.html");
        func.addInformation("CCCCC", "Male"); 
    }  
);
