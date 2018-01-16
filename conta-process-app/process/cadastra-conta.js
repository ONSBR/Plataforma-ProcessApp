var Evento = require("plataforma-core/Evento");
var EventCatalog = require("../metadados/EventCatalog");
var Conta = require("./Conta");

function insereConta(contexto) {
    
    contexto.dataSet.insert(getAccount(contexto.evento.payload), Conta.name);

    var eventoSaida = new Evento();
    eventoSaida.name = EventCatalog.account_saved;
    eventoSaida.payload = contexto.evento.payload;

    contexto.eventoSaida = eventoSaida;
}

function getAccount(account) {
    return new Conta(account.titular, account.saldo);
}

module.exports.insereConta = insereConta