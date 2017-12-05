fs = require('fs')

class ProcessMemory {
  static readFileSync(processId) {
    return fs.readFileSync("./process_memory/" + processId + ".json", 'utf8');
  }

  static writeFileSync(processId, valueStr) {
    fs.writeFileSync("./process_memory/" + processId + ".prm", valueStr); 
  }
}

exports.ProcessMemory = ProcessMemory;
