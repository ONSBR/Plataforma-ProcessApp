var PlatformEntity = require("plataforma-core/PlatformEntity");

class Conta extends PlatformEntity {

    constructor(id, saldo) {
        super();
        this.id = id;
        this.saldo = saldo;
    }

    toJSON() {
        return '[{"id":"' + this.id +
            '","saldo":' + this.saldo + ',"_metadata":{"type":"' + this.entityMetadata.type +
            '","changeTrack":"' + this.entityMetadata.changeTrack + '"}}]';
    }
}

module.exports = Conta;