/**
 * Generates the HTML string for the Pokémon overlay card.
 * Includes detailed Pokémon information such as name, ID, image, type, height, and weight,
 * along with navigation buttons for viewing next/previous Pokémon.
 *
 * @param {string} insertName - The name of the Pokémon.
 * @param {string} insertid - The formatted ID of the Pokémon (e.g. "0001").
 * @param {string} insertImg - URL of the Pokémon's official artwork.
 * @param {number} insertWeight - The Pokémon's weight in kilograms.
 * @param {number} insertHeight - The Pokémon's height in centimeters.
 * @param {number} indexPokemon - The index of the Pokémon in the list, used for element IDs and button handlers.
 * @returns {string} HTML string representing the detailed overlay card for a Pokémon.
 */
function pokemonOverlayInsert(insertName, insertid, insertImg, insertWeight, insertHeight, indexPokemon) {
  return `
    <div class="overMonsterContainer">
      <div class="monsterHeader">
        <p>${insertName}</p>
        <p>#${insertid}</p>
      </div>
      <div id="overPokemonImage${indexPokemon}" class="monsterImg">
        <img src="${insertImg}" alt="Image of Pokemon" />
      </div>
      <div
        id="overPokemonType${indexPokemon}"
        class="typeIconContainer"
      ></div>
      <div class="overMonsterDetails">
        <table>
          <tr>
            <td> Species: ${insertName} </td>
          </tr>
          <tr>
            <td> Height: ${insertHeight} cm</td>
          </tr>
          <tr>
            <td> Weight: ${insertWeight} kg</td>
          </tr>
        </table>
      </div>
      <div class="buttonArea">
        <button class="nextButtons" onclick="buttonMinus(${indexPokemon})"><</button>
        <button class="nextButtons" onclick="buttonPlus(${indexPokemon})">></button>
      </div>
    </div>
  `;
}
