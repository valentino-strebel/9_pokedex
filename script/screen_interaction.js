function turnOffButton(id) {
  if (prev_url == null) {
    document.getElementById(id).classList.add("d_none");
  } else {
    document.getElementById(id).classList.remove("d_none");
  }
}

function newPage(selectedUrl) {
  BASE_URL = selectedUrl;
  if (BASE_URL == null) {
    return;
  } else {
    loadDataFromApi();
  }
}

function backToStart() {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  loadDataFromApi();
}

function loadingScreen() {
  document.getElementById("overlayLoading").classList.remove("d_none");
  document.getElementsByTagName("body")[0].classList.add("overflow");
}

function disableloadingScreen() {
  document.getElementById("overlayLoading").classList.add("d_none");
  document.getElementsByTagName("body")[0].classList.remove("overflow");
}
