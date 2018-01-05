var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");
var Client = require('node-rest-client').Client;

function transfereConta(contexto) {
    contexto.dataSet.save(getTransfer(contexto.evento.payload), "Transfer");
    contexto.dataSet.save(updateOriginAccount(contexto.evento.payload), "Transfer");
    contexto.dataSet.save(updateDestinationAccount(contexto.evento.payload), "Transfer");

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.transfer_confirmation;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getTransfer(payload) {
    return '[{ "contaOrigem":"' + payload.operacao.contaOrigem.id + 
    '","contaDestino":"' + payload.operacao.contaDestino.id +
    '","valorTransferencia":' + payload.operacao.valorTransferencia +  
    ',"tipoOperacao":"transfer"' + 
    ', "_metadata": { "type": "transferencia", "changeTrack": "create" } }]';
}

function updateOriginAccount(payload) { 
    const contaOrigem = payload.operacao.contaOrigem;

    contaOrigem.saldo = contaOrigem.saldo - payload.operacao.valorTransferencia; 
    return '[{"id":"' + contaOrigem.id + 
                '","saldo":"' + contaOrigem.saldo + 
                        '", "_metadata": { "type": "conta", "changeTrack": "update" } }]';
}

function updateDestinationAccount(payload) { 
    const contaDestino = payload.operacao.contaDestino;
    contaDestino.saldo = contaDestino.saldo + payload.operacao.valorTransferencia; 
    return '[{"id":"' + contaDestino.id + 
                '","saldo":"' + contaDestino.saldo + 
                        '", "_metadata": { "type": "conta", "changeTrack": "update" } }]';
}
module.exports.transfereConta = transfereConta