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

var bandColision=false;

var turnoPer1=false;
var turnoPer2=false;
var Edif =[];

$(document).ready(function() {
    document.getElementById("jugadores").style.display = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("conejo").style.display = "none";
    document.getElementById("conejo2").style.display = "none";
    document.getElementById("z1").style.display = "none";
    document.getElementById("z2").style.display = "none";
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
    generaPos();
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
  turnoPer2 = true;
}

function muestraj1(){
  document.getElementById("angulo_j1").style.display = "block";
  document.getElementById("velocidad_j1").style.display = "block";
  document.getElementById("labang1").style.display = "block";
  document.getElementById("labvel1").style.display = "block";
  document.getElementById("angulo_j1").focus();
  turnoPer1 = true;
}

function turnoJ1(e)
{
  if (e.keyCode === 13) { //Tecla Enter
    var angulo_j1 = $("#angulo_j1").val();
    var velocidad_j1 = $("#velocidad_j1").val();
    if(angulo_j1 != "" && velocidad_j1 != "" && !isNaN(angulo_j1)  && !isNaN(velocidad_j1)){
      alert("Angulo: "+angulo_j1+", Velocidad J1:"+velocidad_j1);
      $("#angulo_j1").val("");
      $("#velocidad_j1").val("");
      muestraj2();
      escondej1();
      bandColision=false;
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
  lanza();
  //dibujaProyectil();
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
      bandColision=false;
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

function generaPos()
{
  var xc = 0;
  for(var i=0; i<10;i++){
    var aux = [];
    var n = Math.round((Math.random()*2)+1);
    var alto = Math.round((Math.random()*150)+100);
    aux.alto=alto;
    aux.posx = xc;
    aux.n = n
    Edif.push(aux);
    xc = xc + 70;
  }
  
  var aleat = Math.round((Math.random()*2)+1);
  posx1 = Edif[aleat].posx;
  posy1 =  (350-Edif[aleat].alto)-50

  aleat = Math.round((Math.random()*2)+6);
  posx2 = Edif[aleat].posx;
  posy2 =  (350-Edif[aleat].alto)-50;
}

function drawScenario(){
  drawSun();
  canvas.width = canvas.width;
  // draw buildings
  
  var edificios = ['','edificio1.png','edificio2.png','edificio3.png'];
  for(var i=0; i<10;i++){
    createImage(edificios[Edif[i].n],Edif[i].posx,Edif[i].alto);
  }
  
  var img1 = document.getElementById("conejo");
  contexto.drawImage(img1, posx1, posy1,100,50);

  var img2 = document.getElementById("conejo2");
  contexto.drawImage(img2,posx2, posy2,100,50);
  generaColision(50,400);
  //lanza();
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

function checaColision(xProy,yProy)
{
  //console.log("Proy: "+ xProy + " | " + yProy);
  for(var i=0; i<10;i++){
    if(xProy<anchoCan)
    {
      //console.log("Edif: "+ Edif[i].posx + " | " + Edif[i].alto);
      if(xProy >= Edif[i].posx-20 && xProy <= (Edif[i].posx+70) && yProy >= ((350-Edif[i].alto)-10))
      {
        //console.log("entro");
        generaColision(xProy,yProy);
        bandColision=true;
        return;
      }
    }
    else
      return;
  }
}

function checaColisionPer(xProy,yProy)
{
  console.log("Proy: "+ xProy + " | " + yProy);
  console.log("Per: "+ posx1 + " | " + posy1);
  if(xProy >= posx1-10 && xProy<=posx1+15 && yProy >= posy1 && yProy <= posy1+50)
  {
    //Le dio al personaje1
    console.log("entro1");
    puntaje2 = puntaje2+1;
    actualizaPunt(puntaje1,puntaje2);
    bandColision=true;
  }
  else{
    if(xProy>= posx2 && xProy<=posx2+100 && yProy >= posy2 && yProy <= posy2+50)
    {
      //Le dio al personaje2
      puntaje1 = puntaje1+1;
      actualizaPunt(puntaje1,puntaje2);
      bandColision = true;
    }
  }
}

function generaColision(xCol,yCol)
{
  var anch, alt;
  anch = 25;
  alt = 15;
  //contexto.fillStyle = 'rgb( 0, 0, 160 )';
  contexto.fillStyle = 'blue';
  dibujaEllipse( xCol, yCol, anch, alt );
}

function dibujaEllipse(x, y, an, al)
{
  var kappa, ox, oy, xe, ye, xm, ym;
  kappa = 0.5522848;
  ox = (an / 2) * kappa;
  oy = (al / 2) * kappa;
  xe = x + an;
  ye = y + al;
  xm = x + an / 2;
  ym = y + al / 2;

  contexto.beginPath();
  contexto.moveTo( x, ym );
  contexto.bezierCurveTo( x, ym - oy, xm - ox, y, xm, y );
  contexto.bezierCurveTo( xm + ox, y, xe, ym - oy, xe, ym );
  contexto.bezierCurveTo( xe, ym + oy, xm + ox, ye, xm, ye );
  contexto.bezierCurveTo( xm - ox, ye, x, ym + oy, x, ym );
  contexto.closePath();
  contexto.fill();
}

function lanza(){
  var x = 180;
  var y= 47;
  var img1 = document.getElementById("z1");
  //while(!colision){ //mientras no haya colision se va a re-dibujar
  
    setInterval(function(){ 
      /*contexto.beginPath();
      contexto.moveTo(10, 45);
      contexto.lineTo(x, y);
      contexto.stroke();*/
      if(x<=640){
        if(!bandColision){
          contexto.drawImage(img1, x, y,20,10);
          checaColision(x,y);
          checaColisionPer(x,y);
          //drawScenario();
          x +=10;
          y += 10;
        }
      }
      else
        return;
     }, 500);
  //}
}