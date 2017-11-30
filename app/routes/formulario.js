module.exports = function(app){
    var api = app.api.formulario;
    
      app.route('/v1/formularios')
        .get(api.lista)
        .post(api.adiciona);

    app.route('/v1/formularios/:id')
        .get(api.buscaPorId);
};