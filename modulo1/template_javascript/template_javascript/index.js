/* //QUESTÃO 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
/* console.log(b) mostrará 10. o console.log seguinte mostrará 10 5, pois o valor de b foi alterado. */


//QUESTÃO 2
/* let a = 10
let b = 20
c = a // 10
b = c // 10
a = b // 10
 */
/* console.log(a, b, c) */
// mostrará 10 10 10


//QUESTÃO 3
/* let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
/* p -> horasDia
t -> valorDia  */ 


//ESCRITA 1
let userName = null
let userAge = null
console.log(typeof userName, typeof userAge)
// o tipo da variável é objeto. Não aprendemos sobre objetos ainda, então não posso responder o porquê.
userName = prompt("Insert username")
userAge = Number(prompt("Insert age"))
console.log(typeof userAge, typeof userName) 
// a idade veio em string, pois o prompt sempre retorna uma string.
 console.log("Olá", userName+",", "você tem", userAge, "anos.") 



//ESCRITA 2
/*const question1 = "Are you wearing a cap?"
const question2 = "Is it raining today?"
const question3 = "Do you like dogs?"
const answer1 = "No"
const answer2 = "No"
const answer3 = "Yes"
console.log(question1, answer1, question2, answer2, question3, answer3) */


//ESCRITA 3
/* let a = 10
let b = 25
let c = a
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 */


//DESAFIO
/* const firstNumber = Number(prompt("Pick a number."))
const secondNumber = Number(prompt("Pick another number."))
const sum = firstNumber + secondNumber
const times = firstNumber * secondNumber
console.log("O primeiro número somado ao segundo número resulta em:", sum+"." + " " + "O primeiro número multiplicado pelo segundo número resulta em:", times+".") */











