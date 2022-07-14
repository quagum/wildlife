const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Turtle415_",
    database:"wildlife"
});
con.connect(function(err){
    if(err){
        console.error("Connection Failed" + err.stack)
    }
    else{
        console.log("Connection with mySQL Established")
    }
})

function getInformation(){
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

function addInformation(ID, Sex){
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






