var TransferenciaContaProcessApp = require("./TransferenciaContaProcessApp");

const processName = process.argv[2];
const processInstanceId = process.argv[3];
const operation = process.argv[4];

start();

function start() {
    let transferenciaContaProcessApp = new TransferenciaContaProcessApp(processName, processInstanceId, operation);
    transferenciaContaProcessApp.startProcess();
}




