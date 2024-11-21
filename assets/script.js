const lamp = document.getElementById('lamp')
const toggleButton = document.getElementById('toggle')
let lightsOff = true

toggleButton.addEventListener('click', () => {
  lightsOff ? turnOnLamp() : turnOffLamp();
  lightsOff = !lightsOff
})

function turnOnLamp() {
  lamp.src = "./assets/img/yellow_lamp.png";
  lamp.classList.add('reverse')
  toggleButton.innerHTML = "Spegni la luce"
}

function turnOffLamp() {
  lamp.src = "./assets/img/white_lamp.png";
  lamp.classList.remove('reverse')
  toggleButton.innerHTML = "Accendi la luce"
}