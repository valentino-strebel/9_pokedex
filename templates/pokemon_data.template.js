/**
 * Generates the HTML string for a Pokémon card element.
 * Includes name, ID, image, and a container for type icons.
 *
 * @param {string} insertName - The name of the Pokémon.
 * @param {string} insertid - The formatted ID of the Pokémon (e.g. "0001").
 * @param {string} insertImg - URL of the Pokémon's image.
 * @param {number} indexPokemon - The index of the Pokémon in the list, used for element IDs and event handling.
 * @returns {string} HTML string representing a single Pokémon card.
 */
function pokemonDataInsert(insertName, insertid, insertImg, indexPokemon) {
  return `
  <div class="monsterContainer" onclick="toggleDNone('overlay'); showOverlayImage(${indexPokemon})"">
    <div class="monsterHeader">
      <p>${insertName}</p>
      <p>#${insertid}</p>
    </div>
    <div id="monsterImg${indexPokemon}" class="monsterImg">
      <img src="${insertImg}" alt="Image of Pokemon" />
    </div>
    <div id="pokemonType${indexPokemon}" class="typeIconContainer"></div>
  </div>
`;
}
