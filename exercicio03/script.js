// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
function soma(num1,num2) {
    console.log(`A soma: ${num1+num2}`)
}
//soma(2,2)

function subtracao(num1,num2) {
    console.log(`A subtração: ${num1-num2}`)
}
//subtracao(2,2)

function divisao(num1,num2){
    console.log(`A divisão: ${num1/num2}`)    
}
//divisao(2,2)

function multiplicacao(num1,num2) {
    console.log(`A Multiplicação: ${num1*num2}`)
}
//multiplicacao(2,2)

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

let numero1 = Number(prompt('Digite um número:'))
let numero2 = Number(prompt('Digite outro numero'))

soma(numero1, numero2)
subtracao(numero1,numero2)
divisao(numero1, numero2)
multiplicacao(numero1, numero2)