function init() {
  loadingScreen();
  loadDataFromApi();
}

async function loadDataFromApi() {
  loadingScreen();
  resetData();
  let responseBase = await fetch(BASE_URL);
  let responseJsonBase = await responseBase.json();
  next_url = responseJsonBase.next;
  prev_url = responseJsonBase.previous;
  initialButtonsOff();
  pokemon.push(...responseJsonBase.results);
  filteredPokemon = pokemon;
  console.log(pokemon);
  myInitialLoop();
  getMonsterData();
}

function initialButtonsOff() {
  turnOffButton("backButtonOne");
  turnOffButton("backButtonTwo");
  turnOffButton("backStartOne");
  turnOffButton("backStartTwo");
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
  document.getElementById("container").innerHTML = "";
  for (let indexPokemon = 0; indexPokemon < pokemonDetails.length; indexPokemon++) {
    getInsertData(pokemonDetails, indexPokemon);
  }
}

function getInsertData(pokemonDetails, indexPokemon) {
  let insertName = pokemonDetails[indexPokemon].name;
  let insertid = pokemonDetails[indexPokemon].id;
  let insertImg = pokemonDetails[indexPokemon].img;
  document.getElementById("container").innerHTML += pokemonDataInsert(
    insertName,
    insertid,
    insertImg,
    indexPokemon
  );
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

function toggleDNone(divId) {
  document.getElementById(divId).classList.toggle("d_none");
  document.getElementsByTagName("body")[0].classList.toggle("overflow");
}

function stopPropagation(event) {
  event.stopPropagation();
}

function turnOffButton(id) {
  if (prev_url == null) {
    document.getElementById(id).classList.add("d_none");
  } else {
    document.getElementById(id).classList.remove("d_none");
  }
}

function newPage(selectedUrl) {
  BASE_URL = selectedUrl;
  if (BASE_URL == null) {
    return;
  } else {
    loadDataFromApi();
  }
}

function backToStart() {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  loadDataFromApi();
}

function getFilterEntry(inputId) {
  let myValue = "";
  myValue = document.getElementById(inputId).value.toLowerCase();
  console.log(myValue);
  if (myValue == "") {
    loadDataFromApi();
  } else if (myValue.length < 3) {
    alert("Please enter more than 2 letters!");
  } else {
    filterForStuff(myValue);
  }
}

function filterForStuff(filteredName) {
  filteredPokemon = pokemon.filter(function (fill) {
    return fill.name.includes(filteredName);
  });
  resetData();
  myInitialLoop();
  getMonsterData();
}

function getFilterGlobal(inputId) {
  let myValue = document.getElementById(inputId).value.toLowerCase();
  if (myValue == "") {
    loadDataFromApi();
  } else {
    resetData();
    urlPokemon.push("https://pokeapi.co/api/v2/pokemon/" + myValue);
    getMonsterData();
  }
}

function loadingScreen() {
  document.getElementById("overlayLoading").classList.remove("d_none");
  document.getElementsByTagName("body")[0].classList.add("overflow");
}

function disableloadingScreen() {
  document.getElementById("overlayLoading").classList.add("d_none");
  document.getElementsByTagName("body")[0].classList.remove("overflow");
}
