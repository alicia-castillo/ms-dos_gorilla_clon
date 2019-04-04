$(document).ready(function() {
    this.canvas = document.getElementById('canvas');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    drawSun(this.context);
  }
)

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