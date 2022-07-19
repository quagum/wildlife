const mysql = require('mysql')
const config = require('./config.js')
const con = mysql.createConnection(config.db);

con.connect(function(err){
    if(err){
        console.error("Connection Failed")
    }
    else{
        console.log("Connection with mySQL Established")
    }
})

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

function getGPS(ID){
    return new Promise(function(resolve){
        query = "SELECT gps.Latitude, gps.Longitude, gps.DateTime FROM animals INNER JOIN gps ON animals.ID=gps.ID WHERE animals.ID=\"" + ID +"\"";
        con.query(query, function(err, result, fields){
            if(err){
                return err;
            }
            else{
                resolve(result); 
            }
        });
    });
}

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

module.exports = {getIDs, addInformation, getGPS};






