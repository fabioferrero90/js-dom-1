const elements = {
  lamp: document.getElementById('lamp'),
  toggleButton: document.getElementById('toggle'),
  alert: document.querySelector('.alert'),
  body: document.querySelector('body'),
  info: document.querySelector('.container > p'),
  container: document.querySelector('.container')
};

const getLampLife = () => Math.ceil(Math.random() * (10 - 4) + 4);
let lightsOff = true;
let lampLife = getLampLife();

elements.toggleButton.addEventListener('click', () => {
  if (elements.toggleButton.innerHTML !== "Cambia la lampadina") {
    lightsOff ? turnOnLamp() : turnOffLamp();
    lightsOff = !lightsOff;
  } else {
    resetLamp();
  }
});

function turnOnLamp() {
  if (lampLife > 0) {
    elements.lamp.src = "./assets/img/yellow_lamp.png";
    elements.lamp.classList.add('reverse');
    setLightMode("white", "black");
    elements.toggleButton.innerHTML = "Spegni la luce";
    lampLife--;
  } else {
    elements.lamp.src = "./assets/img/broken-lamp.png";
    elements.alert.classList.remove('d_none');
    elements.toggleButton.innerHTML = "Cambia la lampadina";
  }
}

function turnOffLamp() {
  elements.lamp.src = "./assets/img/white_lamp.png";
  elements.lamp.classList.remove('reverse');
  setLightMode("black", "white");
  elements.toggleButton.innerHTML = "Accendi la luce";
}

function resetLamp() {
  lampLife = getLampLife();
  elements.lamp.src = "./assets/img/white_lamp.png";
  elements.alert.classList.add('d_none');
  elements.toggleButton.innerHTML = "Accendi la luce";
  lightsOff = true;
}

function setLightMode(backgroundColor, textColor) {
  elements.body.style.backgroundColor = backgroundColor;
  elements.info.style.color = textColor;
  elements.container.style.borderColor = textColor;
}