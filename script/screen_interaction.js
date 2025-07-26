/**
 * Toggles the visibility of a navigation button based on the presence of `prev_url`.
 *
 * @param {string} id - The key of the button in `DOM.buttons` to be toggled.
 */
function turnOffButton(id) {
  const button = DOM.buttons[id];
  if (!button) return;

  if (prev_url == null) {
    button.classList.add("d_none");
  } else {
    button.classList.remove("d_none");
  }
}

/**
 * Sets the `BASE_URL` to the provided URL and loads a new page of Pokémon data.
 *
 * @param {string} selectedUrl - The URL for the new API page to fetch.
 */
function newPage(selectedUrl) {
  if (!selectedUrl) return;

  BASE_URL = selectedUrl;
  loadDataFromApi();
}

/**
 * Resets the `BASE_URL` to the original endpoint and reloads the first page of data.
 */
function backToStart() {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  loadDataFromApi();
}

/**
 * Displays the loading screen overlay and prevents body scrolling.
 */
function loadingScreen() {
  DOM.overlayLoading?.classList.remove("d_none");
  DOM.body?.classList.add("overflow");
}

/**
 * Hides the loading screen overlay and restores normal body scrolling.
 */
function disableloadingScreen() {
  DOM.overlayLoading?.classList.add("d_none");
  DOM.body?.classList.remove("overflow");
}

/**
 * Hides all navigation buttons in the `DOM.buttons` object by calling `turnOffButton` on each.
 */
function initialButtonsOff() {
  Object.keys(DOM.buttons).forEach(turnOffButton);
}
