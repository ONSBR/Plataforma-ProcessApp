var ProcessApp = require("plataforma-sdk/worker/ProcessApp");
var cadastraConta = require("./process/cadastra-conta");

class CadastraContaProcessApp extends ProcessApp {

    constructor(processName, processInstanceId, operation) {
        super(processName, processInstanceId, operation);
        this.lookupTable = {
            "insereConta": cadastraConta.insereConta
        };
    }

}

module.exports = CadastraContaProcessApp;