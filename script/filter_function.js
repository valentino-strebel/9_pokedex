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

async function loadAndRenderFilteredData() {
  pokemonDetails = [];
  await getMonsterData();
  renderPokemons();
}
