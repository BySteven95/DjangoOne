var Cantidad = 0;
var NumerosPositivos = 0;
var NumerosNegativos = 0;
var NumerosNeutros = 0;
var sumaPositivos = 0;
var sumaNegativos = 0;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido');
const alerta = document.getElementById('alert');

btnOK.addEventListener('click', async function () {
  Cantidad = Number(document.getElementById('Cantidad').value);
  if (Cantidad === 0) {
    alerta.classList.remove('d-none');
    alerta.innerText = 'Debe ingresar una cifra válida y esta no puede ser cero.'
  } else {
    alerta.classList.add('d-none');
    await ingresoNumeros(); // Esperar a que ingresoNumeros termine
    mostrarResultados();
  }
});

btnOK.addEventListener('click', function (event) {
  event.preventDefault();

  input1 = document.getElementById('Cantidad');
  if (input1 !== null) {
    input1.value = '';
  }
});

async function ingresoNumeros() {
  for (let i = 0; i < Cantidad; i++) {
    await new Promise((resolve) => {
      contenido.innerHTML = `
        <p>Ingrese un número positivo, negativo o neutro</p> 
        <input type="number" class="buttons" id="Numero${i}" required>
        <button class="buttons" type="submit" id="btnAdd">OK</button>
      `;
      document.getElementById('btnAdd').onclick = function () {
        agregarNumero(i);
        resolve(); // Resuelve la promesa después de hacer clic en el botón
      };
    });
  }
}

function agregarNumero(i) {
  // Solicitar al usuario un número
  const numero = Number(document.getElementById(`Numero${i}`).value);
  console.log(numero);
  // Analizar el número y actualizar contadores y sumas
  if (numero > 0) {
    NumerosPositivos++;
    sumaPositivos += numero;
  } else if (numero < 0) {
    NumerosNegativos++;
    sumaNegativos += numero;
  } else {
    NumerosNeutros++;
  }
}

function mostrarResultados(){
  contenido.innerHTML = `
    <p>La Cantidad de Numeros Positivos fue: ${NumerosPositivos}</p> 
    <p>La Cantidad de Numeros Negativos fue: ${NumerosNegativos}</p>
    <p>La Cantidad de Numeros Neutros fue: ${NumerosNeutros}</p> 
    <p>La Sumatoria de Numeros Positivos fue: ${sumaPositivos}</p>
    <p>La Sumatoria de Numeros Negativos fue: ${sumaNegativos}</p>
    <button class="buttons" id="BackAgain">Realizar la operación de nuevo</button> 
  `;
  BackAgain.onclick = function(){
    location.assign("/Programa6.html")
  }
}

btnBACK.onclick = function () {
  location.assign("/JavaScript/Index");
}