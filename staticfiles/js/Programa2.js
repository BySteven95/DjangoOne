var Numero;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido');
const alerta = document.getElementById('alert')

btnOK.onclick = function(){
  Numero = Number(document.getElementById('Numero').value);
  if (Numero == 0) {
    alerta.classList.remove('d-none');
    alerta.innerText = 'Debe ingresar un número'
  } else {
    alerta.classList.add('d-none');
    
  }
  realizarCalculos(Numero);
}

btnOK.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  input1 = document.getElementById('Numero');
  input1.value = '';
});

function realizarCalculos(Numero) {

  var seno = (Math.sin(Numero)).toFixed(4);

  var coseno = (Math.cos(Numero)).toFixed(4);

  var tangente = (Math.tan(Numero)).toFixed(4);

  var potenciaCuadrado = (Math.pow(Numero, 2)).toFixed(4);

  var logNatural = (Math.log(Numero)).toFixed(4);

  var logBase10 = (Math.log10(Numero)).toFixed(4);

  var raizCuadrada = (Math.sqrt(Numero)).toFixed(4);

  var raizCubica = (Math.cbrt(Numero)).toFixed(4);

  var exponencial = (Math.exp(Numero)).toFixed(4);

  var NumeroAleatorio = (Math.random() * Numero).toFixed(4);


  contenido.innerHTML = `
    <p>Seno: ${seno}</p>
    <p>Coseno: ${coseno}</p>
    <p>Tangente: ${tangente}</p>
    <p>Potencia al cuadrado: ${potenciaCuadrado}</p>
    <p>Logaritmo Natural: ${logNatural}</p>
    <p>Logaritmo en base 10: ${logBase10}</p>
    <p>Raíz Cuadrada: ${raizCuadrada}</p>
    <p>Raíz Cúbica: ${raizCubica}</p>
    <p>Exponencial: ${exponencial}</p>
    <p>Aleatorio entre 0 y ${Numero}: ${NumeroAleatorio}</p>
  `;
}

btnBACK.onclick = function(){
  location.assign("/JavaScript/Index")
}