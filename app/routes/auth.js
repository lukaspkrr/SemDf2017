module.exports = function(app){
    var api = app.api.auth;
    
    app.post('/autenticar', api.autentica);
    /*app.use('/v1/*', api.verificaToken);*/
    
};