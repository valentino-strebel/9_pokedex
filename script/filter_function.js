async function getFilterEntry(inputId) {
  const myValue = document.getElementById(inputId).value.toLowerCase();
  console.log(myValue);

  if (myValue === "") {
    await loadDataFromApi();
  } else if (myValue.length < 3) {
    alert("Please enter more than 2 letters!");
  } else {
    await filterByName(myValue);
  }
}

async function filterByName(filteredName) {
  filteredPokemon = pokemon.filter((p) => p.name.includes(filteredName));
  urlPokemon = filteredPokemon.map((p) => p.url);

  pokemonDetails = [];
  await getMonsterData();
  renderPokemons();
}

async function getFilterGlobal(inputId) {
  const myValue = document.getElementById(inputId).value.toLowerCase();

  if (myValue === "") {
    await loadDataFromApi();
  } else {
    resetData();
    urlPokemon.push(`${BASE_URL}${myValue}`); // assumes BASE_URL ends with `/pokemon/`
    await getMonsterData();
    renderPokemons();
  }
}
