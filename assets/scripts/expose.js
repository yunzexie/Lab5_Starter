// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get a reference to the image element
  let image = document.querySelectorAll('img');
  let horn_image = image[0];

  // Get a reference to the select element
  const select = document.querySelector("#horn-select");

  // Add an event listener to the select element that changes the image source when an option is selected
  select.addEventListener("change", () => {
    if (select.value == 'air-horn') {
      horn_image.src = `assets/images/air-horn.svg`;
      horn_image.alt = `Air horn selected`;
    } else if (select.value == 'car-horn') {
      horn_image.src = `assets/images/car-horn.svg`;
      horn_image.alt = `Car horn selected`;
    } else if (select.value == 'party-horn') {
      horn_image.src = `assets/images/party-horn.svg`;
      horn_image.alt = `Party horn selected`;
    } else {
      return;
    }
    
  });

}