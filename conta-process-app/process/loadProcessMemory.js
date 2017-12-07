// var request = require('request'); 
// var Contexto = require('plataforma-core/Contexto');
// var Evento = require('plataforma-core/Evento');
// var Instancia = require('plataforma-core/Instancia');

// var instancia = new Instancia("1");
// var evento = new Evento("cadastro", Date.now(), instancia, "usuario 1", getPayload());
// var contexto = new Contexto(evento, instancia, "", Date.now());

// request.post('http://localhost:9091/contexto/create').form({contexto_teste:JSON.stringify(contexto)})

// function getPayload() {
//     return '{"titular":"Hugo","saldo":"50.500"}';
// }
var yaml = require('js-yaml');

class Teste {
    constructor(valor, valor2) {
        this.valor = valor;
        this.valor2 = valor2;
    }
}

teste = new Teste("23", "3333")

console.log(yaml.safeDump(teste));