var mongoose = require('mongoose');

var schema = mongoose.Schema({
    bairro: {
        type: String,
        required: true
    },
    modalidade: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});

mongoose.model('Escola', schema);