const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const func = require("../functions.js");

router.get('/', async function(req, res){
    var data = await func.getIDs();
    var jsonData = JSON.parse(JSON.stringify(data));
    res.json(jsonData);
})

router.get('/:animalID', async function(req, res){
    var animalID = req.params.animalID;
    var data = await func.getGPS(animalID);
    var jsonData = JSON.parse(JSON.stringify(data));
    res.json(jsonData);
})

router.post('/:animalID/:sex', async function(req, res){
    var animalID = req.params.animalID;
    var sex = req.params.sex;
    await func.postInformation(animalID, sex);
})

router.delete('/:animalID', async function(req, res){
    var animalID = req.params.animalID;
    await func.delID(animalID); 
})

module.exports = router 