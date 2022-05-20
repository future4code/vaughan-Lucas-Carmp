import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  const getPokemon = async (pokeName) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}}`
      );
      setPokemon(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getPokemon(props.nomePokemon);
  }, []);

  useEffect((prevProps) =>{
    if (prevProps.nomePokemon !== props.nomePokemon) {
        getPokemon(props.nomePokemon);
      }

  })


  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
