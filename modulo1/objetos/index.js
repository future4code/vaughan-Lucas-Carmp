//EXERCÍCIOS DE INTERPRETAÇÃO
//exercício 1
//letra a: 
 
  Matheus Nachtergaele
   Virginia Cavendish
  canal: Globo, horario: 14h


//exercício 2
//letra a:

{
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
{
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}
{
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}


//letra b
// os três pontos copiam o objeto referido para facilitar a adição de novos objetos que se refiram à mesma coisa que o original.


//exercício 3
//letra a: false
//         undefined
//letra b: false porque a função foi chamada para acessar o valor "backender", que é falso. undefined porque "altura" não foi definido.



//EXERCÍCIOS DE ESCRITA
//exercício 1
//letra a e b
 const comoChamar = {
  nome: "Lucas",
  apelido: ['Pasche', 'Paschola', 'Paschão']
}
const comoChamarNovo = {
  ...comoChamar,
  apelido: ['Luquinhas', 'Lucão', 'Lu']
}

let chamar = () => {
  return `Eu sou ${comoChamarNovo.nome}, mas pode me chamar de: ${comoChamarNovo.apelido}.`
}
console.log(chamar(comoChamarNovo) ) 



//exercício 2
//letra a
 const mulher = {
  nome: 'Fernanda',
  idade: 24,
  profissao: 'engenheira'
}
const homem = {
  nome: 'Eric',
  idade: 22,
  profissao: 'segurança'
}

//letra b
const listaMulher = () => {
  return [mulher.nome, mulher.nome.length, mulher.idade, mulher.profissao, mulher.profissao.length]
}
console.log(listaMulher()) 


//exercício 3
//letra a
 var carrinho = []

//letra b
const fruta0 ={
  nome: 'banana',
  disponibilidade: true
}
const fruta1 ={
  nome: 'abacate',
  disponibilidade: true
}
const fruta2 ={
  nome: 'melancia',
  disponibilidade: true
}

//letra c
const preencheCarrinho = (fruta) =>{
  carrinho.push(fruta)
}
preencheCarrinho(fruta0)
preencheCarrinho(fruta1)
preencheCarrinho(fruta2)

console.log(carrinho) 






//DESAFIO 1

 const registro = () =>{
  let nome = prompt('Qual o seu nome?')
  let idade = prompt('Quantos anos você tem?')
  let profissao = prompt('Qual a sua profissão?')
  let pessoaRegistrada = {nome, idade, profissao}
  console.log(pessoaRegistrada)
  console.log(typeof(pessoaRegistrada))
}
registro() 



//DESAFIO 2
 const primeiroFilme = {
    anoDeLancamento: 1992,
    nome: 'Perfume de mulher'
}
  const segundoFilme = {
    anoDeLancamento: 2019,
    nome: 'Fratura'
}
  const cadastraFilme = (filme0, filme1) =>{
    return `O primeiro filme foi lançado antes do segundo? ${primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento}`
}
  console.log(cadastraFilme(primeiroFilme, segundoFilme)) 


  //DESAFIO 3


  var carrinho = []
  const fruta0 ={
    nome: 'banana',
    disponibilidade: true
  }
  const fruta1 ={
    nome: 'abacate',
    disponibilidade: true
  }
  const fruta2 ={
    nome: 'melancia',
    disponibilidade: true
  }
  
  const preencheCarrinho = (fruta) =>{
    carrinho.push(fruta)
  }
  preencheCarrinho(fruta0)
  preencheCarrinho(fruta1)
  preencheCarrinho(fruta2)
  console.log(carrinho) 
  
  
  const atualizaDisponibilidade = (fruta) =>{
      var frutaAtualizada = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
      }
      return frutaAtualizada
  }
  console.log(atualizaDisponibilidade(fruta1))
