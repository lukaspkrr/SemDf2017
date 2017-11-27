var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Formulario');

api.adiciona = function(req, res){
    model.create(req.body)
        .then(function(formulario) {
            res.json(formulario);
        }, function(error) {
            console.log(error);
            res.sendStatus(500);
    });
};

api.lista = function(req, res){
    model.find(function(error, formularios){
        if(error){
            res.status(500).json(error);
        }
        res.json(formularios);
    });
    model
        .find({})
        .then(function(formularios){
            res.json(formularios);    
        },  function(error){
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function(req, res){
    model.findById(req.params.id)
        .then(function(formulario) {
            if (!formulario) throw new Error('Formulario não encontrada');
            res.json(formulario);
        }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};



module.exports = api;




/*api.removePorId = function(req, res){
    model.remove({'_id' : req.params.id})
        .then(function() {
            res.sendStatus(200);
        }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};
api.atualiza = function(req, res){
    model.findByIdAndUpdate(req.params.id, req.body)
        .then(function(formulario) {
            res.json(formulario);
        }, function(error) {
            console.log(error);
            res.sendStatus(500);
    });
};*/