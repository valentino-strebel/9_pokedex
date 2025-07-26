/**
 * Extracts and returns the list of abilities from Pokémon API data.
 *
 * @param {Object} data - The raw Pokémon data object from the API.
 * @param {Array<Object>} data.abilities - List of ability objects.
 * @returns {Array<{name: string}>} An array of ability objects with only the name.
 */
function getAbilities(data) {
  return data.abilities?.map((a) => ({ name: a.ability.name })) || [];
}

/**
 * Extracts and returns the list of types from Pokémon API data.
 *
 * @param {Object} data - The raw Pokémon data object from the API.
 * @param {Array<Object>} data.types - List of type objects.
 * @returns {Array<{name: string}>} An array of type objects with only the name.
 */
function getTypes(data) {
  return data.types?.map((t) => ({ name: t.type.name })) || [];
}

/**
 * Extracts and returns up to 4 moves from Pokémon API data.
 *
 * @param {Object} data - The raw Pokémon data object from the API.
 * @param {Array<Object>} data.moves - List of move objects.
 * @returns {Array<{name: string}>} An array of up to 4 move objects with only the name.
 */
function getMoves(data) {
  return data.moves?.slice(0, 4).map((m) => ({ name: m.move.name })) || [];
}
