// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let height = Number(prompt('Insira o valor da altura (cm).'))
  let width = Number(prompt ('Insira o valor da largura (cm).'))
  let rectangleArea = height * width
  console.log(rectangleArea)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let currentYear = Number(prompt('Em que ano estamos?'))
  let birthYear = Number(prompt('Em que ano você nasceu?'))
  let age = currentYear - birthYear
  console.log(age)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let userName = prompt('Qual o seu nome?')
  let userAge = Number(prompt('Qual a sua idade?'))
  let userEmail = prompt('Qual o seu endereço de e-mail?')
  console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let favColor1 = prompt('Cite uma cor de que você gosta.')
  let favColor2 = prompt('Vamos lá, mais uma cor.')
  let favColor3 = prompt('Pra finalizar, só mais uma cor!')
  let colorsArray = [favColor1, favColor2, favColor3]
  console.log(colorsArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array.shift()
  let ultimo = array.pop()
  array.push(primeiro)
  array.unshift(ultimo)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let alterado1 = string1.toUpperCase()
  let alterado2 = string2.toUpperCase()
  return alterado1 === alterado2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoNascimento = Number(prompt('Em que ano o usuário nasceu?'))
  let anoEmissao = Number(prompt('Em que ano a carteira de identidade do usuário foi emitida?'))
  let renovaCarteira = (anoAtual - anoNascimento) <= 20 && (anoAtual - anoEmissao) >= 5 || 
  (anoAtual - anoNascimento) >  20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoEmissao) >= 10 || 
  (anoAtual - anoNascimento) > 50 && (anoAtual - anoEmissao) >= 15
  console.log(renovaCarteira)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let bissextosUm = ano % 400 === 0
  let bissextosDois = ano % 4 === 0
  let bissextoExceto = ano % 100 === 0 && ano % 400 !== 0
  let ehBissexto = bissextosUm || (bissextosDois && !bissextoExceto)
  return ehBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você tem mais de 18 anos? Responda "sim" ou "nao"')
  let escolaridade = prompt('Você possui ensino médio completo? Responda "sim" ou "nao"')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Responda "sim" ou "nao"')
  let valido = idade.includes("sim") && escolaridade.includes("sim") && disponibilidade.includes("sim")
  console.log(valido)

}