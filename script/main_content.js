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
  pokemon = [];
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
  for (const poke of filteredPokemon) {
    urlPokemon.push(poke.url);
  }
}

async function getMonsterData() {
  for (const url of urlPokemon) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      pushMonsterData(data);
    } catch {
      alert("Please insert the full and correct name of your Pokémon");
      await loadDataFromApi();
      return;
    }
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
    height: data.height + 0,
    weight: data.weight,
    type: getTypes(data),
    img: data.sprites?.other?.["official-artwork"]?.front_default || "",
    abilities: getAbilities(data),
    moves: getMoves(data),
  };
}

function renderPokemons() {
  container.innerHTML = "";
  pokemonDetails.forEach((poke, index) => {
    insertPokemonCard(poke, index);
  });
}

function insertPokemonCard(poke, index) {
  container.innerHTML += pokemonDataInsert(poke.name, poke.id, poke.img, index);
  renderTypes(index);
  disableloadingScreen();
}

function renderTypes(index) {
  const types = pokemonDetails[index].type;
  const typeContainer = document.getElementById(`pokemonType${index}`);
  const monsterImg = document.getElementById(`monsterImg${index}`);

  if (typeContainer && monsterImg) {
    types.forEach((type, idx) => {
      typeContainer.innerHTML += pokemonTypeInsert(type.name);
      if (idx === 0) {
        monsterImg.classList.add(type.name);
      }
    });
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
