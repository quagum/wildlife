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
        con.query("SELECT ID FROM animals;", function(err, result, fields){
            if(err){
                return err;
            }
            else{
                var data = [result.length];
                for(var index in result){ 
                    data[index] = result[index].ID; //result is an array of object named RowDataPacket 
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
        con.query(query, function(err, result, fields){
            if(err){
                return err;
            }
            else{
                const jsonData = JSON.parse(JSON.stringify(result));
                resolve(jsonData)
            }
        });
    });
}
//queries for all biography information available to specific inputted animalID
function getBiography(ID){
    return new Promise(function(resolve){
        query = "SELECT biography.Text_path, biography.Video_path FROM animals INNER JOIN biography ON animals.ID=biography.ID WHERE animals.ID=\"" + ID +"\"";
        con.query(query, function(err, result, fields){
            if(err){
                return err;
            }
            else{
                const jsonData = JSON.parse(JSON.stringify(result));
                resolve(jsonData)
            }
        });
    });
}
//adds information to database given input animalID and sex
function addInformation(ID, Sex){
    var statement = "INSERT INTO animals(ID, Sex) VALUES(?,?)";
    var input = [ID, Sex]; 

    con.query(statement, input, 
    function(err, result, fields){
        if(err){
            throw err;
        } 
        else{
            console.log("Input into animals table succesfull"); 
        }
    });
}
//exports functions to be used in other files
module.exports = {getIDs, addInformation, getGPS, getBiography};






