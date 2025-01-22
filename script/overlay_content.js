//show the large overlay  when click on pokemon card
function showOverlayImage(indexPokemon) {
  let insertName = pokemonDetails[indexPokemon].name;
  let insertid = pokemonDetails[indexPokemon].id;
  let insertImg = pokemonDetails[indexPokemon].img;
  let insertWeight = pokemonDetails[indexPokemon].weight;
  let insertHeight = pokemonDetails[indexPokemon].height;
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

//prepare the types to be pushed on the overlay and the background color
function renderTypesOverlay(indexPokemon) {
  for (
    let indexTypes = 0;
    indexTypes < pokemonDetails[indexPokemon].type.length;
    indexTypes++
  ) {
    let colorType = pokemonDetails[indexPokemon].type[0].name;
    let insertType = pokemonDetails[indexPokemon].type[indexTypes].name;
    document.getElementById(`overPokemonType${indexPokemon}`).innerHTML +=
      pokemonTypeInsertOver(insertType);
    document
      .getElementById(`overPokemonImage${indexPokemon}`)
      .classList.add(colorType);
  }
}

//moves to next card in overlay
function buttonPlus(insertedId) {
  insertedId++;
  if (insertedId >= pokemon.length) {
    insertedId = 0;
    showOverlayImage(insertedId);
  } else {
    showOverlayImage(insertedId);
  }
}

//moves to previous card in overlay
function buttonMinus(insertedId) {
  insertedId--;
  if (insertedId < 0) {
    insertedId = pokemon.length - 1;
    showOverlayImage(insertedId);
  } else {
    showOverlayImage(insertedId);
  }
}
