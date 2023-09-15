//incluir a dependencia

const mysql = require('mysql2');

//criar a conexão com banco de dados MySQL

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce',
    password: ''
})

connection.connect( function(err) {
    console.log('Conexão do banco de dados realizada com sucesso');
})

connection.query("SELECT * FROM users", function(err, rows, fields){
    if(!err){
        console.log("Resultado", rows);
    }else{
        onsole.log('Conexão do banco de dados não foi realizada com sucesso');
    }
})