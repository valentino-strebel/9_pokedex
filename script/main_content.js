//all functions started on load
function init() {
  loadingScreen();
  loadDataFromApi();
}

//gets list of 20 Pokemons and pushes data to pokemon array
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

//turns off the  previous and to start buttons when not prev_url is given
function initialButtonsOff() {
  turnOffButton("backButtonOne");
  turnOffButton("backButtonTwo");
  turnOffButton("backStartOne");
  turnOffButton("backStartTwo");
}

//resets all data in DB arrays
function resetData() {
  pokemon = [];
  pokemonDetails = [];
  urlPokemon = [];
}

//loops through pokemon array and pushes URL pointing to data to urlPokemon array
function myInitialLoop() {
  for (let index = 0; index < filteredPokemon.length; index++) {
    urlPokemon.push(filteredPokemon[index].url);
  }
}

//gets all relevant data from urlPokemon and pushes objects into array pokemonDetails
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

//pushes data into pokemonDetails array
function pushMonsterData(responseJsonBase) {
  let object = {
    "name":
      responseJsonBase.name.charAt(0).toUpperCase() +
      responseJsonBase.name.slice(1),
    "id": responseJsonBase.id.toString().padStart(4, "0"),
    "height": responseJsonBase.height.toString() + 0,
    "weight": responseJsonBase.weight,
    "type": getTypes(responseJsonBase),
    "img": responseJsonBase.sprites.other["official-artwork"].front_default,
    "abilities": getAbilities(responseJsonBase),
    "moves": getMoves(responseJsonBase),
  };
  pokemonDetails.push(object);
}

//prepares data to be shown via innerHTML to website
function renderPokemons() {
  document.getElementById("container").innerHTML = "";
  for (
    let indexPokemon = 0;
    indexPokemon < pokemonDetails.length;
    indexPokemon++
  ) {
    getInsertData(pokemonDetails, indexPokemon);
  }
}

//create the data from the object array to be pushed
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

//prepares data of pokemon types
function renderTypes(indexPokemon) {
  for (
    let indexTypes = 0;
    indexTypes < pokemonDetails[indexPokemon].type.length;
    indexTypes++
  ) {
    let colorType = pokemonDetails[indexPokemon].type[0].name;
    let insertType = pokemonDetails[indexPokemon].type[indexTypes].name;
    document.getElementById(`pokemonType${indexPokemon}`).innerHTML +=
      pokemonTypeInsert(insertType);
    document
      .getElementById(`monsterImg${indexPokemon}`)
      .classList.add(colorType);
  }
}

//loops through abilities of Pokemon and prepares to be pushed to pokemonDetails array
function getAbilities(responseJsonBase) {
  let abilitiesArray = [];
  for (
    let indexAbilities = 0;
    indexAbilities < responseJsonBase.abilities.length;
    indexAbilities++
  ) {
    abilitiesArray.push({
      "name": responseJsonBase.abilities[indexAbilities].ability.name,
    });
  }
  return abilitiesArray;
}

//loops through types of Pokemon and prepares to be pushed to pokemonDetails array
function getTypes(responseJsonBase) {
  let typesArray = [];
  for (
    let indexTypes = 0;
    indexTypes < responseJsonBase.types.length;
    indexTypes++
  ) {
    typesArray.push({ "name": responseJsonBase.types[indexTypes].type.name });
  }
  return typesArray;
}

//loops through moves of Pokemon and prepares 4 to be pushed to pokemonDetails array
function getMoves(responseJsonBase) {
  let movesArray = [];
  if (!responseJsonBase.moves || responseJsonBase.moves.length === 0)
    return movesArray;
  for (let indexMoves = 0; indexMoves < 4; indexMoves++) {
    if (!responseJsonBase.moves[indexMoves]) break;
    movesArray.push({ "name": responseJsonBase.moves[indexMoves].move.name });
  }
  return movesArray;
}

//toggles d_none class
function toggleDNone(divId) {
  document.getElementById(divId).classList.toggle("d_none");
  document.getElementsByTagName("body")[0].classList.toggle("overflow");
}

//prevents event bubbling
function stopPropagation(event) {
  event.stopPropagation();
}

//turns off buttons to go back if let prev_null = empty
function turnOffButton(id) {
  if (prev_url == null) {
    document.getElementById(id).classList.add("d_none");
  } else {
    document.getElementById(id).classList.remove("d_none");
  }
}

//load next or previous page, depending on selected button. Next increases, Previous decreases BASE_URL
function newPage(selectedUrl) {
  BASE_URL = selectedUrl;
  if (BASE_URL == null) {
    return;
  } else {
    loadDataFromApi();
  }
}

// for back to start button
function backToStart() {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  loadDataFromApi();
}

// filters the loaded
function getFilterEntry(inputId) {
  let myValue = document.getElementById(inputId).value.toLowerCase();
  if (myValue == "") {
    loadDataFromApi();
  } else if (myValue.length < 3) {
    alert("Please enter more than 2 letters!");
  } else {
    filterForStuff(myValue);
  }
}

// changes filteredPokemon array to contain only the filtered result
function filterForStuff(filteredName) {
  filteredPokemon = pokemon.filter(function (fill) {
    return fill.name.includes(filteredName);
  });
  resetData();
  myInitialLoop();
  getMonsterData();
}

// filter globally. Only works if name is entered correctly and fully
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

//opens loading screen Overlay
function loadingScreen() {
  document.getElementById("overlayLoading").classList.remove("d_none");
  document.getElementsByTagName("body")[0].classList.add("overflow");
}

//closes loading screen Overlay
function disableloadingScreen() {
  document.getElementById("overlayLoading").classList.add("d_none");
  document.getElementsByTagName("body")[0].classList.remove("overflow");
}
