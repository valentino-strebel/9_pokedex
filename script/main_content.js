async function init() {
  loadingScreen();
  await loadDataFromApi();
}

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

function resetData() {
  pokemon.length = 0;
  pokemonDetails = [];
  urlPokemon = [];
}

function setInitialData(data) {
  setInitialVariables();
  setNavigationUrl(data);
  initialButtonsOff();

  pokemon.push(...data.results);
  filteredPokemon = [...pokemon];
}

function populateUrls() {
  urlPokemon = filteredPokemon.map((p) => p.url);
}

async function getMonsterData() {
  try {
    const responses = await Promise.all(urlPokemon.map((url) => fetch(url).then((res) => res.json())));
    responses.forEach(pushMonsterData);
  } catch {
    alert("Please insert the full and correct name of your Pokémon");
    await loadDataFromApi();
  }
}

function pushMonsterData(data) {
  const monster = prepareMonsterData(data);
  pokemonDetails.push(monster);
}

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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
