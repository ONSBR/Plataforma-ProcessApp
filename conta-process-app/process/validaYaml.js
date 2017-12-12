var fs = require("fs");
var yaml = require("js-yaml");

operacaoFile = fs.readFileSync("../operacoes/operacao.yaml");
var operacaoYaml = yaml.safeLoad(operacaoFile);
console.log(operacaoYaml.operacao)