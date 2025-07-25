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
