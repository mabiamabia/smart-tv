
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const img = new Image();
  img.onload = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src =
    "http://s2.glbimg.com/4rW8-QbGuoqeDoSdCnHYQoieZWA=/0x720/filters:quality(40)/https://s2.glbimg.com/O0xgBL5KAay23VHejhPUOznfEAo=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/A/S/ZgcMekRSAPYiB5inuMFw/2020-1002-cabocla-background.jpg";
}

var img = new Image(); // Create new img element
img.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);
img.src =
  "https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/globo-pantanal-juma-alanis-guillen-parto-morre_fixed_big.jpg"; // Set source pat
