var Evento = require("../../../Plataforma-core/Evento");
var EventCatalog = require("../../../Plataforma-ProcessApp/conta-process-app/metadados/EventCatalog");

function insereConta(contexto) {
    
    console.log(contexto);
    contexto.dataSet.save(contexto.evento.payload);

    contexto.eventoSaida = new Evento(
        EventCatalog.account_saved, 
        contexto.evento.processName, 
        contexto.instancia, null, 
        contexto.evento.payload, 
        contexto.evento.origem
    );
}

module.exports.insereConta = insereConta