class Text {
  constructor(titulo, classificacao, sinopse, botoes) {
    this.titulo = titulo;
    this.classificacao = classificacao;
    this.sinopse = sinopse;
    this.botoes = botoes;
  }
  //cria metodo
  getTitulo() {
    context.font = "5em Arial bolder";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Cabloca", 250, 100);
  }
}

new Text(titulo).getTitulo()