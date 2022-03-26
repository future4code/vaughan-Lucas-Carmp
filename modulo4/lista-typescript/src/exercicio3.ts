enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

const returnType = (
  movie: string,
  year: number,
  genre: GENERO,
  evaluation?: number
): object => {
  type myMovieTypes = {
    nome: string,
    ano: number,
    gênero: GENERO,
    nota: number | undefined
  };

  const myMovie: myMovieTypes = {
    nome: movie,
    ano: year,
    gênero: genre,
    nota: evaluation,
  };

  return myMovie;
};

//por algum motivo a chave gênero é retornada como string. exemplo: 'genero': 'romance', em vez de genero: 'romance'.
