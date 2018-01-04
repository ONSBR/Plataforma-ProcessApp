var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereConta(contexto) {
    contexto.dataSet.save(getAccount(contexto.evento.payload), "Client");
    console.log(contexto.evento.payload);

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.account_saved;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getAccount(account) {
    return '[{"saldo":' + account.saldo + 
            ',"titular":"' + account.titular + 
            '", "_metadata": { "type": "conta", "changeTrack": "create" } }]';
}

module.exports.insereConta = insereConta