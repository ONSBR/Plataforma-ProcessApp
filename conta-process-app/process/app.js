var { ProcessMemory } = require('./ProcessMemory');
var Contexto = require('plataforma-core/Contexto');

var contexto = new Contexto("", "", "", Date.now());

ProcessMemory.writeFileSync(1, JSON.stringify(contexto));
// var json = ReadProcessMemory.readFileSync(process.argv[2]);