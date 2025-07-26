/**
 * The base URL for the Pokémon API.
 * @type {string}
 */
let BASE_URL = "https://pokeapi.co/api/v2/pokemon";

/**
 * Array to store fetched Pokémon names and basic data.
 * @type {Array<Object>}
 */
let pokemon = [];

/**
 * Array to store Pokémon after filtering by search or other criteria.
 * @type {Array<Object>}
 */
let filteredPokemon = [];

/**
 * Array to store detailed data for each Pokémon.
 * @type {Array<Object>}
 */
let pokemonDetails = [];

/**
 * Array to store individual Pokémon endpoint URLs.
 * @type {Array<string>}
 */
let urlPokemon = [];

/**
 * URL for fetching the next set of Pokémon in pagination.
 * @type {string}
 */
let next_url = "";

/**
 * URL for fetching the previous set of Pokémon in pagination.
 * @type {string}
 */
let prev_url = "";

/**
 * Object representing the data displayed in the Pokémon overlay card.
 * @typedef {Object} OverlayData
 * @property {string|null} name - Name of the Pokémon.
 * @property {number|null} id - ID of the Pokémon.
 * @property {string|null} img - Image URL of the Pokémon.
 * @property {number|null} weight - Weight of the Pokémon.
 * @property {number|null} height - Height of the Pokémon.
 *
 * @type {OverlayData}
 */
let overlayData = {
  name: null,
  id: null,
  img: null,
  weight: null,
  height: null,
};

/**
 * Object storing references to DOM elements used throughout the application.
 * @typedef {Object} DOMElements
 * @property {HTMLElement|null} container - Main container for displaying Pokémon.
 * @property {HTMLElement|null} overlayCard - Overlay card element for showing details.
 * @property {HTMLElement|null} inputSearch - Input element for searching.
 * @property {HTMLElement|null} overlayLoading - Loading indicator for overlay.
 * @property {HTMLElement|null} body - Reference to the <body> element.
 * @property {Object} buttons - References to navigation buttons.
 *
 * @type {DOMElements}
 */
const DOM = {
  container: null,
  overlayCard: null,
  inputSearch: null,
  overlayLoading: null,
  body: null,
  buttons: {},
};

/**
 * Initializes and assigns DOM element references to the `DOM` object.
 */
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

/**
 * Sets the overlay data for a selected Pokémon using its index in `pokemonDetails`.
 *
 * @param {number} indexPokemon - Index of the Pokémon in the `pokemonDetails` array.
 */
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

/**
 * Updates pagination URLs (`next_url` and `prev_url`) from a fetched API response.
 *
 * @param {Object} responseJson - JSON response from the Pokémon API list endpoint.
 * @param {string|null} responseJson.next - URL for the next page.
 * @param {string|null} responseJson.previous - URL for the previous page.
 */
function setNavigationUrl(responseJson) {
  next_url = responseJson.next;
  prev_url = responseJson.previous;
}
