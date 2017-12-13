var config = require('config');

function insereConta(contexto) {
    console.log(contexto);
    contexto.dataSet.save(contexto.evento.payload);
}

module.exports.insereConta = insereConta