var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Escola');

api.lista = function(req, res){
    model.find(function(error, escolas){
        if(error){
            res.status(500).json(error);
        }
            res.json(escolas);
    });
    /*model
        .find({})
        .then(function(escolas){
            res.json(escolas);    
        },  function(error){
            console.log(error);
            res.status(500).json(error);
        });*/
};

module.exports = api;