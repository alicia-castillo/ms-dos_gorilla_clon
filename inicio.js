$(document).ready(function() {
    document.getElementById("jugadores").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("nombre_j1").focus();
  }
)

function inicia()
{
  this.canvas = document.getElementById('canvas');
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.context = this.canvas.getContext('2d');
  var nomb_j1 = $("#nombre_j1").val();
  var nomb_j2 = $("#nombre_j2").val();
  if(nomb_j1 != "" && nomb_j2 != "")
  {
    document.getElementById("lab_j1").innerHTML = nomb_j1;
    document.getElementById("lab_j2").innerHTML = nomb_j2;
    document.getElementById("jugadores").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    drawSun(this.context);
  }
  else
  {
    document.getElementById("alerta").style.display = "block";
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

function drawScenario(){
  
}
