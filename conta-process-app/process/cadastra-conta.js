var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereConta(contexto) {
    //FIXME Criar classe Cliente
    contexto.dataSet.save(getClient(contexto.evento.payload), "Client");
    console.log(contexto.evento.payload);

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.account_saved;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getClient(account) {
    return '[{ "saldo":' + account.saldo + ', "_metadata": { "type": "conta", "changeTrack": "create" } }]';
}


module.exports.insereConta = insereConta