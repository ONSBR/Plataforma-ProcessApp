var ProcessApp = require("plataforma-sdk/worker/ProcessApp");
var transferenciaConta = require("./process/transferencia-conta");

class TransferenciaContaProcessApp extends ProcessApp {

    constructor(processInstanceId, operation) {
        super(processInstanceId, operation);
        this.lookupTable = {
            "transfereConta": transferenciaConta.transfereConta
        };
    }

}

module.exports = TransferenciaContaProcessApp;