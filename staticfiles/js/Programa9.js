var nombresMaterias = [];

const btnOK = document.getElementById('btnOK');
const btnBACK = document.getElementById('btnBACK');
const contenido = document.getElementById('contenido');
const alerta = document.getElementById('alert');


function ingresarNombresMaterias() {
  var numMaterias = parseInt(document.getElementById('numMaterias').value);

  if (isNaN(numMaterias)) {
    alert('Por favor, ingrese un número válido.');
    return;
  }

  nombresMaterias = [];
  for (var i = 0; i < numMaterias; i++) {
    var nombreMateria = prompt('Ingrese el nombre de la materia ' + (i + 1));
    nombresMaterias.push(nombreMateria);
  }

  contenido.innerHTML = `
  <form class="form">
    <p>Numero de Estudiantes</p>
    <input class="buttons" type="number" id="numEstudiantes" min="1" required>
    <button class="buttons" type="submit" onclick="crearMatriz()">Crear Matriz</button>
  </form>
  `
}

function crearMatriz() {
  var numEstudiantes = parseInt(document.getElementById('numEstudiantes').value);

  if (isNaN(numEstudiantes)) {
    alert('Por favor, ingrese un número válido.');
    return;
  }

  var matriz = [];

  for (var i = 0; i < numEstudiantes; i++) {
    var estudiante = {
      nombre: prompt('Ingrese el nombre del estudiante ' + (i + 1)),
      notas: []
    };

    for (var j = 0; j < nombresMaterias.length; j++) {
      var nota = parseFloat(prompt('Ingrese la nota de ' + estudiante.nombre + ' para la materia ' + nombresMaterias[j]));

      if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, ingrese una nota válida entre 0 y 10.');
        return;
      }

      estudiante.notas.push(nota);
    }

    matriz.push(estudiante);
  }

  contenido.innerHTML = ``

  mostrarTabla(matriz);
}

function mostrarTabla(matriz) {
  var tablaContainer = document.getElementById('tablaContainer');
  tablaContainer.innerHTML = '';

  var table = document.createElement('table');
  table.classList.add('customTable')
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var tfoot = document.createElement('tfoot');

  var headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('th')); // Espacio en blanco para la columna de nombres
  for (var i = 0; i < nombresMaterias.length; i++) {
    var th = document.createElement('th');
    th.textContent = nombresMaterias[i];
    headerRow.appendChild(th);
  }
  var promedioHeader = document.createElement('th');
  promedioHeader.textContent = 'Promedio';
  headerRow.appendChild(promedioHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  for (var i = 0; i < matriz.length; i++) {
    var estudiante = matriz[i];
    var row = document.createElement('tr');

    var nombreCell = document.createElement('td');
    nombreCell.textContent = estudiante.nombre;
    row.appendChild(nombreCell);

    for (var j = 0; j < estudiante.notas.length; j++) {
      var td = document.createElement('td');
      td.textContent = estudiante.notas[j];
      row.appendChild(td);
    }

    var promedioCell = document.createElement('td');
    promedioCell.textContent = calcularPromedio(estudiante.notas).toFixed(2);
    row.appendChild(promedioCell);

    tbody.appendChild(row);
  }

  // Calcular promedio por materia

  var promedioMateriasRow = document.createElement('tr');
  promedioMateriasRow.appendChild(document.createElement('td'));
  for (var i = 0; i < nombresMaterias.length; i++) {
    var td = document.createElement('td');
    var notasMateria = matriz.map(function (estudiante) {
      return estudiante.notas[i];
    });
    td.textContent = calcularPromedio(notasMateria).toFixed(2);
    promedioMateriasRow.appendChild(td);
  }

  var promedioMateriasCell = document.createElement('td');
  promedioMateriasCell.textContent = 'Promedio por Materia';
  promedioMateriasRow.appendChild(promedioMateriasCell);
  tfoot.appendChild(promedioMateriasRow);

  table.appendChild(tbody);
  table.appendChild(tfoot);
  tablaContainer.appendChild(table);
  
  contenido.innerHTML = `
    <form class="form">
      <button class="buttons" type="button" onclick="repetirProceso()">Repetir Proceso</button>
    </form>
  `;
}

function calcularPromedio(notas) {
  var sum = 0;
  for (var i = 0; i < notas.length; i++) {
    sum += notas[i];
  }
  return sum / notas.length;
}

function repetirProceso() {
  document.getElementById('tablaContainer').innerHTML = '';
  location.assign("/JavaScript/Programa9");
}

btnBACK.onclick = function () {
  location.assign("/JavaScript/Index");
}