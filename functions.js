const mysql = require('mysql')

function getInformation(callback){
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Turtle415_",
        database:"wildlife"
        });
    con.connect(
        function(err){
            if(err){
                throw err;
            }
            console.log('CONNECTED TO MYSQL DB')
            con.query("SELECT ID FROM animals;", 
                function(err, result, fields){
                    if(err){
                        throw err;
                    }
                    var data = [result.length]
                    for(var index in result){ //data is the index of each element in array 'result' 
                        data[index] = result[index].ID; //result is an array of object named RowDataPacket 
                    }
                    console.log(data);
                    return data; 
                }
            );
        }
    );
}

function addInformation(ID, Sex){
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Turtle415_",
        database:"wildlife"
        });
    con.connect(
        function(err){
            if(err){
                throw err;
            }
            console.log('CONNECTED TO MYSQL DB');
            var statement = "INSERT INTO animals(ID, Sex) VALUES(?,?)";
            var input = [ID, Sex]; 

            con.query(statement, input, 
                function(err, result, fields){
                    if(err){
                        throw err;
                    } 
                    console.log(result); 
                }
            );
        }
    );
}

module.exports = {getInformation, addInformation};






