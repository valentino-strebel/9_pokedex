function turnOffButton(id) {
  const button = DOM.buttons[id];
  if (!button) return;

  if (prev_url == null) {
    button.classList.add("d_none");
  } else {
    button.classList.remove("d_none");
  }
}

function newPage(selectedUrl) {
  if (!selectedUrl) return;

  BASE_URL = selectedUrl;
  loadDataFromApi();
}

function backToStart() {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  loadDataFromApi();
}

function loadingScreen() {
  DOM.overlayLoading?.classList.remove("d_none");
  DOM.body?.classList.add("overflow");
}

function disableloadingScreen() {
  DOM.overlayLoading?.classList.add("d_none");
  DOM.body?.classList.remove("overflow");
}

function initialButtonsOff() {
  Object.keys(DOM.buttons).forEach(turnOffButton);
}
