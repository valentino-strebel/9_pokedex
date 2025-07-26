/**
 * Generates the HTML string for a Pokémon type icon to be used in the overlay view.
 *
 * @param {string} type - The name of the Pokémon type (e.g., "fire", "water").
 * @returns {string} HTML string representing a styled type icon container with its image.
 */
function pokemonTypeInsertOver(type) {
  return `
    <div class="typeIcon ${type}">
      <img src="./assets/img/icons/${type}.svg" alt="Type Icon">
    </div>
      `;
}
