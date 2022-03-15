import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import PokeCard from "./PokeCard/PokeCard";

const App = (props) => {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getPokelist = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      setPokelist(response.data.results);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getPokelist();
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  const renderedPokeList = pokeList.map((item) => {
    return (
      <option key={item.name} value={item.name}>
        {item.name}
      </option>
    );
  });



  return (
    <div className="App">
      <h1>PokéDex</h1>
      <select onChange={changePokeName}>
        <option value={""}>escolha</option>
        {renderedPokeList}
      </select>
      {pokeName && <PokeCard nomePokemon={pokeName} />}
    </div>
  );
};

export default App;
