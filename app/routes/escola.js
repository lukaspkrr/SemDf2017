module.exports = function(app){
    var api = app.api.escola;
    
    app.route('/v1/escolas')
        .get(api.lista);
//        .post(api.adiciona);

    app.route('/v1/escolas/:id')
        .get(api.buscaPorId);
//        .delete(api.removePorId)
//        .put(api.atualiza)

};