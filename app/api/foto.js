var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Foto');

api.lista = function(req, res){
    model.find(function(error, fotos){
        if(error){
            res.status(500).json(error);
        }
        res.json(fotos);
    });
    model
        .find({})
        .then(function(fotos){
            res.json(fotos);    
        },  function(error){
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function(req, res){
    model.findById(req.params.id)
        .then(function(foto) {
            if (!foto) throw new Error('Foto não encontrada');
            res.json(foto);
        }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};

api.removePorId = function(req, res){
    model.remove({'_id' : req.params.id})
        .then(function() {
            res.sendStatus(200);
        }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};

api.adiciona = function(req, res){
    model.create(req.body)
        .then(function(foto) {
            res.json(foto);
        }, function(error) {
            console.log(error);
            res.sendStatus(500);
    });
};

api.atualiza = function(req, res){
    model.findByIdAndUpdate(req.params.id, req.body)
        .then(function(foto) {
            res.json(foto);
        }, function(error) {
            console.log(error);
            res.sendStatus(500);
    });
};

module.exports = api;