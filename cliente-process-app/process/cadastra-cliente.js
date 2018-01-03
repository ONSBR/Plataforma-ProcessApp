var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereCliente(contexto) {
    contexto.dataSet.save(getClient(contexto.evento.payload), "Client");

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.account_saved;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getClient(cliente) {
    return '[{ "nome":' + cliente.titular + ', "_metadata": { "type": "cliente", "changeTrack": "create" } }]';
}

module.exports.insereCliente = insereCliente