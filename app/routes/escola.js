module.exports = function(app){
    var api = app.api.escola;
    
    app.route('/v1/escolas')
        .get(api.lista);



};