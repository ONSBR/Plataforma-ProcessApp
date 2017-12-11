var handlebars = require('handlebars');
var fs = require("fs");

class Teste {
    constructor(teste1, teste2) {
        this.teste1 = teste1;
        this.teste2 = teste2;
    }
}

class Mapeamento {
    constructor(campoOrigem, campoDestino, tipoDoCampo) {
        this.campoOrigem = campoOrigem;
        this.campoDestino = campoDestino;
        this.tipoDoCampo = tipoDoCampo; 
    }
}

var source = fs.readFileSync("mapa/entidade.tmpl").toString();
var template = handlebars.compile(source);
handlebars.registerHelper('campos', function(options) {
    return getListaDeCampos();
  });
var obj = { "nomeDaEntidade":Teste.name, "campos":getListaDeCampos()};        
var compiled = template(obj);
console.log(compiled);

// console.log(Object.getOwnPropertyNames(Teste));

function getListaDeCampos(){
    return [
        {campoOrigem: "origem", campoDestino: "destino", tipoDoCampo: "string"},
        {campoOrigem: "origem", campoDestino: "destino", tipoDoCampo: "string"}
    ]; 
}