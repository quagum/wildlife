//imports mysql package and config
const mysql = require('mysql')
const config = require('./config.js')
//creates con object using config.js information
const con = mysql.createConnection(config.db);
//connects to mySQL using con object
con.connect(function(err){
    if(err){
        console.error("Connection Failed")
    }
    else{
        console.log("Connection with mySQL Established")
    }
})

//queries for all animal IDs
function getIDs(){
    return new Promise(function(resolve){
        con.query("SELECT ID FROM animals;", function(err, res, fields){
            if(err){
                res.status(500).send("getIDs failed");
            }
            else{
                var data = [res.length];
                for(var index in res){ 
                    data[index] = res[index].ID; //result is an array of object named RowDataPacket 
                }
                resolve(data); 
            }
        });
    });
}
//queries for all lat, long, dateTime available specific to inputted animalID
function getGPS(ID){
    return new Promise(function(resolve){
        query = "SELECT gps.Latitude, gps.Longitude, gps.DateTime FROM animals INNER JOIN gps ON animals.ID=gps.ID WHERE animals.ID=\"" + ID +"\"";
        con.query(query, function(err, res, fields){
            if(err){
                res.status(500).send("getGPS failed");
            }
            else{
                const jsonData = JSON.parse(JSON.stringify(res));
                resolve(jsonData)
            }
        });
    });
}
//queries for all biography information available to specific inputted animalID
function getBiography(ID){
    return new Promise(function(resolve){
        query = "SELECT biography.Text_path, biography.Video_path FROM animals INNER JOIN biography ON animals.ID=biography.ID WHERE animals.ID=\"" + ID +"\"";
        con.query(query, function(err, res, fields){
            if(err){
                res.status(500).send("getBiography failed");
            }
            else{
                const jsonData = JSON.parse(JSON.stringify(result));
                resolve(jsonData)
            }
        });
    });
}
//adds information to database given input animalID and sex
function postInformation(ID, Sex){
    var query = "INSERT INTO animals(ID, Sex) VALUES(?,?)";
    var params = [ID, Sex]; 

    con.query(query, params, 
    function(err, res, fields){
        if(err){
            res.status(500).send("addInformation failed");
        } 
        else{
            console.log("Input into animals table succesfull"); 
        }
    });
}
//exports functions to be used in other files
module.exports = {getIDs, getGPS, getBiography, postInformation};






