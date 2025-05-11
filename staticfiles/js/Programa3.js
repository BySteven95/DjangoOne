var Correctas;
var Incorrectas;
var EnBlanco;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido')

btnOK.onclick = function(){
  Correctas = Number(document.getElementById('Correctas').value);
  Incorrectas = Number(document.getElementById('Incorrectas').value);
  EnBlanco = Number(document.getElementById('EnBlanco').value);
  console.log('Respuestas Correctas', Correctas);
  console.log('Respuestas Incorrectas', Incorrectas);
  console.log('Respuestas EnBlanco', EnBlanco);
  Puntaje = (Correctas*4) - (Incorrectas)  
  contenido.innerHTML = `
    El puntaje del postulante fue de: ${Puntaje} 
    <button class="buttons" id="BackAgain">Hacer el calculo de nuevo</button> 
  `;
  const BackAgain = document.getElementById('BackAgain');
  BackAgain.onclick = function(){
    location.assign("/JavaScript/Programa3")
  }
  console.log('Puntaje Final: ', Puntaje);
}



btnBACK.onclick = function(){
  location.assign("/JavaScript/Index")
}