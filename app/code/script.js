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

let gradiente = new Image()
gradiente.src = "../assets/img/Gradient.png"
gradiente.onload = () => {
  context.drawImage(gradiente, -1, -1);
  context.font = "5em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText("Cabloca", 250, 100);
}

let rating = new Image()
rating.src = "../assets/icons/Content Rating.png"
rating.onload = () => {
  context.drawImage(rating, 200, 120);

  context.font = "1.2em Arial bolder";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText("Novela  Drama  2004", 330, 140);
  
}