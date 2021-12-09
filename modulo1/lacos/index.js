//INTERPRETAÇÃO
//exercício 1: enquanto o contador for < 5, será atribuído à variável "valor" o resultado de valor = valor + contador. O resultado ao final da quarta volta completa será 10. A quinta volta não será completa.

//exercício 2
//letra a: todos os números dentro da array que forem maiores que 18.
//letra b: sim, basta fazer:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  console.log(lista.indexOf(numero))
	}

//exercício 3:    *
//                **
//                ***
//                ****


//ESCRITA
//exercício 1
const perguntaBicho = () =>{
    let nomeBichos = []
    let quantosBichos = Number(prompt('Quantos bichos de estimação você tem?'))
    if (quantosBichos === 0){
        console.log('Que pena! Você pode adotar um pet!')
    }
    while (quantosBichos > 0){
        nomeBichos.push(prompt('Diga o nome do seu bichinho!'))
        quantosBichos --  
    }
    console.log(nomeBichos)
    }

//exercício 2
const arrayOriginal = [0, 1, 2, 3, 4, 5]

//letra a
const valorOriginalImprime = () => {
    for (let elemento of arrayOriginal){
        console.log(elemento)
    }
}
valorOriginalImprime()

//letra b
const valorOriginalDivideImprime = () =>{
    for (let elemento of arrayOriginal){
        console.log(elemento / 10)
    }
}
valorOriginalDivideImprime()

//letra c
const criaArrayPares = () => {
    let arrayPares = []
    for (let elemento of arrayOriginal){
        if (elemento % 2 === 0 && elemento > 0){
            arrayPares.push(elemento)
        }
    }
console.log(arrayPares)
} 
criaArrayPares()


//letra d
const criaArrayStrings = () =>{
    let arrayStrings = []
    for (let elemento of arrayOriginal){
        elemento.toString 
        arrayStrings.push(`O elemento do índex ${arrayOriginal.indexOf(elemento)} é: ${elemento}`)
    }
console.log(arrayStrings)
}
criaArrayStrings()

//letra e
const printMaiorMenor = () =>{
    let maior = 0
    let menor = 5
    for (let elemento of arrayOriginal){
        if (elemento > maior){
            maior = elemento
        }else if (elemento < menor){
            menor = elemento
        }
    }
    console.log(maior)
    console.log(menor)
}
printMaiorMenor()


//DESAFIO 1
const jogoDeAdivinhacao = () =>{
    const gabarito = Number(prompt('Vamos jogar!'))
    const listaPalpites = []
    let chute
    while(chute != gabarito){
        chute = Number(prompt('Adivinhe o número!'))
        if(chute < gabarito){
            listaPalpites.push(chute)
            console.log('Errou. É maior!')
        }else if (chute > gabarito){
            listaPalpites.push(chute)
            console.log('Errou. É menor!')
        }
        if (chute === gabarito){
            listaPalpites.push(chute)
            console.log('Acertou!')
            console.log(`O número de tentativas foi: ${listaPalpites.length}`)
        }
    }
}
jogoDeAdivinhacao()


//DESAFIO 2
const jogoDeAdivinhacao = () =>{
    const gabarito = Math.floor((Math.random()*100)+1)
    const listaPalpites = []
    let chute
    while(chute != gabarito){
        chute = Number(prompt('Adivinhe o número!'))
        if(chute < gabarito){
            listaPalpites.push(chute)
            console.log('Errou. É maior!')
        }else if (chute > gabarito){
            listaPalpites.push(chute)
            console.log('Errou. É menor!')
        }
        if (chute === gabarito){
            listaPalpites.push(chute)
            console.log('Acertou!')
            console.log(`O número de tentativas foi: ${listaPalpites.length}`)
    }
}
}
jogoDeAdivinhacao()
//sim, foi fácil fazer a alteração tendo o código em mãos. Porém, seria ainda mais fácil se houvesse um método onde você apenas insere dois números como os limites e tal método retorne um aleatório entre eles.