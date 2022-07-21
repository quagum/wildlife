//import of express webapp, middleware functions
const express = require("express");
const router = express.Router();
const func = require("../functions.js");
const app = express();
const path = require("path")
//import and setup of ejs viewer
const bodyParser = require('body-parser')
app.use("/view", express.static(__dirname + '/view'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', __dirname + '/')

//routes 
//listening for /view HTTP request which serves ejs file of displaying available animalIDs
router.get("/", async function(req, res){
    viewEJS = path.join(__dirname, '..', 'pages', 'view.ejs')
    const data = await func.getIDs();
    res.render(viewEJS, {data: data});
});
//listening for /view/:animalID HTTP request which stores the input ID after /view/ as a string and uses
//that ID to query the mySQL database for a specific animals' GPS history
//returns data in JSON format 
router.get("/:animalID", async function(req, res){
    ID = String(req.params.animalID)
    const data = await func.getGPS(ID);
    res.json(data)
});

module.exports = router