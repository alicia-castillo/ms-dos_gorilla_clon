$(document).ready(function() {
    document.getElementById("jugadores").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("nombre_j1").focus();
    var nomb2 = document.getElementById("nombre_j2");
    nomb2.addEventListener("keypress",tecla);
    var nomb1 = document.getElementById("nombre_j1");
    nomb1.addEventListener("keypress",tecla);
  }
)

function inicia()
{
  this.canvas = document.getElementById('canvas');
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.context = this.canvas.getContext('2d');
  this.nomb_j1 = $("#nombre_j1").val();
  this.nomb_j2 = $("#nombre_j2").val();
  if(this.nomb_j1 != "" && this.nomb_j2 != "")
  {
    document.getElementById("lab_j1").innerHTML = nomb_j1;
    document.getElementById("lab_j2").innerHTML = nomb_j2;
    document.getElementById("jugadores").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("angulo_j1").focus();
    this.tur_j1 = document.getElementById("velocidad_j1");
    this.tur_j1.addEventListener("keypress",turnoJ1);
    this.tur_j2 = document.getElementById("velocidad_j2");
    this.tur_j2.addEventListener("keypress",turnoJ2);

    this.turn_j1 = document.getElementById("angulo_j1");
    this.turn_j1.addEventListener("keypress",turnoJ1);
    this.turn_j2 = document.getElementById("angulo_j2");
    this.turn_j2.addEventListener("keypress",turnoJ2);
    drawSun(this.context);
    drawScenario(this.context);
  }
  else
  {
    document.getElementById("alerta").style.display = "block";
  }
}

function turnoJ1(e)
{
  if (e.keyCode === 13) { // 13 is enter
    var angulo_j1 = $("#angulo_j1").val();
    var velocidad_j1 = $("#velocidad_j1").val();
    if(angulo_j1 != "" && velocidad_j1 != "" && !isNaN(angulo_j1)  && !isNaN(velocidad_j1)){
      alert("Angulo: "+angulo_j1+", Velocidad J1:"+velocidad_j1);
      document.getElementById("angulo_j2").focus();
      $("#angulo_j1").val("");
      $("#velocidad_j1").val("");
    }
    else{
      alert("Introduzca un numero");
    }
  }
}

function turnoJ2(e)
{
  if (e.keyCode === 13) { // 13 is enter
    var angulo_j2 = $("#angulo_j2").val();
    var velocidad_j2 = $("#velocidad_j2").val();
    if(angulo_j2 != "" && velocidad_j2 != "" && !isNaN(angulo_j2)  && !isNaN(velocidad_j2)){
      alert("Angulo J2:"+angulo_j2+", Velocidad J2:"+velocidad_j2);
      document.getElementById("angulo_j1").focus();
      $("#angulo_j2").val("");
      $("#velocidad_j2").val("");
    }
    else
    {
      alert("Introduzca un numero");
    }
  }
}

function tecla(e)
{
  var tecla = e.keyCode;
  if (tecla === 13) { // 13 is enter
    inicia();
  }

}

function drawSun(context) {
  // draw the colored region
  context.beginPath();
  context.arc(300, 35, 20, 0, 2 * Math.PI, true);
  context.fillStyle = "#E2FFC6";
  context.fill();

  // draw the stroke
  context.lineWidth = 20;
  context.strokeStyle = "#66CC01";
  context.stroke();
}

function drawScenario(context){
  context.beginPath();
  context.arc(80, 420, 250, 1*Math.PI,2*Math.PI);
  context.fillStyle = "green";
  context.fill();
  // draw the stroke
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.stroke();

  context.beginPath();
  context.arc(400, 420, 200, 1*Math.PI,2*Math.PI);
  context.fillStyle = "green";
  context.fill();
  // draw the stroke
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.stroke();

  context.beginPath();
  context.arc(700, 420, 250, 1*Math.PI,2*Math.PI);
  context.fillStyle = "green";
  context.fill();
  // draw the stroke
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.stroke();
}
