var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Escola');

api.adiciona = function(req, res) {
    db.insert(req.body, function(err, escolas) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + escolas._id);
        res.json(escolas._id);
    });
};

/*
api.busca = function(req, res) {
   db.findOne({_id: req.params.fotoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

*/

api.lista = function(req, res) {
    db.find({}).sort({comentario: 1}).exec(function(err, escolas) {
        if (err) return console.log(err);
        res.json(escolas);
    });
};

/*
api.remove = function(req, res) {

    db.remove({ _id: req.params.fotoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};
*/

module.exports = api;
