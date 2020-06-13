const Sequelize = require('sequelize');
const sequelise = new Sequelize('teste','root','car12345',{
    host: "localhost",
    dialect: 'mysql',
})

const Postagem = sequelise.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Postagem.sync({force: true}); 
/*Utilizado para Sincronizar com o banco de dados e criar a tabela*/

const Usuarios = sequelise.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})
//Usuarios.sync({force: true});
Usuarios.create({
    nome: "Carlos Eduardo",
    sobrenome: "Amorim",
    idade: 19,
    email: "mail@mail.com"
})

/*sequelise.authenticate().then(function(){
    console.log("Conectado com Sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
})*/