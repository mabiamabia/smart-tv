  // carregar o canvas
let canvas = document.getElementById("smart");
let context = canvas.getContext("2d");
  
  
  //cria botoes
  //segundo botao
  context.beginPath();
  context.rect(310, 310, 150, 140);
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "rgba(225,225,225,0.5)";
  context.fill();
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "#f54242";
  context.stroke();
  context.closePath();
  context.font = "18pt Arial bolder";
  context.fillStyle = "#000000";
  context.fillText("Minha Lista", 385, 425);
  // };