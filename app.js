const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Postagem');
//Config
    //Templete Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//Rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home',{posts: posts})
        })
    })
    app.get('/cadastro', function(req, res){
        res.render('formulario')
    })
    app.post('/sendForm', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: "+erro);
        });
        //res.send("Titulo: "+req.body.titulo+" Conteúdo: "+req.body.conteudo);
    })

    app.get('/delete/:id', function(req, res){
        Post.destroy({
            where: {
                'id': req.params.id
            }
        }).then(function(){
            res.redirect('/')
            //res.send("Post apagado com sucesso!!!");
        }).catch(function(erro){
            res.send("Ocorreu algum erro: "+erro);
        })
    })
    

//ligando o servidor http
app.listen(3344, function(req, res){
    console.log("O servidor rodando em http://localhost:3344");
})


