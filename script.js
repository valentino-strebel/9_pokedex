function toggleDNone(divId) {
  const div = document.getElementById(divId);
  if (!div) return;

  div.classList.toggle("d_none");
  DOM.body?.classList.toggle("overflow");
}

const stopPropagation = (event) => event.stopPropagation();
