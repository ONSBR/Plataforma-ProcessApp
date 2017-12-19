var Evento = require("../../../Plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function insereConta(contexto) {
    
    console.log("Contexto = " + contexto);
    contexto.dataSet.save(getClient(contexto.evento.payload), Client.name);
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

function getClient(clientName) {
    return [{ "nome": clientName, "_metadata": { type: "cliente", changeTrack: "create" } }];
}


module.exports.insereConta = insereConta