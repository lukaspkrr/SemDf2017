module.exports = function(app){
    var api = app.api.auth;
    
    app.post('/autenticar', api.autentica);
    /*app.use('/*', api.verificaToken);*/
    
    
    app.use('/*', function(req, res){
        res.render('index', function(erro, html){
            res.send(html);
        });
    })
};