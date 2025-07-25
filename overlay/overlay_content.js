function showOverlayImage(indexPokemon) {
  setVariables(indexPokemon);
  document.getElementById("overlayCard").innerHTML = pokemonOverlayInsert(
    insertName,
    insertid,
    insertImg,
    insertWeight,
    insertHeight,
    indexPokemon
  );
  renderTypesOverlay(indexPokemon);
}

function renderTypesOverlay(indexPokemon) {
  for (let indexTypes = 0; indexTypes < pokemonDetails[indexPokemon].type.length; indexTypes++) {
    let colorType = pokemonDetails[indexPokemon].type[0].name;
    let insertType = pokemonDetails[indexPokemon].type[indexTypes].name;
    document.getElementById(`overPokemonType${indexPokemon}`).innerHTML += pokemonTypeInsertOver(insertType);
    document.getElementById(`overPokemonImage${indexPokemon}`).classList.add(colorType);
  }
}

function buttonPlus(insertedId) {
  insertedId++;
  if (insertedId >= pokemon.length) {
    insertedId = 0;
    showOverlayImage(insertedId);
  } else {
    showOverlayImage(insertedId);
  }
}

function buttonMinus(insertedId) {
  insertedId--;
  if (insertedId < 0) {
    insertedId = pokemon.length - 1;
    showOverlayImage(insertedId);
  } else {
    showOverlayImage(insertedId);
  }
}
