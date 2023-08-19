function PokemonDetail({ pokemon }) {
  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h3>Stats</h3>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {pokemon.stats.map((stat, index) => {
          return (
            <li
              style={{
                margin: "5px",
                listStyle: "none",
              }}
              key={index}
            >
              {stat.stat.name}: {stat.base_stat}
            </li>
          );
        })}
      </ul>

      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => {
          return <li key={index}>{ability.ability.name}</li>;
        })}
      </ul>
      <h3>Type</h3>
      <ul>
        {pokemon.types.map((type, index) => {
          const color = typeColors[type.type.name];
          return (
            <li
              style={{
                width: "100px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: color,
                borderRadius: "12px",
                padding: "5px",
                margin: "5px",
              }}
              key={index}
            >
              {type.type.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonDetail;
