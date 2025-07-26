/**
 * Initializes the app by showing the loading screen and loading initial Pokémon data from the API.
 */
async function init() {
  loadingScreen();
  await loadDataFromApi();
}

/**
 * Loads the initial list of Pokémon from the API.
 * Handles data setup, populates URLs, fetches details, and renders the Pokémon cards.
 */
async function loadDataFromApi() {
  loadingScreen();
  resetData();

  try {
    const response = await fetch(BASE_URL);
    const responseJson = await response.json();

    setInitialData(responseJson);
    populateUrls();
    await getMonsterData();
    renderPokemons();
  } catch (err) {
    alert("Failed to load data from API.");
  }
}

/**
 * Resets global Pokémon data arrays to an empty state.
 */
function resetData() {
  pokemon.length = 0;
  pokemonDetails = [];
  urlPokemon = [];
}

/**
 * Sets up initial Pokémon list and UI navigation state.
 *
 * @param {Object} data - The JSON response from the Pokémon API.
 * @param {Array<Object>} data.results - The list of basic Pokémon info (name and URL).
 */
function setInitialData(data) {
  setInitialVariables();
  setNavigationUrl(data);
  initialButtonsOff();

  pokemon.push(...data.results);
  filteredPokemon = [...pokemon];
}

/**
 * Populates the `urlPokemon` array using the currently filtered Pokémon list.
 */
function populateUrls() {
  urlPokemon = filteredPokemon.map((p) => p.url);
}

/**
 * Fetches detailed data for each Pokémon in `urlPokemon` and pushes processed results into `pokemonDetails`.
 * On failure, alerts the user and reloads data from the API.
 */
async function getMonsterData() {
  try {
    const responses = await Promise.all(urlPokemon.map((url) => fetch(url).then((res) => res.json())));
    responses.forEach(pushMonsterData);
  } catch {
    alert("Please insert the full and correct name of your Pokémon");
    await loadDataFromApi();
  }
}

/**
 * Processes raw Pokémon data and pushes the transformed object into `pokemonDetails`.
 *
 * @param {Object} data - Raw JSON data for a single Pokémon from the API.
 */
function pushMonsterData(data) {
  const monster = prepareMonsterData(data);
  pokemonDetails.push(monster);
}

/**
 * Converts raw Pokémon API data into a structured object with formatted values.
 *
 * @param {Object} data - Raw JSON Pokémon data.
 * @returns {Object} A formatted Pokémon object containing name, id, height, weight, types, image, abilities, and moves.
 */
function prepareMonsterData(data) {
  return {
    name: capitalize(data.name),
    id: data.id.toString().padStart(4, "0"),
    height: +data.height,
    weight: data.weight,
    type: getTypes(data),
    img: data.sprites?.other?.["official-artwork"]?.front_default || "",
    abilities: getAbilities(data),
    moves: getMoves(data),
  };
}

/**
 * Renders all Pokémon in `pokemonDetails` into HTML cards within the DOM container.
 * Also attaches type rendering for each Pokémon card.
 */
function renderPokemons() {
  DOM.container.innerHTML = "";
  const html = pokemonDetails
    .map((poke, index) => {
      const card = pokemonDataInsert(poke.name, poke.id, poke.img, index);
      setTimeout(() => renderTypesGeneric(poke.type, `pokemonType${index}`, `monsterImg${index}`));
      return card;
    })
    .join("");
  DOM.container.innerHTML = html;
  disableloadingScreen();
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The string with the first character in uppercase.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
