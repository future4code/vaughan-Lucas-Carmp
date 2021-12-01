// INTERPRETAÇÃO
// exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean


// exercício 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) //o resultado dessa operação será uma concatenação dos dois valores passados pelo usuário, uma vez que o método prompt retorna valores do tipo string. Adicionar um 'Number' antes do prompt resolveria o problema.


// exercício 3 
// bastaria adicionar o método 'Number' ao prompt, que transformaria o tipo do valor retornado de string para number, possibilitando realizar operações aritméticas. 



//EXERCÍCIO DE ESCRITA
//exercício 1
const userAge = Number(prompt("How old are you?"))
const bffAge = Number(prompt("How old is your best friend?"))
console.log("Are you older than your best friend?", userAge > bffAge, userAge - bffAge) 



//exercício 2
const evens = Number(prompt("Insert an even number."))
console.log(evens % 2) //o resto é sempre 0.
//caso o usuário insira um número ímpar, o resto mostrado é 1.



//exercício 3
const yearsAge = Number(prompt("Insert your age (years)"))
const monthsAge = yearsAge * 12
const daysAge = monthsAge * 30
const hoursAge = daysAge * 24

console.log("Months:", monthsAge+";", "Days:", daysAge+";", "Hours:", hoursAge+".")



//exercício 4
const num1 = Number(prompt("Pick a number."))
const num2 = Number(prompt("Pick another number."))
console.log("Is the first number higher than the second one?", num1 > num2 )
console.log("Is the first number equal to the second one?", num1 === num2)
console.log("Is the first number divisible by the second one?", num1 % num2 === 0)
console.log("Is the second number divisible by the first one?", num2 % num1 === 0) 



//DESAFIOS
// desafio 1
//letra a
let kelvin = (77 - 32) * (5/9) + 273.15
console.log(kelvin+"K.")

//letra b
let fahrenheit = 80 * (9/5) + 32
console.log(fahrenheit+"°F.") 

//letra c
fahrenheit = 30 * (9/5) + 32
kelvin = 30 + 273.15
console.log(fahrenheit+"°F,", kelvin+"K.")

//letra d
const celsius = Number(prompt("Enter temperature (°C)"))
fahrenheit = celsius * (9/5) + 32
kelvin = celsius + 273.15
console.log(fahrenheit+"°F,", kelvin+"K.") 



//desafio 2
const kwhUse = Number(prompt("How many kilowatt-hours (kWh) does your house consume?"))
const discount = Number(prompt("Insert the discount (%)."))
let energyBill = kwhUse * 0.05 - (discount / 100 * (kwhUse * 0.05) )

//letra a
//energyBill = 280 * 0.05
console.log("R$"+energyBill+".")
// com 0% de desconto, R$14,00.

//letra b
console.log("R$"+energyBill+".")
// com 15% de desconto, R$11.90. 




//desafio 3
//letra a
let lb = 20
const lbToKg = lb / 2.2046
console.log("20lb equivalem a", lbToKg+"kg.")

//letra b
let oz = 10.5
const ozToKg = oz * 0.02835
console.log("10.5oz equivalem a", ozToKg+"kg.")

//letra c
let mi = 100
const miToM = mi * 1609
console.log("100mi equivalem a", miToM+"m.")

//letra d
let ft = 50
const ftToM = ft / 3.281
console.log("50ft equivalem a", ftToM+"m.")

//letra e
let gal = 103.56
const galToL = gal * 3.785
console.log("103.56gal equivalem a", galToL+"l.")

//letra f
let xic = 450
let xicToL = xic * 284
console.log("450 xic equivalem a", xicToL+"l.")

//letra g
xic = Number(prompt("Insira o volume em xícaras."))
xicToL = xic * 284
console.log(xic, "xic equivalem a", xicToL+"l.")