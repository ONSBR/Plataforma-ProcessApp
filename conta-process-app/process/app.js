var { ReadProcessMemory } = require('./ReadProcessMemory');

var json = ReadProcessMemory.readFile(process.argv[2]);