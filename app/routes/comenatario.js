module.exports = function(app){
    var api = app.api.comentario;
    
    app.route('/v1/comentario')
        .post(api.adiciona)
        .get(api.lista);

/*
    app.route('/v1/fotos/:fotoId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);
*/


};