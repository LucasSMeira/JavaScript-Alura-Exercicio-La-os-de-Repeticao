const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

let somaDosNum= 0;

for (let i = 0; i < numeros.length; i++) {
    somaDosNum+= numeros[i];
}

const mediaFinal = somaDosNum/numeros.length;

console.log(mediaFinal);