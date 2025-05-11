var UnidadesProducidas;
var IngresoTotal;
var Incentivo;
var SalarioSemanal;

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido')

btnOK.onclick = function(){
  UnidadesProducidas = Number(document.getElementById('UnidadesProducidas').value);
  console.log('Unidades Producidas', UnidadesProducidas);
  
  if(UnidadesProducidas >= 0 && UnidadesProducidas <= 90){
    IngresoTotal = UnidadesProducidas * 2;
    Incentivo = 0;
  }else if(UnidadesProducidas >= 100 && UnidadesProducidas <= 199){
    IngresoTotal = UnidadesProducidas * 2;
    Incentivo = 0.1 * IngresoTotal;
  }else if(UnidadesProducidas >= 200 && UnidadesProducidas <= 299){
    IngresoTotal = UnidadesProducidas * 2.5;
    Incentivo = 0.12 * IngresoTotal;
  }else if(UnidadesProducidas >= 300 && UnidadesProducidas <= 399){
    IngresoTotal = UnidadesProducidas * 3;
    Incentivo = 0.14 * IngresoTotal;
  }else if(UnidadesProducidas >= 400){
    IngresoTotal = UnidadesProducidas * 3;
    Incentivo = 0.16 * IngresoTotal;
  }

  SalarioSemanal = IngresoTotal + Incentivo;

  contenido.innerHTML = `
    El Salario Semanal del operario fue de: $${SalarioSemanal} 
    <button class="buttons" id="BackAgain">Hacer el cálculo de nuevo</button> 
  `;
  const BackAgain = document.getElementById('BackAgain');
  BackAgain.onclick = function(){
    location.assign("/JavaScript/Programa4")
  }
  console.log('Salario Semanal: ', SalarioSemanal);
}

btnBACK.onclick = function(){
  location.assign("/JavaScript/Index")
}