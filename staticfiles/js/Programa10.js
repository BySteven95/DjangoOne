var salario = 0;
var auxilio_transporte = 0;
var vhed = 0;
var vhen = 0;
var vhefd = 0;
var vhefn = 0;
var recargo_nocturno = 0;
var total_devengado = 0;
var salud = 0;
var pension = 0;
var prestamos = 0;
var fondo_solidaridad = 0;
var total_deducido = 0;
var neto_pagado = 0


const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido');
const alerta = document.getElementById('alert');

btnOK.addEventListener('click', async function (event) {

  event.preventDefault();
  
  var salario=parseFloat((document.getElementById('salario').value))
  var dias=parseInt((document.getElementById('dias').value))

  if (salario === 0 || dias === 0 ) {
    alerta.classList.remove('d-none');
    alerta.innerText = 'Debe ingresar una cifra válida para salario y dias.'
  } else {
    alerta.classList.add('d-none');
    calcular();
  }

  input1 = document.getElementById('NumGallinas');
  input2 = document.getElementById('NumDias');
  if (input1 !== null) {
    input1.value = '';
    input2.value = '';
  }
    mostrarResultados();
});

function calcular(){

  //Variables de Entrada
  //Informacion del Empleado

  salario=parseFloat((document.getElementById('salario').value))
  dias=parseInt((document.getElementById('dias').value))
  var hed=parseInt((document.getElementById('hed').value))
  var hen=parseInt((document.getElementById('hen').value))
  var hefd=parseInt((document.getElementById('hefd').value))
  var hefn=parseInt((document.getElementById('hefn').value))

  if (isNaN(hed)){
    hed = 0;
  }
  if (isNaN(hen)){
    hen = 0;
  }

  if (isNaN(hefd)){
    hefd = 0;
  }

  if (isNaN(hefn)){
    hefn = 0;
  }


  //Salarios Devengados por el empleado

  sueldo = salario/30*dias
  sueldo = sueldo.toFixed(2);
  
  if(salario<=2320000){
    auxilio_transporte = 140600/30*dias
  }else{
    auxilio_transporte = 0;
  }

  auxilio_transporte = auxilio_transporte.toFixed(2);
  vhed = salario /240 * 1.25* hed
  vhed = vhed.toFixed(2);
  vhen = salario /240 * 1.75* hen
  vhen = vhen.toFixed(2);
  vhefd = salario /240 * 2* hefd  
  vhefd = vhefd.toFixed(2);
  vhefn = salario /240 * 2.5* hefn
  vhefn = vhefn.toFixed(2);
  elementoActivo = document.querySelector('input[name="rn"]:checked');

  if(elementoActivo){
    recargo_nocturno = salario * 35 / 100
  }else{
    recargo_nocturno = 0
  }
  recargo_nocturno = recargo_nocturno.toFixed(2);
  total_devengado = parseFloat(sueldo) + parseFloat(auxilio_transporte)+
                    parseFloat(vhed)+parseFloat(vhen)+parseFloat(vhefd)+parseFloat(vhefn)
                    +parseFloat(recargo_nocturno);
  total_devengado = total_devengado.toFixed(2);

  //Salarios Deducidos al empleado

  salud = (total_devengado - auxilio_transporte) * 4 / 100
  salud = salud.toFixed(2);
  pension = (total_devengado - auxilio_transporte) * 4 / 100
  pension = pension.toFixed(2);
  prestamos = salario * 0,1
  prestamos = prestamos.toFixed(2);

  if(salario>4640000 && salario<=18560000){
    fondo_solidaridad=salario*1/100
  }else if(salario>18560000 && salario<=19720000){
    fondo_solidaridad=salario*1.2/100
  }else if(salario>19720000 && salario<=20880000){
    fondo_solidaridad=salario*1.4/100
  }else if(salario>20880000 && salario<=22040000){
    fondo_solidaridad=salario*1.6/100
  }else if(salario>19720000 && salario<=23200000){
    fondo_solidaridad=salario*1.8/100
  }else if(salario>23200000){
    fondo_solidaridad=salario*2/100
  }else{
    fondo_solidaridad=0
  }

  fondo_solidaridad = fondo_solidaridad.toFixed(2);
  total_deducido = parseFloat(salud)+parseFloat(pension)+parseFloat(prestamos)+
                   parseFloat(fondo_solidaridad)
  total_deducido = total_deducido.toFixed(2);
  neto_pagado = parseFloat(total_devengado) + parseFloat(total_deducido)
  neto_pagado = neto_pagado.toFixed(2);

  mostrarResultados();
}



function mostrarResultados() {
  contenido.innerHTML = `
    <p>Sueldo: $${salario}</p> 
    <p>Auxilio de Transporte: ${auxilio_transporte}</p> 
    <p>Valor Horas Extras Diurnas: ${vhed}</p> 
    <p>Valor Horas Extras Nocturnas: ${vhen}</p> 
    <p>Valor Horas Extras Festivas Diurnas: ${vhefd}</p> 
    <p>Valor Horas Extras Festivas Nocturnas: ${vhefn}</p> 
    <p>Recargo Nocturno: ${recargo_nocturno}</p> 
    <p>Total Devengado: ${total_devengado}</p> 
    <p>Salud: ${salud}</p> 
    <p>Pension: ${pension}</p> 
    <p>Préstamos: ${prestamos}</p> 
    <p>Fondo Solidario: ${fondo_solidaridad}</p> 
    <p>Total Deducido: ${total_deducido}</p> 
    <p>Neto Pagado: ${neto_pagado}</p> 
    <button class="buttons" id="BackAgain">Realizar el calculo de nuevo</button> 
  `;
  BackAgain.onclick = function () {
    location.assign("/JavaScript/Programa8");
  };
}

btnBACK.onclick = function () {
  location.assign("/JavaScript/Index");
}