var handlebars = require('handlebars');
var fs = require("fs");

class Teste {
    constructor(teste1, teste2) {
        this.teste1 = teste1;
        this.teste2 = teste2;
    }
}

geraTemplateDaEntidade("Teste")

function geraTemplateDaEntidade(nomeDaEntidade) {
    let source = fs.readFileSync("mapa/entidade.tmpl").toString();
    let template = handlebars.compile(source);
    handlebars.registerHelper('campos', function(options) {
        return getListaDeCampos();
      });
    let obj = { "nomeDaEntidade":nomeDaEntidade, "campos":getListaDeCampos(nomeDaEntidade)};        
    let compiled = template(obj);
    console.log(compiled);
}

function getListaDeCampos(nomeDaEntidade) {
    let listaDeAtributos = Object.getOwnPropertyNames(eval("new " + nomeDaEntidade +"()"));
    let listaDoMapeamento = [];

    for (i = 0; i < listaDeAtributos.length; i++) { 
        listaDoMapeamento.push({campoOrigem: listaDeAtributos[i], campoDestino: "destino", tipoDoCampo: "string"});
    }

    return listaDoMapeamento; 
}
