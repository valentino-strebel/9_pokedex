let BASE_URL = "https://pokeapi.co/api/v2/pokemon";

let pokemon = [];

let filteredPokemon = [];

let pokemonDetails = [];

let urlPokemon = [];

let next_url = "";

let prev_url = "";

let insertName = null;

let insertid = null;

let insertImg = null;

let insertWeight = null;

let insertHeight = null;

function setVariables(indexPokemon) {
  insertName = pokemonDetails[indexPokemon].name;
  insertid = pokemonDetails[indexPokemon].id;
  insertImg = pokemonDetails[indexPokemon].img;
  insertWeight = pokemonDetails[indexPokemon].weight;
  insertHeight = pokemonDetails[indexPokemon].height;
}
