class Retangulo {
  constructor(cor, quadrado) {
    this.quadrado = context.rect(310, 310, 150, 140);

    this.cor = context.fillStyle = "#fff";
  }
  //Getter
  get desenho() {
    return this.draw();
  }

  draw() {
    return Retangulo;
  }
}

const retangulo = new Retangulo();

//export const Tooltip = (
//iconType: 'text' | 'solidColor' | 'image',
//icon: string,
//  message: string,
//)
