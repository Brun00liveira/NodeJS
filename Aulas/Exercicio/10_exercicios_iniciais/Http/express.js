var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('HelloWorld');
});

app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8080 : http://localhost:8080');
});