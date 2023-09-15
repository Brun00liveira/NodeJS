// Normatizar o codigo, evita gambiarras
'use strict';
//incluir o arquivo as variaveis de ambiente
require('dotenv').config()
// Permite trabalhar com sistema de arquivos do computador
const fs = require('fs');
// Permite trabalhar com caminhos e diretórios
const path = require('path');

const Sequelize = require('sequelize');
//Permite obter informações do processo na página atual
const process = require('process');
//Permite obter parte do caminho para o arquivo
const basename = path.basename(__filename);
// Verifica se deve utilizar variaveis de ambiente global ou development

const env = process.env.NODE_ENV;
// inclui o arquivo
const config = require(__dirname + '/../config/config.js')[env];
// cria uma variavel objeto vazio
const db = {};

// cria a variavel que recebe a conexao do banco de dados
let sequelize;
// verifica qual banco de dados vc deseja esta utilização
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//testar e verificar se foi conectado ao banco de dados

try{
  console.error("Msg: Conexão de dados realizada com sucesso!")
}catch(error){
  console.error("Erro: Conexão de dados não esta sendo realizada com sucesso" + error)
}
//identificar qual model sera utilizada
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// atribuir a conexão com banco de dados com o objeto vazio
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// exporta

module.exports = db;
