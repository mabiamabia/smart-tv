export class CardButton {
  constructor() {
    //cria botoes
    //segundo botao
    context.beginPath();
    context.rect(310, 310, 150, 140);
    context.fillStyle = "rgba(225,225,225,0.5)";
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
  }
}

export class CardButton {
  constructor(xpos, ypos, zpos, wpos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.zpos = zpos;
    this.wpos = wpos;
  }

  draw(context) {
    //cria botoes
    context.beginPath();
    context.rect(
      (this.xpos = xpos),
      (this.ypos = ypos),
      (this.zpos = zpos),
      (this.wpos = wpos)
    );
    context.fillStyle = "rgba(225,225,225,0.5)";
    context.fillStyle = "rgba(225,225,225,0.5)";
    context.fill();
    //borda
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();
    context.closePath();
    context.font = "18pt Arial bolder";
    context.fillStyle = "#000000";
    context.fillText("Minha Lista", 385, 425);
  }
}

let my_square = new CardButton(110, 110, 450, 140);

my_square.draw(context)