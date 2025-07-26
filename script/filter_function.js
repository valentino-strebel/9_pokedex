/**
 * Filters the Pokémon list based on a partial name input (case-insensitive).
 * If the input is empty, it either loads from the API or re-renders the current list.
 * If the input has less than 3 characters, an alert is shown.
 * Otherwise, it filters and renders the matching Pokémon.
 *
 * @param {string} inputId - The ID of the input element containing the partial name.
 */
async function filterByPartialName(inputId) {
  const inputValue = document.getElementById(inputId).value.toLowerCase();

  if (!inputValue) {
    if (pokemon.length === 0) await loadDataFromApi();
    else renderPokemons();
    return;
  }

  if (inputValue.length < 3) {
    alert("Please enter more than 2 letters!");
    return;
  }

  filteredPokemon = pokemon.filter((p) => p.name.includes(inputValue));
  urlPokemon = filteredPokemon.map((p) => p.url);
  await loadAndRenderFilteredData();
}

/**
 * Filters the Pokémon list by exact name match.
 * If the input is empty, it loads all Pokémon from the API.
 * Otherwise, it resets the current data and fetches the Pokémon by name.
 *
 * @param {string} inputId - The ID of the input element containing the exact name.
 */
async function filterByExactName(inputId) {
  const inputValue = document.getElementById(inputId).value.toLowerCase();

  if (!inputValue) {
    await loadDataFromApi();
    return;
  }

  resetData();
  urlPokemon.push(`${BASE_URL}/${inputValue}`);
  await loadAndRenderFilteredData();
}

/**
 * Loads detailed Pokémon data from `urlPokemon` and renders them to the DOM.
 * This clears the `pokemonDetails` array before fetching.
 */
async function loadAndRenderFilteredData() {
  pokemonDetails = [];
  await getMonsterData();
  renderPokemons();
}
