// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const play_button = document.querySelector("button");
  const inputTxt = document.querySelector("textarea");
  const voiceSelect = document.querySelector("select");
  let voices = [];

  const imgs = document.querySelectorAll("img");
  const smile_img = imgs[0];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  play_button.addEventListener("click", (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = 
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.onstart = () => {
      smile_img.src = "assets/images/smiling-open.png";
      smile_img.alt = 'Smiling face open';
    };
    utterThis.onend = () => {
      smile_img.src = "assets/images/smiling.png";
      smile_img.alt = 'Smiling face';
    };
    synth.speak(utterThis);

    inputTxt.blur();
  });
}
