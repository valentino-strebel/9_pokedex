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
