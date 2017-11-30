var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Usuario');

api.adiciona = function (req, res) {
    model.create(req.body)
        .then(function (usuarios) {
            res.json(usuarios);
        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });
};

api.lista = function (req, res) {
    model.find(function (error, usuarios) {
        if (error) {
            res.status(500).json(error);
        }
        res.json(usuarios);
    });
    model
        .find({})
        .then(function (usuarios) {
            res.json(usuarios);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};




module.exports = api;


/*
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
*/