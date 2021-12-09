//INTERPRETAÇÃO
//exercício 1: o primeiro item da array original, seguido de seu índice e da array original completa. o mesmo se repete para os outros dois itens.

//exercício 2: uma array com os valores atribuídos às chaves "nome".

//exercício 3: apenas os objetos que não contêm a palavra "Chijo". Pensei que retornaria apenas os apelidos, mas ao executar o código para confirmar não foi o que aconteceu.


//ESCRITA
//exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //letra a
 const doguinhosNome = pets.map((item) =>{
     return item.nome
 })
 console.log(doguinhosNome)

 //letra b
 const dogSalsicha = pets.filter((item) =>{
     return item.raca === "Salsicha"
 })
 console.log(dogSalsicha)

 //letra c
 const identificaPoodleAvisaCliente = pets.filter((item) =>{
    return item.raca === "Poodle"
}).map((item)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(identificaPoodleAvisaCliente)




//exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//letra a
const nomesProdutos = produtos.map((item) =>{
    return item.nome
})
console.log(nomesProdutos)

//letra b
const descontoProdutos = produtos.map((item) =>{
    return {nome: item.nome, preco: item.preco*0.95}
})
console.log(descontoProdutos)

//letra c
const separaBebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
})
console.log(encontraBebidas) 

//letra d & e
 const separaAlteraYpe = produtos.filter((item)=>{
    return item.nome.includes("Ypê")
}).map((item)=>{
    return `Compre ${item.nome} por ${item.preco}!`
})
console.log(separaAlteraYpe)





//DESAFIO 
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 //letra a
 const nomeDosCaras = pokemons.map((item) =>{
     return item.nome
 })
 nomeDosCaras.sort()
 console.log(nomeDosCaras)

 //letra b
const tipoDosCaras = pokemons.map((item)=>{
     return item.tipo
})
 console.log(tipoDosCaras)

const semRepetidos = tipoDosCaras.filter((item, index)=> {
    return tipoDosCaras.indexOf(item) === index;
});
console.log(semRepetidos)













