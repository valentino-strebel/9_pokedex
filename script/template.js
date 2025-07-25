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

function pokemonTypeInsert(type) {
  return `
    <div class="typeIcon ${type}">
      <img src="./assets/img/icons/${type}.svg" alt="Type Icon">
    </div>
      `;
}

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

function pokemonTypeInsertOver(type) {
  return `
    <div class="typeIcon ${type}">
      <img src="./assets/img/icons/${type}.svg" alt="Type Icon">
    </div>
      `;
}
