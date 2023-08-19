function PokemonCard({ pokemon, onPokemonSelect }) {
  let pokemonURL = pokemon.url.split("pokemon/")[1].split("/")[0];

  return (
    <div
      onClick={() => onPokemonSelect(pokemon)}
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
    >
      <h1>{pokemon.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonURL}.png`}
        alt="pokemon"
      />
    </div>
  );
}

export default PokemonCard;
