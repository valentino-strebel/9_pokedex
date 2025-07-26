/**
 * Toggles the visibility of a DOM element and the body's scroll behavior.
 * Adds or removes the `d_none` class to the element and `overflow` class to the body.
 *
 * @param {string} divId - The ID of the element to toggle.
 */
function toggleDNone(divId) {
  const div = document.getElementById(divId);
  if (!div) return;

  div.classList.toggle("d_none");
  DOM.body?.classList.toggle("overflow");
}

/**
 * Stops an event from propagating to parent elements.
 *
 * @param {Event} event - The event to stop propagation on.
 */
const stopPropagation = (event) => event.stopPropagation();
