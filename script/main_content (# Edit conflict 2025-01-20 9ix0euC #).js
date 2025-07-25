let BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

function init() {
  loadDataFromApi();
}

async function loadDataFromApi() {
  let responseBase = await fetch(BASE_URL);
  let responseJsonBase = await responseBase.json();
  pokemon.push(responseJsonBase.results);
  myInitialLoop();
  getMonsterData();
}

function myInitialLoop() {
  for (let index = 0; index < pokemon[0].length; index++) {
    urlPokemon.push(pokemon[0][index].url);
  }
}

async function getMonsterData() {
  for (let indexUrl = 0; indexUrl < urlPokemon.length; indexUrl++) {
    let responseBase = await fetch(urlPokemon[indexUrl]);
    let responseJsonBase = await responseBase.json();
    let object = {
      "name": responseJsonBase.name.charAt(0).toUpperCase() + responseJsonBase.name.slice(1),
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
  renderPokemons();
}

function renderPokemons() {
  for (let indexPokemon = 0; indexPokemon < pokemonDetails.length; indexPokemon++) {
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
  }
}

function renderTypes(indexPokemon) {
  for (let indexTypes = 0; indexTypes < pokemonDetails[indexPokemon].type.length; indexTypes++) {
    let colorType = pokemonDetails[indexPokemon].type[0].name;
    let insertType = pokemonDetails[indexPokemon].type[indexTypes].name;
    document.getElementById(`pokemonType${indexPokemon}`).innerHTML += pokemonTypeInsert(insertType);
    document.getElementById(`monsterImg${indexPokemon}`).classList.add(colorType);
  }
}

function getAbilities(responseJsonBase) {
  let abilitiesArray = [];
  for (let indexAbilities = 0; indexAbilities < responseJsonBase.abilities.length; indexAbilities++) {
    abilitiesArray.push({
      "name": responseJsonBase.abilities[indexAbilities].ability.name,
    });
  }
  return abilitiesArray;
}

function getTypes(responseJsonBase) {
  let typesArray = [];
  for (let indexTypes = 0; indexTypes < responseJsonBase.types.length; indexTypes++) {
    typesArray.push({ "name": responseJsonBase.types[indexTypes].type.name });
  }
  return typesArray;
}

function getMoves(responseJsonBase) {
  let movesArray = [];
  for (let indexMoves = 0; indexMoves < 4; indexMoves++) {
    movesArray.push({ "name": responseJsonBase.moves[indexMoves].move.name });
  }
  return movesArray;
}

function toggleDNone(divId) {
  document.getElementById(divId).classList.toggle("d_none");
  document.getElementsByTagName("body")[0].classList.toggle("overflow");
}

function stopPropagation(event) {
  event.stopPropagation();
}
