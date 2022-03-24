type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// letra b: tsc + caminho e nome do arquivo
//letra c: não seria o mesmo pois com a mudança de diretório, muda o caminho e, portanto, o comando.
//letra d: tsc aceita argumentos. podemos passar todos os nomes de arquivos após o tsc.
