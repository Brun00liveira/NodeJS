const fs = require('fs');

fs.rename('criando.txt', 'create.txt', (err) => {
    if(err){
        return console.log('Erro ao renomear o arquivo');
    }
    console.log('Renomear o arquivo');
});