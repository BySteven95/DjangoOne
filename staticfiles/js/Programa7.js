var Cantidad = 0;
var TotalPesoNiños = 0;
var TotalPesoJovenes = 0;
var TotalPesoAdultos = 0;
var TotalPesoViejos = 0;
var PromedioNiños = 0;
var PromedioJovenes = 0;
var PromedioAdultos = 0;
var PromedioViejos = 0;
var Niños = 0;
var Jovenes = 0;
var Adultos = 0;
var Viejos = 0;

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
    await ingresoDatos(); 
  }
    mostrarResultados();
});

btnOK.addEventListener('click', function (event) {
  event.preventDefault();

  input1 = document.getElementById('Cantidad');
  if (input1 !== null) {
    input1.value = '';
  }
});

async function ingresoDatos() {
  for (let i = 0; i < Cantidad; i++) {
    await new Promise((resolve) => {
      contenido.innerHTML = `
        <p>Ingrese el peso de la persona</p> 
        <input type="number" class="buttons" id="Peso${i}" required>
        <p>Ingrese la edad de la persona</p> 
        <input type="number" class="buttons" id="Edad${i}" required>
        <button class="buttons" type="submit" id="btnAdd">OK</button>
      `;
      document.getElementById('btnAdd').addEventListener('click', async function (event) {
        event.preventDefault();
        input1 = Number(document.getElementById(`Peso${i}`).value);
        input2 = Number(document.getElementById(`Edad${i}`).value);
        if (input1 >= 0 && input2 >= 0) {
          var peso = Number(document.getElementById(`Peso${i}`).value);
          var edad = Number(document.getElementById(`Edad${i}`).value);
          input1.value = '';
          input2.value = '';
          alerta.classList.add('d-none');
          agregarDatos(i);
          resolve();
        }else{
          alerta.classList.remove('d-none');
          alerta.innerText = 'Ambos campos deben tener una cifra valida y esta no puede ser menor a cero.'
        }
      });
    });
  }
}

function agregarDatos(i) {
  var peso = Number(document.getElementById(`Peso${i}`).value);
  var edad = Number(document.getElementById(`Edad${i}`).value);
  console.log(peso);
  console.log(edad);
  if (edad >= 0 && edad <= 13) {
    Niños++;
    TotalPesoNiños += peso;
  } else if (edad >= 14 && edad <= 30) {
    Jovenes++;
    TotalPesoJovenes += peso;
  } else if (edad >= 31 && edad <= 60) {
    Adultos++;
    TotalPesoAdultos += peso;
  } else {
    Viejos++;
    TotalPesoViejos += peso;
  }
}

function mostrarResultados() {
  PromedioNiños = TotalPesoNiños / Niños;
  PromedioJovenes = TotalPesoJovenes / Jovenes;
  PromedioAdultos = TotalPesoAdultos / Adultos;
  PromedioViejos = TotalPesoViejos / Viejos;
  contenido.innerHTML = `
    <p>La Cantidad de Niños fue: ${Niños}</p> 
    <p>El Total de Peso en Niños fue: ${TotalPesoNiños}</p>
    <p>El Promedio de Peso en Niños fue: ${PromedioNiños}</p>
    <p>La Cantidad de Jovenes fue: ${Jovenes}</p> 
    <p>El Promedio de Peso en Jovenes fue: ${PromedioJovenes}</p>
    <p>La Cantidad de Adultos fue: ${Adultos}</p>
    <p>El Promedio de Peso en Adultos fue: ${PromedioAdultos}</p>
    <p>La Cantidad de Viejos fue: ${Viejos}</p>
    <p>El Promedio de Peso en Viejos fue: ${PromedioViejos}</p>
    <button class="buttons" id="BackAgain">Realizar el censo de nuevo</button> 
  `;
  BackAgain.onclick = function () {
    location.assign("/JavaScript/Programa7");
  };
}

btnBACK.onclick = function () {
  location.assign("/JavaScript/Index");
}