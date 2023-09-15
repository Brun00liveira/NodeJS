const fs = require('fs');

fs.readFile('lendo.txt','utf8', (err,data)=>{
    if(err){
        return console.log('Erro na leitura do código');

    }
    console.log(data);
});