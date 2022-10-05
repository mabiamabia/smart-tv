console.log("Loaded 1.0 version");
let canvas = document.getElementById("smart");
let context = canvas.getContext("2d");

let novela = new Image();
novela.src = "./componentes/assets/img/cabocla.webp";
novela.onload = () => {
  context.drawImage(novela, 0, 0);
};

let gradiente = new Image();
gradiente.src = "./componentes/assets/img/Gradient.png";
gradiente.onload = () => {
  context.drawImage(gradiente, -1, -1);
  //Título
  context.font = "5em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText("Cabloca", 250, 100);
};

let rating = new Image();
rating.src = "../code/componentes/assets/icons/Content_Rating.png";
rating.onload = () => {
  context.drawImage(rating, 125, 120);

  //adiciona tags com info sobre a midia
  context.font = "1.2em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "right";
  context.textAlign = "center";
  context.fillText("Novela  Drama  2004", 330, 140);

  //adiciona texto
  context.font = "1.2em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "left";
  context.fillText(
    "Ambientada em Vila da Mata, em 1918, " + "a trama gira em torno da",
    120,
    190
  );
  context.fillText(
    "disputa por terras entre dois coronéis e do amor entre Luís ",
    120,
    215
  );
  context.fillText(
    "Jerônimo e a cabocla Zuca, noiva do destemido Tobias.",
    120,
    240
  );
};

let play = new Image();
play.src = "./componentes/assets/icons/Play.png";
play.onload = () => {
  context.drawImage(play, 170, 305);

  context.beginPath();

  context.rect(120, 280, 110, 110);
  context.fillStyle = "rgba(225,225,225,0.5)";
  context.fill();

  context.font = "14pt Arial bolder";
  context.fillStyle = "#000000";
  context.fillText("Assista", 140, 370);
  context.textAlign = "left";
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "rgba(225,225,225,0.5)";
  context.stroke();
  context.closePath();
};

let lock = new Image();
lock.src = "./componentes/assets/icons/Lock.png";
lock.onload = () => {
  context.drawImage(lock, 120, 406);
  //conteudo exclusivo
  context.fillStyle = "#fff";
  context.fillText("Conteudo exclusivo para assinantes Globoplay", 145, 425);
  context.font = "12pt Arial";
  context.textAlign = "center";
};

let list = new Image();
list.src = "./componentes/assets/icons/add.png";

list.onload = () => {
  context.drawImage(list, 280, 290);

  //segundo botao
  context.beginPath();
  context.rect(260, 280, 110, 110);
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "rgba(225,225,225,0.5)";
  context.fill();
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "rgba(225,225,225,0.5)";
  context.font = "14pt Arial bolder";
  context.fillStyle = "#000000";
  context.fillText("Minha Lista", 310, 370);
  context.textAlign = "left";
  context.stroke();
  context.closePath();
};

let episodes = new Image();
episodes.src = "./componentes/assets/icons/Episodes.png";
episodes.onload = () => {
  context.drawImage(episodes, 440, 310);

  //capitulos
  context.beginPath();
  context.rect(400, 280, 110, 110);
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "rgba(225,225,225,0.5)";
  context.fill();
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "rgba(225,225,225,0.5)";
  context.font = "14pt Arial bolder";
  context.fillStyle = "#000000";
  context.fillText("Capítulos", 450, 370);
  context.textAlign = "center";
  context.stroke();
  context.closePath();

};

//detalhes
let detalhes = new Image();
detalhes.src = "./componentes/assets/icons/Content_Rating.png";

detalhes.onload = () => {
  context.drawImage(detalhes, 120, 600);

  context.fillStyle = "#fff";
  context.fillText("Detalhes", 120, 550);
  context.font = "14pt Arial bolder";
  context.textAlign = "left";

  //retangulo maior
  context.beginPath();
  context.rect(110, 560, 1050, 140);
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "rgba(0,0,0,0.8)";
  context.fill();
  //borda
  context.lineWidth = 5;
  context.strokeStyle = "rgba(225,225,225,0.5)";
  context.stroke();
  context.closePath();
  
  context.font = "14pt Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "left";
  context.fillText("Título original Cabloca", 130, 590);
  context.fillText("Não há inadequações", 160, 620);
  context.fillText("Genero Drama", 890, 590);
  context.fillText("Ano de Lançamento 2004", 890, 620);
  context.fillText("País Brasil", 890, 650);
  context.fillText("Sinopse ", 890, 680);
};
