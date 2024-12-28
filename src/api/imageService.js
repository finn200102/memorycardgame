export const fetchImageUrls = async () => {
  const pokemons = await getPokemons();
  const promises = pokemons.map(async (pokemon) => {
    const url = await getImage(pokemon);
    return url;
  });
  const urls = await Promise.all(promises);
  return urls;
};

const getPokemons = async () => {
  const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  const pokemons = [];
  try {
    const response = await fetch(apiEndpoint + "?limit=10");
    const data = await response.json();
    data.results.map((pokemon) => {
      pokemons.push(pokemon.name);
    });
    return pokemons;
  } catch (error) {
    console.error("There was an error with the fetching process", error);
  }
};

const getImage = async (pokemon) => {
  const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const response = await fetch(apiEndpoint + pokemon);
    const data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    console.error("There was an error with getting the image", error);
  }
};
