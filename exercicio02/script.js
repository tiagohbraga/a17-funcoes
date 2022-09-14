// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function doisNumeros(num1,num2) {
    console.log(num1+num2)
}
doisNumeros(2,5)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
function comparacao(num1,num2) {
    if(num1>=num2){
        console.log(true)
    }else(console.log(false))
}
comparacao(4,3)
// c) Uma função que receba um número e imprima se ele é par ou não
function parImpar(num){
    if(num%2===0){
        console.log('O número é par')
    }else{console.log('o número não é par')}
    
}
parImpar(3)

// d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function stringMsg(msg){
    console.log(`o tamanho da mensagem é: ${msg.length}`)
    console.log(`Uma versão da mensagem com letras maiusculas: ${msg.toUpperCase()}`)
}
stringMsg("Uma mensagem qualquer")