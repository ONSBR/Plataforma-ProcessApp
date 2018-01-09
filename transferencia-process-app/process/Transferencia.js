var PlatformEntity = require("plataforma-core/PlatformEntity");

class Transferencia extends PlatformEntity {

    constructor(contaOrigem, contaDestino, valorTransferencia) {
        super();
        this.contaOrigem = contaOrigem;
        this.contaDestino = contaDestino;
        this.valorTransferencia = valorTransferencia;
    }
}

module.exports = Transferencia;