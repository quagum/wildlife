const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Turtle415_",
    database:"wildlife"
    });

function getInformation(){
    var str = document.getElementById("searchText").value;
    alert("value inside the text box is: " + str);
}

con.connect(function(err){
    if(err) throw err;
    console.log('CONNECTED')
    con.query("SELECT * FROM animals;", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});





