var api = {};

api.lista = function(req, res){
    var grupos = [
        {_id: 1, nome: 'esportes' , teste:"teste1", nomeEscola :'teste1'},
        {_id: 2, nome: 'lugares', teste:"teste2",nomeEscola :'teste1'},
        {_id: 3, nome: 'desejos', teste:"teste3",nomeEscola :'teste1'},
        {_id: 4, nome: 'legais', teste:"teste4",nomeEscola :'teste1'},
        {_id: 5, nome: 'testes', teste:"teste5",nomeEscola :'teste1'},
        {_id: 6, nome: 'testes', teste:"teste5",nomeEscola :'teste1'},
        {_id: 7, nome: 'testes', teste:"teste7",nomeEscola :'teste1'},
        {_id: 8, nome: 'legais', teste:"teste8",nomeEscola :'teste1'},
        {_id: 9, nome: 'animais', teste:"teste9",nomeEscola :'teste1'}
    ];
    res.json(grupos);
};

module.exports = api;