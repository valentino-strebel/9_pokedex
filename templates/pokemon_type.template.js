/**
 * Generates the HTML string for a Pokémon type icon to be used in the main card view.
 *
 * @param {string} type - The name of the Pokémon type (e.g., "grass", "electric").
 * @returns {string} HTML string representing a styled type icon with its corresponding image.
 */
function pokemonTypeInsert(type) {
  return `
    <div class="typeIcon ${type}">
      <img src="./assets/img/icons/${type}.svg" alt="Type Icon">
    </div>
      `;
}
