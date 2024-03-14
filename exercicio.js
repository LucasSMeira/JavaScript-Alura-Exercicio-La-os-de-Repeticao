const array = [1,2,3,4,5,6,7];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

function imprimeArray(array){
    for (let i = 0; i < array.length; i++) {
        console.log(`Index: ${i} valores: ${array[i]}`);
    }
}

imprimeArray(array);