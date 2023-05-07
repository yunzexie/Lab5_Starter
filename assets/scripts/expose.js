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
  const volume_input = document.getElementById('volume');
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
    const audio_volume = volume_input.value/100;
    audio.currentTime = 0;
    audio.volume = audio_volume;
    audio.play();
  });

  volume_input.addEventListener("input", () => {
    if (volume_input.value == 0) {
      speaker_image.src = `assets/icons/volume-level-0.svg`;
      speaker_image.alt = `Muted`;
    } else if (volume_input.value > 0 && volume_input.value < 33) {
      speaker_image.src = `assets/icons/volume-level-1.svg`;
      speaker_image.alt = `Volume level 1`;
    } else if (volume_input.value >= 33 && volume_input.value < 67) {
      speaker_image.src = `assets/icons/volume-level-2.svg`;
      speaker_image.alt = `Volume level 2`;
    } else if (volume_input.value >= 67) {
      speaker_image.src = `assets/icons/volume-level-3.svg`;
      speaker_image.alt = `Volume level 3`;
    } else {
      return;
    }
  });

}