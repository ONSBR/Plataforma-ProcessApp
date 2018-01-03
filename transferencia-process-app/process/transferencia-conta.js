var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");

function transfereConta(contexto) {
    
    var contaOrigem = contexto.evento.payload.contaOrigem;
    var contaDestino = contexto.evento.payload.contaDestino;
    var valorTransferencia = contexto.evento.payload.operacao.valorTransferencia;
    
    contaOrigem.saldo = contaOrigem.saldo - valorTransferencia;
    contaDestino.saldo = contaDestino.saldo + valorTransferencia
    
    contexto.evento.payload.contaOrigem = contaOrigem;
    contexto.evento.payload.contaDestino = contaDestino;

    contexto.dataSet.save(getTransfer(contexto.evento.payload), "Transfer");
    console.log(contexto.evento.payload);

    contexto.eventoSaida = new Evento(
        EventCatalog.transfer_confirmation, 
        contexto.evento.processName,
        new Date(), 
        contexto.instancia, null, 
        contexto.evento.payload, 
        contexto.evento.origem
    );
}

function getTransfer(transfer) {
    return '[{ "contaOrigem":' + transfer.contaOrigem + 
    '",contaDestino":' + transfer.contaDestino + 
    '",tipoOperacao":transfer' + 
    ', "_metadata": { "type": "transferencia", "changeTrack": "create" } }]';
}


module.exports.transfereConta = transfereConta