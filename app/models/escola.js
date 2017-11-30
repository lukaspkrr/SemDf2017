var mongoose = require('mongoose');

var schema = mongoose.Schema({
  comentario: {
        type: String,
        required: true
    }
});

mongoose.model('Escola', schema);