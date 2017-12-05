fs = require('fs')

class ReadProcessMemory {
  static readFile(processId) {
    fs.readFile("./process_memory/" + processId + ".json", 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      return data;
    });    
  }

}

exports.ReadProcessMemory = ReadProcessMemory;
