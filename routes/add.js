const express = require("express");
const router = express.Router();
const path = require("path")

const func = require("../functions.js");

router.get("/", function(req, res){
    submissionHTML = path.join(__dirname, '..', 'pages', 'submission.html')
    res.sendFile(submissionHTML);
    //func.addInformation("GGGGG", "Female"); 
});

module.exports = router 