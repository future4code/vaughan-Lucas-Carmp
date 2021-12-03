//INTERPRETAÇÃO
//exercício 1
//letra a. 10 
//         50

//letra b. apenas o 50, pois é o valor mais recente retornado pela função.


//exercício 2
//letra a. Primeiramente essa função pede ao usuário para digitar um texto. Em seguida, ela transforma todas as letras do texto em minúsculas para facilitar a busca por um termo específico, que no caso é "cenoura". Caso haja, a função retorna o booleano true.

//letra b. i: true; ii: true; iii: false



//ESCRITA
//exercício 1
//letra a
const aboutMe = () => {
    console.log("My name is Lucas, I'm 24 years old, I live in Rio de Janeiro and I'm a student.")
}
aboutMe()


//letra b
const description = (userName, age, hometown, profession) => {
    return `I'm ${userName}, I'm ${age} years old, I live in ${hometown} and my profession is ${profession}.`
}


//exercício 2
//letra a
const sum = (x, y) =>{
    return x+y
}
console.log(sum(7, 15))

//letra b
const verifier = (x, y) =>{
    return x >= y
}

//letra c
const isEven = (x) =>{
    return x % 2 === 0
}

// letra d
const countAndModify = (userInput) =>{
    console.log(userInput.length, userInput.toUpperCase())
}


//exercício 3
const calculator = () =>{
    let x = Number(prompt("Escolha um número."))
    let y = Number(prompt("Escolha outro número."))
    let sum = () =>{
        return x + y
    }
    sum(x, y)
    let sub = () =>{
        return x - y
    }
    sub(x, y)
    let times = () =>{
        return x * y
    }
    times(x, y)
    let div = () =>{
        return x / y
    }
    div(x, y)
    
    const soma = sum(x, y)
    const subtracao = sub(x, y)
    const multiplicacao = times(x, y)
    const divisao = div(x, y)
    
    console.log(`Números inseridos: ${x}, ${y}`)
    console.log(`Soma: ${soma}`)
    console.log(`Diferença: ${subtracao}`)
    console.log(`Multiplicação: ${multiplicacao}`)
    console.log(`Divisão: ${divisao}`)
}
calculator()







//DESAFIOS
//desafio 1
//letra a
const anyFunction = (parameter) =>{
    console.log(parameter)
}
//letra b
const sumAndCall = (value1, value2) =>{
    anyFunction(value1 + value2)
}
sumAndCall(10, 64)



//desafio 2
const pitagorasCalc = (catOposto, catAdjacente) =>{
    let hip = Math.sqrt(Math.pow(catOposto, 2) + Math.pow(catAdjacente, 2))
    return hip
}
console.log(pitagorasCalc(2, 4))






