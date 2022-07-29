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

//default "view" route serves EJS file of all available IDs in animals table
router.get("/", async function(req, res){
    viewEJS = path.join(__dirname, '..', 'pages', 'view.ejs')
    const data = await func.getIDs();
    res.render(viewEJS, {data: data});
});

//attempts to send submitted file (NO MIDDELWARE IS BUILT TO PROCESS YET)
router.get("/add", function(req, res){
    submissionHTML = path.join(__dirname, '..', 'pages', 'submission.html')
    res.sendFile(submissionHTML);
});

module.exports = router