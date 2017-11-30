var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome_responsavel: {
        type: String,
        required: true
    },
    num_rg_reponsavel: {
        type: String,
        required: true
    },
    org_expedicao: {
        type: String,
        required: true
    },
    cpf_responsavel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    }
});

mongoose.model('Usuario', schema);