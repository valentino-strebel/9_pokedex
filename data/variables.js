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

let responseBase = null;

let responseJsonBase = null;

let container = null;

function setInitialVariables() {
  container = document.getElementById("container");
}

function setVariablesOverlay(indexPokemon) {
  insertName = pokemonDetails[indexPokemon].name;
  insertid = pokemonDetails[indexPokemon].id;
  insertImg = pokemonDetails[indexPokemon].img;
  insertWeight = pokemonDetails[indexPokemon].weight;
  insertHeight = pokemonDetails[indexPokemon].height;
}

function setNavigationUrl(responseJsonBase) {
  next_url = responseJsonBase.next;
  prev_url = responseJsonBase.previous;
}
