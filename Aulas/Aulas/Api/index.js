const express = require('express');

const app = express()
// chamar a model

const db = require("./Database/models")
// cria um middleware para tratar o objeto da api
app.use(express.json())

//chamar o controller

const controller = require('./Controllers/usersController');

app.use('/', controller);

app.listen(8080, () => {console.log("Servidor : http://localhost:8080")});