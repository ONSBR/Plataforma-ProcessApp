class Teste {
    constructor(teste1, teste2) {
        this.teste1 = teste1;
        this.teste2 = teste2;
    }
}

var teste = new Teste();

console.log(Object.getOwnPropertyNames(teste));

// Object.keys(Teste).forEach(function(key,index) {
//     console.log(key)
// });