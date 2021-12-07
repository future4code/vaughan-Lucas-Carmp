//INTERPRETAÇÃO
//exercício 1
//letra a: testa se o número do input é par ou ímpar.
//letra b: pares.
//letra c: ímpares.

//exercício 2
//letra a: para mostrar ao cliente o preço da fruta escolhida.
//letra b: O preço da fruta Maçã é R$2.25
//letra c: O preço da fruta Pêra é R$5. O programa continuaria rodando e a variável 'preco' assumiria o valor atualizado de 5.

//exercício 3
//letra a: pedindo ao usuário um número e transformando a sua entrada em um valor do tipo Number.
//letra b: Para 10: Esse número passou no teste e uma mensagem de erro. Para -10: apenas a mensagem de erro.
//letra c: Sim, pois a variável "mensagem" foi declarada em escopo local, não podendo ser acessada através do global.


//ESCRITA
//exercício 1
//letra a
const userAge = Number(prompt('Diga sua idade.'))

//letra b: feito

//letra c
const ageVerifier = () => {
  if (userAge >= 18){
    console.log('Você pode dirigir.')
  } else {
    console.log('Você não pode dirigir.')
  }
}
ageVerifier()



//exercício 2
const turno = prompt('Em qual turno você estuda? Use "M" para matutino, "V" para vespertino ou "N" para noturno.').toLowerCase()
const cumprimentaAluno = () =>{
  if (turno.includes("m")) {
    console.log('Bom dia!')
  }else if (turno.includes("v")){
    console.log('Boa tarde!')
  }else if (turno.includes("n")){
    console.log('Boa noite!')
  }else {
    console.log('Use "M" para matutino, "V" para vespertino ou "N" para noturno.')
  }
}
cumprimentaAluno()


//exercício 3
const turno = prompt('Em qual turno você estuda? Use "M" para matutino, "V" para vespertino ou "N" para noturno.').toLowerCase()
switch (turno){
  case 'm':
    console.log('Bom dia!')
    break
  case 'v':
    console.log('Boa tarde!')
    break
  case 'n':
    console.log('Boa noite!')
    break
  default:
    console.log('Desculpe, não entendi.')
}



//exercício 4
const generoFilme = prompt('Qual o gênero do filme que vamos assistir?').toLowerCase()
const precoIngresso = Number(prompt('Qual o preço do ingresso?'))

const verificaSeVamosAssistir = () => {
  if (generoFilme.includes('fantasia') && 
      precoIngresso < 15 ){
        console.log('Bom filme!')
      }else{
        console.log('Escolha outro filme :(')
      }
}
verificaSeVamosAssistir()





//DESAFIO 1
const generoFilme = prompt('Qual o gênero do filme que vamos assistir?').toLowerCase()
const precoIngresso = Number(prompt('Qual o preço do ingresso?'))
const lanchinho = prompt('Qual lanchinho você vai comprar?')

const verificaSeVamosAssistir = () => {
  if (generoFilme.includes('fantasia') && 
      precoIngresso < 15 ){
        console.log('Bom filme!')
        console.log(`Aproveite seu ${lanchinho}!`)
      }else{
        console.log('Escolha outro filme :(')
      }
}
verificaSeVamosAssistir( )



//DESAFIO 2
const userName = prompt('Qual o seu nome?')
const inOrDom = prompt('Insira "IN" se for um jogo internacional ou "DO" se for um jogo doméstico.').toUpperCase()
const tournamentPhase = prompt('Insira "SF" para semi-final, "DT" para disputa de terceiro lugar ou "FI" para final.').toUpperCase()
const category = prompt('Indique a categoria (1, 2, 3 ou 4).')
const quantity = Number(prompt('Quantos ingressos você quer?'))


const semiFinal = {
  categoriaUm: 1320.00,
  categoriaDois: 880.00,
  categoriaTres: 550.00,
  categoriaQuatro: 220.00
}
const terceiroLugar = {
  categoriaUm: 660.00,
  categoriaDois: 440.00,
  categoriaTres: 330.00,
  categoriaQuatro:170.00
}
const final = {    
  categoriaUm: 1980.00,
  categoriaDois: 1320.00,
  categoriaTres: 880.00,
  categoriaQuatro: 330.00
}



const calculaGeraNota = () =>{
    let valor
    if (tournamentPhase.includes('SF')){
    switch (category){
      case '1':
        valor = Number(semiFinal.categoriaUm)
        break
      case '2':
        valor = Number(semiFinal.categoriaDois)
        break
      case '3':
        valor = Number(semiFinal.categoriaTres)
        break
      case '4':
        valor = Number(semiFinal.categoriaQuatro)
        break
     }
       
} else if (tournamentPhase.includes('DT')){
    switch (category){
      case '1':
        valor = Number(terceiroLugar.categoriaUm)
        break
      case '2':
        valor = Number(terceiroLugar.categoriaDois)
        break
      case '3':
        valor = Number(terceiroLugar.categoriaTres)
        break
      case '4':
        valor = Number(terceiroLugar.categoriaQuatro)
        break
     }
        
}  else if (tournamentPhase.includes('FI')){
    switch (category){
      case '1':
        valor = Number(final.categoriaUm)
        break
      case '2':
        valor = Number(final.categoriaDois)
        break
      case '3':
        valor = Number(final.categoriaTres)
        break
      case '4':
        valor = Number(final.categoriaQuatro)
     }
        
}  else {
    console.log('Insira um valor válido.')
}
    
console.log('---Dados da compra---')
console.log(`Nome do cliente: ${userName}`)
console.log(`Tipo do jogo: ${inOrDom}`)
console.log(`Etapa do jogo: ${tournamentPhase}`)
console.log(`Categoria: ${category}`)
console.log(`Quantidade de ingressos: ${quantity} ingressos`)
const valorTotal = Number(valor*quantity)
const valorDolar = Number(valor*4.10)
const valorDolarTotal = Number(valorDolar*quantity)
if (inOrDom.includes('IN')){
    console.log('---Valores---')
    console.log(`Valor do ingresso: U$${valorDolar} `)
    console.log(`Valor total: U$${valorDolarTotal}`)
}else if (inOrDom.includes('DO')){
    console.log('---Valores---')
    console.log(`Valor do ingresso: R$${valor} `)
    console.log(`Valor total: R$${valorTotal}`)
}else {
    console.log('Insira um valor válido.')
}
}

calculaGeraNota()



