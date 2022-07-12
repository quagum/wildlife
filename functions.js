const mysql = require('mysql')

function getInformation(){
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Turtle415_",
        database:"wildlife"
        });
    con.connect(function(err){
        if(err){
            throw err;
        }
        console.log('CONNECTED TO MYSQL DB')
        con.query("SELECT * FROM animals;", function(err, result, fields){
            if(err){
                throw err;
            }
            console.log(result[0].ID); //result is an array of object named RowDataPacket 
            return result[0].ID;
        });
    });
}

function addInformation(ID, Sex){
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Turtle415_",
        database:"wildlife"
        });
    con.connect(function(err){
        if(err){
            throw err;
        }
        console.log('CONNECTED TO MYSQL DB');
        var statement = "INSERT INTO animals(ID, Sex) VALUES(?,?)";
        var input = [ID, Sex]; 

        con.query(statement, input, function(err, result, fields){
            if(err){
                throw err;
            } 
            console.log(result); 
        });
    });
}

module.exports = {getInformation, addInformation};






