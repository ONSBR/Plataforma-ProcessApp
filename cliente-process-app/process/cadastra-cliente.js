var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereCliente(contexto) {
    //FIXME Criar classe Cliente
    contexto.dataSet.save(getClient(contexto.evento.payload), "Client");
    console.log(contexto.evento.payload);

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.account_saved;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getClient(account) {
    return '[{ "nome":' + account.titular + ', "_metadata": { "type": "cliente", "changeTrack": "create" } }]';
}


module.exports.insereCliente = insereCliente