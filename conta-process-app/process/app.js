var { ProcessMemory } = require('./ProcessMemory');
var Contexto = require('plataforma-core/Contexto');
var Evento = require('plataforma-core/Evento');
var Instancia = require('plataforma-core/Instancia');

var instancia = new Instancia("1");
var evento = new Evento("cadastro", Date.now(), instancia, "usuario 1", "payload");
var contexto = new Contexto(evento, instancia, "", Date.now());

ProcessMemory.writeFileSync(1, JSON.stringify(contexto));
// var json = ReadProcessMemory.readFileSync(process.argv[2]);