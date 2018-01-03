var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereCliente(contexto) {
    contexto.dataSet.save(getClient(contexto.evento.payload), "Client");

    contexto.eventoSaida = new Evento(
        EventCatalog.account_saved, 
        contexto.evento.processName,
        new Date(), 
        contexto.instancia, null, 
        contexto.evento.payload, 
        contexto.evento.origem
    );
}

function getClient(cliente) {
    return '[{ "nome":' + cliente.titular + ', "_metadata": { "type": "cliente", "changeTrack": "create" } }]';
}

module.exports.insereCliente = insereCliente