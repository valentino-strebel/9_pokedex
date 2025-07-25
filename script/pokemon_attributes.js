function getAbilities(responseJsonBase) {
  let abilitiesArray = [];
  for (let indexAbilities = 0; indexAbilities < responseJsonBase.abilities.length; indexAbilities++) {
    abilitiesArray.push({
      "name": responseJsonBase.abilities[indexAbilities].ability.name,
    });
  }
  return abilitiesArray;
}

function getTypes(responseJsonBase) {
  let typesArray = [];
  for (let indexTypes = 0; indexTypes < responseJsonBase.types.length; indexTypes++) {
    typesArray.push({ "name": responseJsonBase.types[indexTypes].type.name });
  }
  return typesArray;
}

function getMoves(responseJsonBase) {
  let movesArray = [];
  if (!responseJsonBase.moves || responseJsonBase.moves.length === 0) return movesArray;
  for (let indexMoves = 0; indexMoves < 4; indexMoves++) {
    if (!responseJsonBase.moves[indexMoves]) break;
    movesArray.push({ "name": responseJsonBase.moves[indexMoves].move.name });
  }
  return movesArray;
}
