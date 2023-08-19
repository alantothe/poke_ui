import { useState, useEffect } from "react";
import PokemonDetail from "../components/PokemonDetail";
import PokemonModal from "../components/PokemonModal";

function AllPokemon() {
  let baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      let response = await fetch(baseURL);
      let data = await response.json();
      console.log(data.results);
      setPokemon(data.results);
    };

    getPokemon();
  }, []);

  const handleClick = async (pokemon) => {
    setShowModal(true);

    const response = await fetch(pokemon.url);
    const data = await response.json();
    // Set the detailed data to selectedPokemon
    setSelectedPokemon(data);
  };

  const pokemonMap = pokemon.map((pokemon, index) => {
    let pokemonURL = pokemon.url.split("pokemon/")[1].split("/")[0];

    return (
      <div
        onClick={() => handleClick(pokemon)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
          width: "200px",
          margin: "10px",
          padding: "10px",
        }}
        key={index}
      >
        <h1>{pokemon.name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonURL}.png`}
          alt="pokemon"
        />
      </div>
    );
  });

  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "scroll",
          height: "100vh",
        }}
      >
        {pokemonMap}
        {showModal && selectedPokemon && (
          <PokemonModal
            onClose={() => {
              setShowModal(false);
              setSelectedPokemon(null);
            }}
          >
            <PokemonDetail pokemon={selectedPokemon} />
          </PokemonModal>
        )}
      </div>
    </div>
  );
}

export default AllPokemon;
