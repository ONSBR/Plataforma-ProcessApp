var geraJsAPartirDoYamls = require('./geraJsAPartirDoYamls');

var fs = require("fs");
var files = fs.readdirSync("mapa");

for(var i in files) {
    geraJsAPartirDoYamls.geraEntidade(files[i].toString().split(".yaml")[0]);
}

