//letra A
//const minhaString: string = 23
//nao se pode atribuir um numero a uma variavel tipo string.

//letra B
const meuNumero: number | string = '24'
//usando o operador logico OR 

//letra C
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

enum ArcoIris {
    VIOLETA = 'Violeta',
    ANIL = 'Anil',
    AZUL = 'Azul',
    VERDE = 'Verde',
    AMARELO = 'Amarelo',
    LARANJA = 'Laranja',
    VERMELHO = 'Vermelho'
}

const pessoa1: pessoa = {
    nome: 'Lucas',
    idade: 24,
    corFavorita: ArcoIris.VIOLETA
}
const pessoa2: pessoa = {
    nome: 'Nathália',
    idade: 23,
    corFavorita: ArcoIris.ANIL
}
const pessoa3: pessoa = {
    nome: 'Enzo',
    idade: 18,
    corFavorita: ArcoIris.VERDE
}
