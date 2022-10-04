console.log("Loaded 1.0 version");

// carregar o canvas
let canvas = document.getElementById("smart");
let context = canvas.getContext("2d");

let novela = new Image();
novela.src =
  "http://s2.glbimg.com/4rW8-QbGuoqeDoSdCnHYQoieZWA=/0x720/filters:quality(40)/https://s2.glbimg.com/O0xgBL5KAay23VHejhPUOznfEAo=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/A/S/ZgcMekRSAPYiB5inuMFw/2020-1002-cabocla-background.jpg";
novela.onload = () => {
  context.drawImage(novela, 0, 0);
};

let gradiente = new Image();
gradiente.src = "../assets/img/Gradient.png";
gradiente.onload = () => {
  context.drawImage(gradiente, -1, -1);
  context.font = "5em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText("Cabloca", 250, 100);
};

//cria texto fora do onload
//const cabocla = document.createElement('p')
//cabocla.innerHTML = 'Cabocla'
//context.drawImage(cabocla)

let rating = new Image();
rating.src = "../assets/icons/Content Rating.png";
rating.onload = () => {
  context.drawImage(rating, 125, 120);

  //adiciona tags com info sobre a midia
  context.font = "1.2em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "right";
  context.fillText("Novela  Drama  2004", 330, 140);

  //adiciona texto
  context.font = "1.2em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "left";
  context.fillText(
    "Ambientada em Vila da Mata, em 1918," +
      "a trama gira em torno da disputa por terras",
    120,
    190
  );
};

function verificaClick() {
  if (x > 100 && x < 300 && y > 350 && y < 410) {
    document
      .getElementById("canvas")
      .removeEventListener("click", verificaClick, false);
    document
      .getElementById("canvas")
      .addEventListener("click", verificaClickLevelSelect, false);
  }
}
let play = new Image();
play.src = "../assets/icons/Play.png";
play.onload = () => {
  context.drawImage(play, 190, 345);
  //cria botoes
  context.beginPath();
  //primeiro botao
  context.rect(110, 310, 150, 140);
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "rgba(225,225,225,0.5)";
  context.fill();
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "#ff3";
  context.stroke();
  context.closePath();
  context.font = "20pt Arial bolder";
  context.fillStyle = "#000000";
  context.fillText("Assista", 185, 425);
  verificaClick();
};

let list = new Image();
list.src = "../assets/icons/add.png";

list.onload = () => {
  context.drawImage(list, 350, 330);

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

  let episodes = new Image();
  episodes.src = "../assets/icons/Episodes.png";
  episodes.onload = () => {
    context.drawImage(episodes, 570, 350);

    //cria botoes
    //segundo botao
    context.beginPath();
    context.rect(510, 310, 150, 140);
    context.fillStyle = "#FFFFFF";
    context.fillStyle = "rgba(225,225,225,0.5)";
    context.fill();
    //borda
    context.lineWidth = 5;
    context.strokeStyle = "#216bd1";
    context.stroke();
    context.closePath();
    context.font = "18pt Arial bolder";
    context.fillStyle = "#000000";
    context.fillText("Capítulos", 580, 425);
  };

  //cria botoes
  //segundo botao
  context.beginPath();
  context.rect(710, 310, 150, 140);
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "rgba(225,225,225,0.5)";
  context.fill();
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "#ec03fc";
  context.stroke();
  context.closePath();
  context.font = "18pt Arial bolder";
  context.fillStyle = "#000000";
  context.fillText("Capítulos", 780, 425);

  //conteudo exclusivo
  context.fillStyle = "#fff";
  context.fillText("Conteudo exclusivo para assinante globoplay", 330, 525);
  context.font = "18pt Arial bolder";

  //quadrado teste
  context.fillStyle = "#03fcd7";
  context.fillRect(910, 310, 150, 140);
  //escrita
  context.fillStyle = "#000000";
  context.fillText("teste", 980, 425);
  context.font = "18pt Arial bolder";

  //borda
  context.lineWidth = 5;
  context.strokeStyle = "#03fcd7";

  var img = document.createElement("img");
  img.src = canvas.toDataURL("../assets/icons/Episodes.png");
  document.body.appendChild(img);
};
