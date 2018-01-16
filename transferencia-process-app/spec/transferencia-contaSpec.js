describe("Transferência Conta", function() {
    var Conta = require('../process/Conta');
    var Transferencia = require("../process/Transferencia");
    var Contexto = require('plataforma-core/Contexto');
    var DataSet = require('plataforma-core/DataSet');
    var Evento = require('plataforma-core/Evento');
    var transferenciaConta = require('../process/transferencia-conta');
    var contexto;

    beforeEach(function() {
        
        contexto = new Contexto();
        contexto.dataSet = new DataSet();
        evento = new Evento();
        contexto.evento = evento;
    });
  
    it("should be able to persist an account", function() {

        var idContaOrigem = 1;
        var idContaDestino = 2;
        var valorContaOrigem = 100;
        var valorContaDestino = 100;
        var valorTransacao = 25;

        var dataSet = contexto.dataSet;

        dataSet.insert(new Conta(idContaOrigem, valorContaOrigem), Conta.name);
        dataSet.insert(new Conta(idContaDestino, valorContaDestino), Conta.name);

        valorContaOrigem -= valorTransacao;
        valorContaDestino += valorTransacao;
        
        evento.payload = {};
        var operacao = {};
        evento.payload.operacao = operacao;

        operacao.contaOrigem = {};
        operacao.contaDestino = {};
        operacao.contaOrigem.id = idContaOrigem;
        operacao.contaDestino.id = idContaDestino;
        operacao.valorTransferencia = valorTransacao;

        transferenciaConta.transfereConta(contexto);

        var conta1 = dataSet.queryable(Conta.name).first(function(it) { return it.id == idContaOrigem});
        var conta2 = dataSet.queryable(Conta.name).first(function(it) { return it.id == idContaDestino});

        var transfer = dataSet.queryable(Transferencia.name).first();

        expect(conta1.saldo).toEqual(valorContaOrigem);
        expect(conta2.saldo).toEqual(valorContaDestino);
        expect(transfer.valorTransferencia).toEqual(valorTransacao);
    });
  
});
  