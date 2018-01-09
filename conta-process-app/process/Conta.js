var PlatformEntity = require("plataforma-core/PlatformEntity");

class Conta extends PlatformEntity {

    constructor(titular, saldo) {
        super();
        this.titular = titular;
        this.saldo = saldo;
    }
}

module.exports = Conta;