function showOverlayImage(indexPokemon) {
  setVariablesOverlay(indexPokemon);

  DOM.overlayCard.innerHTML = pokemonOverlayInsert(
    overlayData.name,
    overlayData.id,
    overlayData.img,
    overlayData.weight,
    overlayData.height,
    indexPokemon
  );

  renderTypesGeneric(
    pokemonDetails[indexPokemon].type,
    `overPokemonType${indexPokemon}`,
    `overPokemonImage${indexPokemon}`
  );
}

function renderTypesGeneric(types, typeContainerId, imageElementId) {
  const typeContainer = document.getElementById(typeContainerId);
  const imageElement = document.getElementById(imageElementId);

  if (!types || !typeContainer || !imageElement) return;

  const html = types.map((t) => pokemonTypeInsertOver(t.name)).join("");
  typeContainer.innerHTML = html;
  imageElement.classList.add(types[0]?.name);
}

function buttonPlus(currentIndex) {
  const nextIndex = (currentIndex + 1) % pokemon.length;
  showOverlayImage(nextIndex);
}

function buttonMinus(currentIndex) {
  const prevIndex = (currentIndex - 1 + pokemon.length) % pokemon.length;
  showOverlayImage(prevIndex);
}
