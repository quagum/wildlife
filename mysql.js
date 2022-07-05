function fn1(){
    var str = document.getElementById("text1").value;
    alert("value inside the text box is: " + str);
}




const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Turtle415_",
    database:"wildlife"
    });

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT*FROM ")
})

