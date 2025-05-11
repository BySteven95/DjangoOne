var numDias = 0;
var sumaMax = 0;
var sumaMin = 0;
var numErrores = 0;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido');
const alerta = document.getElementById('alert')

btnOK.onclick = function(){
  const maxTemp = Number(document.getElementById('maxTemp').value);
  const minTemp = Number(document.getElementById('minTemp').value);
  if(maxTemp === 0 || minTemp === 0){
    alerta.classList.remove('d-none');
    alerta.innerText = 'Debe ingresar datos en ambos campos'
  }else{
    alerta.classList.add('d-none');
    if (maxTemp === 9 || minTemp === 9) {
      numErrores++;
      numDias++;
  } else {
      numDias++;
      sumaMax += maxTemp;
      sumaMin += minTemp;
  }
  actualizarResultados();
  }
}

btnOK.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form
  event.preventDefault();

  input1 = document.getElementById('maxTemp');
  input2 = document.getElementById('minTemp');
  input1.value = '';
  input2.value = '';
});

function actualizarResultados() {
  const mediaMax = numDias === 0 ? 0 : (sumaMax / numDias).toFixed(2);
  const mediaMin = numDias === 0 ? 0 : sumaMin / numDias.toFixed(2);
  const porcentajeErrores = numDias === 0 ? 0 : (numErrores / numDias) * 100;
  contenido.innerHTML = `
    <p>Numero de días: ${numDias}</p>
    <p>Media Máxima: ${mediaMax}</p>
    <p>Media Mínima: ${mediaMin}</p>
    <p>Porcentaje de Errores: ${porcentajeErrores}%</p>
  `;
}

btnBACK.onclick = function(){
  location.assign("/JavaScript/Index")
}