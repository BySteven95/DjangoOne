var NumGallinas = 0;
var NumDias = 0;
var Produccion = 1;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido');
const alerta = document.getElementById('alert');

btnOK.addEventListener('click', async function () {
  NumGallinas = Number(document.getElementById('NumGallinas').value);
  NumDias = Number(document.getElementById('NumDias').value);
  if (NumGallinas === 0 && NumDias === 0) {
    alerta.classList.remove('d-none');
    alerta.innerText = 'Debe ingresar una cifra válida en cada campo y esta no puede ser cero.'
  } else {
    alerta.classList.add('d-none');
    hacerCalculos(NumGallinas, NumDias);
  }
    mostrarResultados();
});

btnOK.addEventListener('click', function (event) {
  event.preventDefault();
  input1 = document.getElementById('NumGallinas');
  input2 = document.getElementById('NumDias');
  if (input1 !== null) {
    input1.value = '';
    input2.value = '';
  }
});

function factorialEnPaso(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialEnPaso(n - 1);
  }
}

function hacerCalculos(x, n) {
  for (var i = 1; i <= n; i++) {
    Produccion += Math.pow(x, i) / factorialEnPaso(i);
  }
  return Produccion;
}



function mostrarResultados() {
  contenido.innerHTML = `
    <p>La Producción de huevos fue de: ${Produccion} huevos</p> 
    <button class="buttons" id="BackAgain">Realizar el calculo de nuevo</button> 
  `;
  BackAgain.onclick = function () {
    location.assign("/JavaScript/Programa8");
  };
}

btnBACK.onclick = function () {
  location.assign("/JavaScript/Index");
}