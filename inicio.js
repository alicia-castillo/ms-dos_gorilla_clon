var puntaje1 = 0;
var puntaje2 = 0;
var posx1 = 10;
var posy1 = 122;
var posx2 = 400;
var posy2 = 180;

var posPx;
var posPy;

var anchoCan;
var altoCan;
var contexto;
var canvas;

var turno=false;
var Edif =[];

$(document).ready(function() {
    document.getElementById("jugadores").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("conejo").style.display = "none";
    document.getElementById("conejo2").style.display = "none";
    document.getElementById("puntaje").style.display = "none";
    document.getElementById("nombre_j1").focus();
    var nomb2 = document.getElementById("nombre_j2");
    nomb2.addEventListener("keypress",tecla);
    var nomb1 = document.getElementById("nombre_j1");
    nomb1.addEventListener("keypress",tecla);
  }
)

function inicia()
{
  canvas = document.getElementById('canvas');
  anchoCan = canvas.width;
  altoCan = canvas.height;
  contexto = canvas.getContext('2d');
  this.nomb_j1 = $("#nombre_j1").val();
  this.nomb_j2 = $("#nombre_j2").val();
  if(this.nomb_j1 != "" && this.nomb_j2 != "")
  {
    document.getElementById("lab_j1").innerHTML = nomb_j1;
    document.getElementById("lab_j2").innerHTML = nomb_j2;
    document.getElementById("puntaje").innerHTML = "  Puntajes< " + nomb_j1 + ": " + puntaje1 + " - " + puntaje2 + " :" + nomb_j2 + " >  ";
    document.getElementById("jugadores").style.display = "block";
    document.getElementById("puntaje").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    escondej2();
    document.getElementById("angulo_j1").focus();
    this.tur_j1 = document.getElementById("velocidad_j1");
    this.tur_j1.addEventListener("keypress",turnoJ1);
    this.tur_j2 = document.getElementById("velocidad_j2");
    this.tur_j2.addEventListener("keypress",turnoJ2);

    this.turn_j1 = document.getElementById("angulo_j1");
    this.turn_j1.addEventListener("keypress",turnoJ1);
    this.turn_j2 = document.getElementById("angulo_j2");
    this.turn_j2.addEventListener("keypress",turnoJ2);
    window.setInterval(loopJuego(),1000/60);
    //drawSun();
    //drawScenario();
  }
  else
  {
    document.getElementById("alerta").style.display = "block";
  }
}

function escondej2(){
  document.getElementById("angulo_j2").style.display = "none";
  document.getElementById("velocidad_j2").style.display = "none";
  document.getElementById("labang2").style.display = "none";
  document.getElementById("labvel2").style.display = "none";
}

function escondej1(){
  document.getElementById("angulo_j1").style.display = "none";
  document.getElementById("velocidad_j1").style.display = "none";
  document.getElementById("labang1").style.display = "none";
  document.getElementById("labvel1").style.display = "none";
}

function muestraj2(){
  document.getElementById("angulo_j2").style.display = "block";
  document.getElementById("velocidad_j2").style.display = "block";
  document.getElementById("labang2").style.display = "block";
  document.getElementById("labvel2").style.display = "block";
  document.getElementById("angulo_j2").focus();
}

function muestraj1(){
  document.getElementById("angulo_j1").style.display = "block";
  document.getElementById("velocidad_j1").style.display = "block";
  document.getElementById("labang1").style.display = "block";
  document.getElementById("labvel1").style.display = "block";
  document.getElementById("angulo_j1").focus();
}

function turnoJ1(e)
{
  if (e.keyCode === 13) { //Tecla Enter
    var angulo_j1 = $("#angulo_j1").val();
    var velocidad_j1 = $("#velocidad_j1").val();
    if(angulo_j1 != "" && velocidad_j1 != "" && !isNaN(angulo_j1)  && !isNaN(velocidad_j1)){
      alert("Angulo: "+angulo_j1+", Velocidad J1:"+velocidad_j1);
      /*posPx = posx1+5;
      posPy = posy1;
      turno=true;
      while(posPx<anchoCan){
        posPx++;
      }
      turno=false;*/
      $("#angulo_j1").val("");
      $("#velocidad_j1").val("");
      muestraj2();
      escondej1();
    }
    else{
      alert("Introduzca un numero");
    }
  }
}

function loopJuego()
{
  drawSun();
  drawScenario();
  dibujaProyectil();
}

function turnoJ2(e)
{
  if (e.keyCode === 13) { //Tecla Enter
    var angulo_j2 = $("#angulo_j2").val();
    var velocidad_j2 = $("#velocidad_j2").val();
    if(angulo_j2 != "" && velocidad_j2 != "" && !isNaN(angulo_j2)  && !isNaN(velocidad_j2)){
      alert("Angulo J2:"+angulo_j2+", Velocidad J2:"+velocidad_j2);
      //posPx = posx2+5;
      //posPy = posy2;
      $("#angulo_j2").val("");
      $("#velocidad_j2").val("");
      muestraj1();
      escondej2();
      /*puntaje2 = puntaje2+1;
      actualizaPunt(puntaje1,puntaje2);*/
    }
    else
    {
      alert("Introduzca un numero");
    }
  }
}

function actualizaPunt(punt1,punt2)
{
  document.getElementById("puntaje").innerHTML = "Puntajes< " + nomb_j1 + ": " + punt1 + " - " + punt2 + " :" + nomb_j2 + " >  ";
}


function tecla(e)
{
  var tecla = e.keyCode;
  if (tecla === 13) { // 13 is enter
    inicia();
  }

}

function drawSun() {
  // draw the colored region
  contexto.beginPath();
  contexto.arc(300, 35, 20, 0, 2 * Math.PI, true);
  contexto.fillStyle = "#E2FFC6";
  contexto.fill();

  // draw the stroke
  contexto.lineWidth = 20;
  contexto.strokeStyle = "#66CC01";
  contexto.stroke();
}

function drawScenario(){
  drawSun();
  canvas.width = canvas.width;
  // draw buildings
  var xc = 0;
  
  var edificios = ['','edificio1.png','edificio2.png','edificio3.png'];
  for(var i=0; i<10;i++){
    var aux = [];
    var n = Math.round((Math.random()*2)+1);
    var alto = Math.round((Math.random()*150)+100);
    var dif =(350-alto)-50;
    aux.alto=dif;
    aux.posx = xc;
    Edif.push(aux);
    //var ancho = Math.round((Math.random()*100)+50);
    //console.log(n);
    //console.log(edificios[n]);
    createImage(edificios[n],xc,alto);
    xc = xc + 70;
  }
  
  var aleat = Math.round((Math.random()*2)+1);
  console.log(aleat);
  var img1 = document.getElementById("conejo");
  contexto.drawImage(img1, Edif[aleat].posx, Edif[aleat].alto,100,50);

  var aleat = Math.round((Math.random()*2)+6);
  var img2 = document.getElementById("conejo2");
  contexto.drawImage(img2,Edif[aleat].posx, Edif[aleat].alto,100,50);
}

function createImage(imagen, xc,alto){
  base_image = new Image();
  //console.log(imagen);
  base_image.src = imagen;
  base_image.onload = function(){
    //console.log(xc);
    //var alto = (Math.random()*150)+250; w h
    contexto.drawImage(this, xc, 350-alto,70,alto);
  }
}

function dibujaProyectil()
{
  if(turno){
    contexto.beginPath();
    contexto.arc(posPx, posPy, 5, 0, 2 * Math.PI, true);
    contexto.fillStyle = "#E2FFC6";
    contexto.fill();
  }
}
