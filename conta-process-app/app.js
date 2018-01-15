var CadastraContaProcessApp = require("./CadastraContaProcessApp");

const processName = process.argv[2];
const processInstanceId = process.argv[3];
const operation = process.argv[4];

start();

function start() {
    let cadastraContaProcessApp = new CadastraContaProcessApp(processName, processInstanceId, operation);
    cadastraContaProcessApp.startProcess();
}




