var mongoose = require('mongoose');

var schema = mongoose.Schema({
    nome_estudante: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    cpf_estudante: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    rg_estudante: {
        type: Number,
        required: true
    },
    org_expedicao: {
        type: String,
        required: true
    },
    deficiencia: {
        type: String,
        required: true
    },
    tipo_deficiencia: {
        type: String,
        required: true
    },
    nome_mae: {
        type: String,
        required: true
    },
    nome_pai: {
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
    },
    cep: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: true
    },
    modalidade: {
        type: String,
        required: true
    }
});

mongoose.model('Formulario', schema);