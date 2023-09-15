const fs = require('fs');

fs.writeFile('lendo.txt', 'Li esse texto utilizando o writeRead', (err) => {
    if(err){
        return console.log('Erro ao criar o arquivo!')
    }
    console.log('Sucesso ao criar o arquivo!')
});