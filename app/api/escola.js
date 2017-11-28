var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Escola');

api.lista = function(req, res){
    model.find(function(error, escolas){
        if(error){
            res.status(500).json(error);
        }else{
            res.json(escolas);
        }
    });
    model
        .find({})
        .then(function(escolas){
            res.json(escolas);    
        },  function(error){
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function(req, res){
    model.findById(req.params.id)
        .then(function(escola) {
            if (!escola) throw new Error('Escola não encontrada');
            res.json(escola);
        }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};

api.adiciona = function(req, res){
    model.create(req.body)
        .then(function(escola) {
            res.json(escola);
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
        .then(function(escola) {
            res.json(escola);
        }, function(error) {
            console.log(error);
            res.sendStatus(500);
    });
};*/