describe("Cadastra Conta", function() {
    var cadastraConta = require('../process/cadastra-conta');
    var Conta = require('../process/Conta');
    var EventCatalog = require('../metadados/EventCatalog');
    var Contexto = require('plataforma-core/Contexto');
    var DataSet = require('plataforma-core/DataSet');
    var Evento = require('plataforma-core/Evento');
    var contexto;
    var evento;
    var conta;
    const titular = "Joao silva";
    const saldo = 100;

    beforeEach(function() {
        contexto = new Contexto();
        contexto.dataSet = new DataSet();
        evento = new Evento();
        contexto.evento = evento;
        conta = new Conta(titular, saldo);
        contexto.evento.payload = conta;
    });
  
    it("should be able to persist an account", function() {
      cadastraConta.insereConta(contexto);
      expect(contexto.dataSet.entities[0].titular).toEqual(titular);
      expect(contexto.dataSet.entities[0].saldo).toEqual(saldo);
    });

    it("should have one output event", function() {
        cadastraConta.insereConta(contexto);
        expect(contexto.eventoSaida.name).toEqual(EventCatalog.account_saved);
        expect(contexto.eventoSaida.payload).toEqual(conta);
    });
  
  
  });
  