function toggleDNone(divId) {
  let div = document.getElementById(divId);
  let body = document.body;
  if (div) {
    div.classList.toggle("d_none");
    body.classList.toggle("overflow");
  }
}

const stopPropagation = (event) => event.stopPropagation();
