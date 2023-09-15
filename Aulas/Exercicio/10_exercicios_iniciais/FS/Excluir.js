const fs = require('fs');

fs.unlink('lendo.txt', (err)=>{
    if(err){
        return console.log('Erro na leitura do código');

    }
    console.log('Arquivo de texto excluido');
});