function toggleDNone(divId) {
  document.getElementById(divId).classList.toggle("d_none");
  document.getElementsByTagName("body")[0].classList.toggle("overflow");
}

function stopPropagation(event) {
  event.stopPropagation();
}
