let BASE_URL = "https://pokeapi.co/api/v2/pokemon";

let pokemon = [];
let filteredPokemon = [];
let pokemonDetails = [];
let urlPokemon = [];

let next_url = "";
let prev_url = "";

let overlayData = {
  name: null,
  id: null,
  img: null,
  weight: null,
  height: null,
};

const DOM = {
  container: null,
  overlayCard: null,
  inputSearch: null,
  overlayLoading: null,
  body: null,
  buttons: {},
};

function setInitialVariables() {
  DOM.container = document.getElementById("container");
  DOM.overlayCard = document.getElementById("overlayCard");
  DOM.overlayLoading = document.getElementById("overlayLoading");
  DOM.body = document.body;
  DOM.buttons = {
    backButtonOne: document.getElementById("backButtonOne"),
    backButtonTwo: document.getElementById("backButtonTwo"),
    backStartOne: document.getElementById("backStartOne"),
    backStartTwo: document.getElementById("backStartTwo"),
  };
}

function setVariablesOverlay(indexPokemon) {
  const poke = pokemonDetails[indexPokemon];
  overlayData = {
    name: poke.name,
    id: poke.id,
    img: poke.img,
    weight: poke.weight,
    height: poke.height,
  };
}

function setNavigationUrl(responseJson) {
  next_url = responseJson.next;
  prev_url = responseJson.previous;
}
