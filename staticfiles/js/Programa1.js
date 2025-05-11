var number1;
var number2;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido')
const alerta = document.getElementById('alert')

btnOK.onclick = function(){
  number1 = Number(document.getElementById('number1').value);
  number2 = Number(document.getElementById('number2').value);
  console.log('Numero 1: ', number1);
  console.log('Numero 2: ', number2);
  contenido.innerHTML = `
    <p>¿Qué operación desea realizar?</p>
    <button class="buttons" id="btnSuma">Suma</button> 
    <button class="buttons" id="btnResta">Resta</button>
    <button class="buttons" id="btnMulti">Multiplicación</button>
    <button class="buttons" id="btnDiv">División</button>
  `;
  const btnSuma = document.getElementById('btnSuma');
  const btnResta = document.getElementById('btnResta');
  const btnMulti = document.getElementById('btnMulti');
  const btnDiv = document.getElementById('btnDiv');
  btnSuma.onclick = function(){
    suma();
  }
  btnResta.onclick = function(){
    resta();
  }
  btnMulti.onclick = function(){
    Multiplicacion();
  }
  btnDiv.onclick = function(){
    Division();
  }
}

function suma(){
  alerta.classList.add('d-none');
  Resultado = (number1 + number2).toFixed(2);
  contenido.innerHTML = `
    El resultado de la operación fue: ${Resultado} 
    <button class="buttons" id="BackAgain">Hacer otra operación de nuevo</button> 
  `;
  const BackAgain = document.getElementById('BackAgain');
  BackAgain.onclick = function(){
    location.assign("/JavaScript/Programa1")
  }
  console.log('Resultado: ', Resultado);
}

function resta(){
  alerta.classList.add('d-none');
  Resultado = (number1 - number2).toFixed(2)
  contenido.innerHTML = `
    El resultado de la operación fue: ${Resultado} 
    <button class="buttons" id="BackAgain">Hacer otra operación de nuevo</button> 
  `;
  const BackAgain = document.getElementById('BackAgain');
  BackAgain.onclick = function(){
    location.assign("/JavaScript/Programa1")
  }
  console.log('Resultado: ', Resultado);
}

function Multiplicacion(){
  alerta.classList.add('d-none');
  Resultado = (number1 * number2).toFixed(2)
  contenido.innerHTML = `
    El resultado de la operación fue: ${Resultado} 
    <button class="buttons" id="BackAgain">Hacer otra operación de nuevo</button> 
  `;
  const BackAgain = document.getElementById('BackAgain');
  BackAgain.onclick = function(){
    location.assign("/JavaScript/Programa1")
  }
  console.log('Resultado: ', Resultado);
}

function Division(){
  if (number2 == 0){
    alerta.classList.remove('d-none');
    alerta.innerText = 'Es imposible dividir entre 0'
  } else {
    Resultado = (number1 / number2).toFixed(2)
    contenido.innerHTML = `
      El resultado de la operación fue: ${Resultado} 
      <button class="buttons" id="BackAgain">Hacer otra operación de nuevo</button> 
    `;
    const BackAgain = document.getElementById('BackAgain');
    BackAgain.onclick = function(){
      location.assign("/JavaScript/Programa1")
    }
    console.log('Resultado: ', Resultado);
  }
}

btnBACK.onclick = function(){
  alerta.classList.add('d-none');
  location.assign("/JavaScript/Index")
}