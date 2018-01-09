var PlatformEntity = require("plataforma-core/PlatformEntity");

class Conta extends PlatformEntity {

    constructor(id, saldo) {
        super();
        this.id = id;
        this.saldo = saldo;
    }
}

module.exports = Conta;