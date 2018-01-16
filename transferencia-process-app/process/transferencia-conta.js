var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");
var Transferencia = require("./Transferencia");
var Conta = require("./Conta");
 
function transfereConta(contexto) {
    
    var dataSet = contexto.dataSet;

    var operacao = contexto.evento.payload.operacao;
    var contaOrigem = dataSet.queryable(Conta.name).first(function(ct) { return ct.id == operacao.contaOrigem.id; });
    var contaDestino = dataSet.queryable(Conta.name).first(function(ct) { return ct.id == operacao.contaDestino.id; });
    
    contaOrigem.saldo -= operacao.valorTransferencia;
    contaDestino.saldo += operacao.valorTransferencia;

    var transferencia = new Transferencia(contaOrigem, contaDestino, operacao.valorTransferencia);

    // TODO verificar porque no update  está obrigatório o tipo
    dataSet.insert(transferencia, Transferencia.name);
    dataSet.update(contaOrigem, Conta.name);
    dataSet.update(contaDestino, Conta.name);

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.transfer_confirmation;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

module.exports.transfereConta = transfereConta