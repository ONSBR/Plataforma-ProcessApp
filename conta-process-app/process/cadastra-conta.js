var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereConta(contexto) {
    //FIXME Criar classe Cliente
    contexto.dataSet.save(getAccount(contexto.evento.payload), "Client");
    console.log(contexto.evento.payload);

    contexto.eventoSaida = new Evento(
        EventCatalog.account_saved, 
        contexto.evento.processName,
        new Date(), 
        contexto.instancia, null, 
        contexto.evento.payload, 
        contexto.evento.origem
    );
}

function getAccount(account) {
    return '[{ "saldo":' + account.saldo + ', "_metadata": { "type": "conta", "changeTrack": "create" } }]';
}


module.exports.insereConta = insereConta