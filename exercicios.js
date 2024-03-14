const array = [5,29,30,42];

function verificaMaior(array){
    let maior = array[0];
    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i];
        }
        if(array[i] < menor) {
            menor = array[i];
        }
    }

    console.log(`O menor número é ${menor} e o maior número é ${maior}.`);
}

verificaMaior(array);