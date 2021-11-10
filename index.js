let valor;
let total;
function selecciona(evt) {
  console.log(evt.target.value);
  valor = parseInt(evt.target.value);
}
function seleccionaCuota(evt) {
  const cuotas = parseInt(evt.target.value);
  if (cuotas === 0) {
    total = valor;
  } else if (cuotas === 3) {
    total = valor + valor * 0.01;
  } else if (cuotas === 6) {
    total = valor + valor * 0.05;
  } else if (cuotas === 12) {
    total = valor + valor * 0.1;
  } else {
    alert("seleccione cuotas");
    return;
  }
  alert("total a pagar es " + total);
}
function registrate() {
  let nombre = prompt("Ingresa tu nombre");
  let apellido = prompt("Ingresa tu apellido");
  let edad = parseInt(prompt("Ingresa tu edad"));
  let profesion = prompt("Ingresa tu profesion");
  let usuario = new Registrado(nombre, apellido, edad, profesion);
  registrados.push(usuario);
  console.log(registrados);
}

function muestraUsuario() {
  let usuario = registrados[0];
  usuario.muestraProfesion();
}

class Registrado {
  constructor(nombres, apellidos, edad, profesion) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.edad = edad;
    this.profesion = profesion;
  }

  muestraNombreCompleto() {
    console.log(this.nombres + " " + this.apellidos);
  }

  muestraProfesion() {
    console.log('La profesion de ' + this.nombres + ' es ' + this.profesion);
  }
}
const registrados = [];