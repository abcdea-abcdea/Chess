let variantes = {};
let varianteSeleccionada = null;

async function cargarVariantes() {
  // Ejemplo: carga variantes desde archivos JSON
  variantes['ajedrez'] = await fetch('variants/standard.json').then(res => res.json());
  variantes['variante1'] = await fetch('variants/variante1.json').then(res => res.json());
  
  const selector = document.getElementById('variantSelector');
  for (const v in variantes) {
    let option = document.createElement('option');
    option.value = v;
    option.textContent = v;
    selector.appendChild(option);
  }
}

function iniciarPartida() {
  varianteSeleccionada = document.getElementById('variantSelector').value;
  const config = variantes[varianteSeleccionada];
  // Aquí creas el tablero y lógica con config
  console.log('Iniciando variante:', varianteSeleccionada, config);
}

document.getElementById('startBtn').addEventListener('click', iniciarPartida);

cargarVariantes();
