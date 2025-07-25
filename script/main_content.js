function init() {
  loadingScreen();
  loadDataFromApi();
}

async function loadDataFromApi() {
  loadingScreen();
  resetData();
  await getServerResponse();
  setIntitialData(responseJsonBase);
  myInitialLoop();
  getMonsterData();
}

function setIntitialData(responseJsonBase) {
  setInitialVariables();
  setNavigationUrl(responseJsonBase);
  initialButtonsOff();
  pokemon.push(...responseJsonBase.results);
  filteredPokemon = pokemon;
  console.log(pokemon);
}

async function getServerResponse() {
  responseBase = await fetch(BASE_URL);
  responseJsonBase = await responseBase.json();
}

function resetData() {
  pokemon = [];
  pokemonDetails = [];
  urlPokemon = [];
}

function myInitialLoop() {
  for (let index = 0; index < filteredPokemon.length; index++) {
    urlPokemon.push(filteredPokemon[index].url);
  }
}

async function getMonsterData() {
  try {
    for (let indexUrl = 0; indexUrl < urlPokemon.length; indexUrl++) {
      let responseBase = await fetch(urlPokemon[indexUrl]);
      let responseJsonBase = await responseBase.json();
      pushMonsterData(responseJsonBase);
    }
  } catch (err) {
    loadDataFromApi();
    alert("Please insert the full and correct name of your Pokémon");
  }
  renderPokemons();
}

function pushMonsterData(responseJsonBase) {
  let object = prepareMonsterData(responseJsonBase);
  pokemonDetails.push(object);
}

function prepareMonsterData(responseJsonBase) {
  return {
    "name": responseJsonBase.name.charAt(0).toUpperCase() + responseJsonBase.name.slice(1),
    "id": responseJsonBase.id.toString().padStart(4, "0"),
    "height": responseJsonBase.height.toString() + 0,
    "weight": responseJsonBase.weight,
    "type": getTypes(responseJsonBase),
    "img": responseJsonBase.sprites.other["official-artwork"].front_default,
    "abilities": getAbilities(responseJsonBase),
    "moves": getMoves(responseJsonBase),
  };
}

function renderPokemons() {
  container.innerHTML = "";
  for (let indexPokemon = 0; indexPokemon < pokemonDetails.length; indexPokemon++) {
    getInsertData(pokemonDetails, indexPokemon);
  }
}

function getInsertData(pokemonDetails, indexPokemon) {
  let insertName = pokemonDetails[indexPokemon].name;
  let insertid = pokemonDetails[indexPokemon].id;
  let insertImg = pokemonDetails[indexPokemon].img;
  container.innerHTML += pokemonDataInsert(insertName, insertid, insertImg, indexPokemon);
  renderTypes(indexPokemon);
  disableloadingScreen();
}

function renderTypes(indexPokemon) {
  for (let indexTypes = 0; indexTypes < pokemonDetails[indexPokemon].type.length; indexTypes++) {
    let colorType = pokemonDetails[indexPokemon].type[0].name;
    let insertType = pokemonDetails[indexPokemon].type[indexTypes].name;
    document.getElementById(`pokemonType${indexPokemon}`).innerHTML += pokemonTypeInsert(insertType);
    document.getElementById(`monsterImg${indexPokemon}`).classList.add(colorType);
  }
}
