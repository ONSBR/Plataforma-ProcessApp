var fs = require("fs");
var yaml = require("js-yaml");

let nomeDoYaml = process.argv[2];
geraEntidade(nomeDoYaml);

function geraEntidade(nomeDoYaml) {
    console.log("Gerando entidade a partir do yaml=" + nomeDoYaml);
    let yamlFile = lerYaml(nomeDoYaml);
    let yamlMapper = yaml.safeLoad(yamlFile);
    
    var campos = eval("yamlMapper."+ nomeDoYaml + ".fields");
    
    console.log("nome da entidade " + nomeDoYaml);
    console.log("nome dos campos=")
    for (campo in campos) {
        console.log(campo)
    }
}

function lerYaml(nomeDoYaml) {
    let yamlFile = fs.readFileSync("mapa/"+ nomeDoYaml +".yaml");
    return yamlFile;
}