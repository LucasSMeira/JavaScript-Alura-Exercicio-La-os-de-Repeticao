const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

let pares = [];

for (let i = 0; i < numeros.length; i++) {
    
    if(numeros[i]%2 == 0){
        pares.push(numeros[i]);
    }
    
}

console.log(pares);