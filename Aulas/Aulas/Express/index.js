//ele busca o express e execulta

const express = require('express');

const app = express();

//get é a chamada da requisição
//req é a requisição feita
//res é a resposta feita(no nosso caso queremos exibir uma imagem)

//criar um rota index do tipo get na raiz do projeto
app.get('/', function (req, res){
    res.send('Página inicial do site');
})
//criar um rota sobre-nos do tipo get na raiz do projeto
app.get('/Sobre-nos', function (req, res){
    res.send('Página sobre o site');
})
//criar um rota contato do tipo get na raiz do projeto
app.get('/contato', function (req, res){
    res.send('Página sobre contato do site');
})
// existem 2 formas de utilizar a função nesse exemplo e nesse vou utilizar a arrow function
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 : http://localhost:8080')
});