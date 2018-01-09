var PlatformEntity = require("plataforma-core/PlatformEntity");

class Transferencia extends PlatformEntity {

    constructor(contaOrigem, contaDestino, valorTransferencia) {
        super();
        this.contaOrigem = contaOrigem;
        this.contaDestino = contaDestino;
        this.valorTransferencia = valorTransferencia;
    }

    toJSON(payload) {
        return '[{ "contaOrigem":"' + this.contaOrigem.id +
            '","contaDestino":"' + this.contaDestino.id +
            '","valorTransferencia":' + this.valorTransferencia +
            ',"tipoOperacao":"transfer"' +
            ', "_metadata": { "type": "' + this.entityMetadata.type + '", "changeTrack": "'
            + this.entityMetadata.changeTrack + '" } }]';
    }
}

module.exports = Transferencia;