console.log("Loaded 1.0 version");

// carregar o canvas
let canvas = document.getElementById("smart");
let context = canvas.getContext("2d");

let novela = new Image();
novela.src = "http://s2.glbimg.com/4rW8-QbGuoqeDoSdCnHYQoieZWA=/0x720/filters:quality(40)/https://s2.glbimg.com/O0xgBL5KAay23VHejhPUOznfEAo=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/A/S/ZgcMekRSAPYiB5inuMFw/2020-1002-cabocla-background.jpg";
novela.onload = () => {
  context.drawImage(novela, 0, 0);
};


