var CadastraContaProcessApp = require("./CadastraContaProcessApp");

const processInstanceId = process.argv[2];
const operation = process.argv[3];

start();

function start() {
    let cadastraContaProcessApp = new CadastraContaProcessApp(processInstanceId, operation);
    cadastraContaProcessApp.startProcess();
}




