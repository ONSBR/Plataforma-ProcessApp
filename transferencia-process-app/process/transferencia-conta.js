var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");
var Client = require('node-rest-client').Client;
var Transferencia = require("./Transferencia");
var Conta = require("./Conta");

function transfereConta(contexto) {
    contexto.dataSet.save(getTransferencia(contexto.evento.payload), Transferencia.name);
    contexto.dataSet.update(getOriginAccount(contexto.evento.payload), Conta.name);
    contexto.dataSet.update(getDestinationAccount(contexto.evento.payload), Conta.name);

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.transfer_confirmation;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getTransferencia(payload) {
    return new Transferencia(payload.operacao.contaOrigem,
        payload.operacao.contaDestino, payload.operacao.valorTransferencia);
}

function getOriginAccount(payload) {
    const contaOrigem = payload.operacao.contaOrigem;
    contaOrigem.saldo = contaOrigem.saldo - payload.operacao.valorTransferencia;
    return new Conta(contaOrigem.id, contaOrigem.saldo);
}

function getDestinationAccount(payload) {
    const contaDestino = payload.operacao.contaDestino;
    contaDestino.saldo = contaDestino.saldo + payload.operacao.valorTransferencia;
    return new Conta(contaDestino.id, contaDestino.saldo);
}

module.exports.transfereConta = transfereConta