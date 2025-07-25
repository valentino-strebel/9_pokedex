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
