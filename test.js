// const fenix = {
//     name: "Marcus",
//     lastname: "Fenix"
// }

// fenix.saludar = function () {
//     console.log(`Hola, mi nombre es ${this.name}`);
// }

// fenix.saludar()


// const number = {
//     integer: 25,
//     double: 3.5,
//     sumar: function (a,b) {
//         let suma = a + b
//         return suma
//     }
// }

// number.operar = function () {
//     console.log(`La suma de ${this.integer} y ${this.double} es igual a: ${this.sumar(this.integer,this.double)}`);
    
// }

// number.operar()


// let moreAsync = () => {
//     console.log("Start");
//     setTimeout(() => {
//         console.log('SetTimeOut');
//     }, 0);    
//     Promise.resolve('Promise 1').then(msg => console.log(msg))
//     Promise.resolve('Promise 2').then(msg => console.log(msg))
//     console.log('End')
// }

// moreAsync()

// Secuencia fibonacci


function* fibonacci(){
    let a = 1;
    let b = 1;
    while(true){
        const nextNumber = a + b
        a = b
        b = nextNumber
        yield nextNumber
    }
}

const gen = fibonacci();

console.log(gen.next());
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next());  