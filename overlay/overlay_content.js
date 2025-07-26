/**
 * Displays the overlay card with Pokémon details at the given index.
 * Sets the overlay data and renders HTML content including types.
 *
 * @param {number} indexPokemon - The index of the Pokémon in the `pokemonDetails` array.
 */
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

/**
 * Renders Pokémon types into a specific container and applies a class to the image.
 *
 * @param {Array<{name: string}>} types - An array of type objects, each with a `name` property.
 * @param {string} typeContainerId - The ID of the DOM element where type badges will be inserted.
 * @param {string} imageElementId - The ID of the image element to which the primary type class will be added.
 */
function renderTypesGeneric(types, typeContainerId, imageElementId) {
  const typeContainer = document.getElementById(typeContainerId);
  const imageElement = document.getElementById(imageElementId);

  if (!types || !typeContainer || !imageElement) return;

  const html = types.map((t) => pokemonTypeInsertOver(t.name)).join("");
  typeContainer.innerHTML = html;
  imageElement.classList.add(types[0]?.name);
}

/**
 * Advances to the next Pokémon in the overlay, wrapping to the start if at the end.
 *
 * @param {number} currentIndex - The current index of the displayed Pokémon.
 */
function buttonPlus(currentIndex) {
  const nextIndex = (currentIndex + 1) % pokemon.length;
  showOverlayImage(nextIndex);
}

/**
 * Moves to the previous Pokémon in the overlay, wrapping to the end if at the start.
 *
 * @param {number} currentIndex - The current index of the displayed Pokémon.
 */
function buttonMinus(currentIndex) {
  const prevIndex = (currentIndex - 1 + pokemon.length) % pokemon.length;
  showOverlayImage(prevIndex);
}
