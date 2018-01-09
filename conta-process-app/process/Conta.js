var PlatformEntity = require("plataforma-core/PlatformEntity");

class Conta extends PlatformEntity {

    constructor(titular, saldo) {
        super();
        this.titular = titular;
        this.saldo = saldo;
    }

    toJSON() {
        return '[{"titular":"' + this.titular +
            '","saldo":' + this.saldo + ',"_metadata":{"type":"' + this.entityMetadata.type +
            '","changeTrack":"' + this.entityMetadata.changeTrack + '"}}]';
    }
}

module.exports = Conta;