function adicao(a, b){
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a* b;
}
function divisao(a, b){
    if(divisao == 0){
        return 'Erro divisao por zero !'
    }else{
        return a / b;
    }
}

function identPar(a){
    if(a % 2 ==  0){
        return 'Par';
    }else{
        return 'impar';
    }
}
 function somaIntervalo(a , b){
    let soma = 0
    for(let i = a; i <= b; i++){
        soma += i;
    }return soma;
 }

 function fatorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * fatorial(a - 1);
    }
}

function lerVogal(palavra) {
    let vogais = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.indexOf(palavra[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}
let minhaPalavra = "Olá Mundo";
let quantidadeVogais = lerVogal(minhaPalavra);


console.log(adicao(5 , 3))
console.log(subtracao(10 , 7)) 
console.log(multiplicacao(4 , 6))
console.log(divisao(15 , 3))
console.log(identPar(7))
console.log(somaIntervalo(5 , 1))
console.log(fatorial(5)); 
console.log("Quantidade de vogais: ", quantidadeVogais);