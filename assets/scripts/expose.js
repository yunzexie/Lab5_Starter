// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Option to image and audio
  const image = document.querySelectorAll('img');
  const horn_image = image[0];
  const select = document.querySelector("#horn-select");
  const audio = document.querySelector('.hidden');
  // Click and play
  const button = document.querySelector("button");
  // Sound Bar
  const input = document.querySelectorAll('.volume');
  const speaker_image = image[1];

  select.addEventListener("change", () => {
    if (select.value == 'air-horn') {
      horn_image.src = `assets/images/air-horn.svg`;
      horn_image.alt = `Air horn selected`;
      audio.src = "assets/audio/air-horn.mp3";
    } else if (select.value == 'car-horn') {
      horn_image.src = `assets/images/car-horn.svg`;
      horn_image.alt = `Car horn selected`;
      audio.src = "assets/audio/car-horn.mp3";
    } else if (select.value == 'party-horn') {
      horn_image.src = `assets/images/party-horn.svg`;
      horn_image.alt = `Party horn selected`;
      audio.src = "assets/audio/party-horn.mp3";
    } else {
      audio.src = "";
      return;
    }
  });

  button.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });

  input.addEventListener("input", (event) => {
    if (input.value == 0) {
      speaker_image.src = `assets/icons/volume-level-0.svg`;
      speaker_image.alt = `Muted`;
    } else if (input.value == 0) {
      speaker_image.src = `assets/icons/volume-level-0.svg`;
      speaker_image.alt = `Muted`;
    } else if (input.value == 0) {
      speaker_image.src = `assets/icons/volume-level-0.svg`;
      speaker_image.alt = `Muted`;
    } else if (input.value == 0) {
      speaker_image.src = `assets/icons/volume-level-0.svg`;
      speaker_image.alt = `Muted`;
    } else {
      return;
    }
  });

}