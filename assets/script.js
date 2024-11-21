const lamp = document.getElementById('lamp');
const toggleButton = document.getElementById('toggle');
const alert = document.querySelector('.alert');
const getLampLife = () => Math.ceil(Math.random() * (10 - 4) + 4);

let lightsOff = true;
let lampLife = getLampLife();

toggleButton.addEventListener('click', () => {
  if (toggleButton.innerHTML !== "Cambia la lampadina") {
    lightsOff ? turnOnLamp() : turnOffLamp();
    lightsOff = !lightsOff;
  } else {
    lampLife = getLampLife()
    lamp.src = "./assets/img/white_lamp.png";
    alert.classList.add('d_none');
    toggleButton.innerHTML = "Accendi la luce";
    lightsOff = true;
  }
})

function turnOnLamp() {
  if (lampLife > 0) {
    lamp.src = "./assets/img/yellow_lamp.png";
    lamp.classList.add('reverse');
    toggleButton.innerHTML = "Spegni la luce";
    lampLife--;
  } else {
    lamp.src = "./assets/img/broken-lamp.png";
    alert.classList.remove('d_none');
    toggleButton.innerHTML = "Cambia la lampadina";
  }
}

function turnOffLamp() {
  lamp.src = "./assets/img/white_lamp.png";
  lamp.classList.remove('reverse');
  toggleButton.innerHTML = "Accendi la luce";
}