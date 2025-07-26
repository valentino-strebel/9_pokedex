function getAbilities(data) {
  return data.abilities?.map((a) => ({ name: a.ability.name })) || [];
}

function getTypes(data) {
  return data.types?.map((t) => ({ name: t.type.name })) || [];
}

function getMoves(data) {
  return data.moves?.slice(0, 4).map((m) => ({ name: m.move.name })) || [];
}
