1° aula

Hello Word, Modules

2° autla

Routes, Express.js

### npm init
instalar o package.json
### npm install --save express
Gerenciar as requisições, rotas e URL's entre outras funcionalidades

3° Aula
Nodemon é um modulo capaz de dar refresh na pagina quando houver uma alteração
E o nodemon será instalado globalmente no caminho do seu sistema.

### npm install -g nodemon 

4° Aula 

Conexão com o banco de dados

### npm install --save mysql2

5° Aula 

sequelize , facilitador de gerenciamento de banco de dados

### npm install --save sequelize

após instalar o sequelize rodar a conexão com o banco dedados

### npm install --save mysql2

Sequilize-CLI interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados

### npm install --save-dev sequelize-cli

iniciar o sequilize-cli e criar o arquivo config

### npx sequelize-cli init

aula 7

instalar biblioteca de variavel globais ".env"

### npm install --save dotenv

aula 8

-- criar migration.

-- criar um arquivo chamado .sequelizerc

Criar migration

### npx sequelize-cli migration:generate --name create-product

Execultar as migrations

### npx sequelize-cli db:migrate

Aula 9

Alter table

### npx sequelize-cli migration:generate --name alter-users

aula 10

rolback table
### npx sequelize-cli db:migrate:undo --name nome-da-migration

aula 11

criação de model

### npx sequelize-cli model:generate --name Users --attributes name:string,email:string,imagem:string

