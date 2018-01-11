var CadastraContaProcessApp = require("./TransferenciaContaProcessApp");

const processInstanceId = process.argv[2];
const operation = process.argv[3];

start();

function start() {
    let transferenciaContaProcessApp = new TransferenciaContaProcessApp(processInstanceId, operation);
    transferenciaContaProcessApp.startProcess();
}




