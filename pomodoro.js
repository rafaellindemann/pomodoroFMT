function pomodoro(){
     var image = document.getElementById('image');
    if (image.src.match("assets/initial.png")) {
      image.src = "assets/study.jpg";
      image.alt = "Imagem 2";
    } else {
      image.src = "imagem1.jpg";
      image.alt = "Imagem 1";
    }
    setTimeout(function() {
     alongar();
    },10000);
}
async function alongar(){
    setTimeout(function() {
  var image = document.getElementById("image");
  if (image.src.match("assets/study.jpg")) {
    image.src = "assets/alongamentos.jpg";
    image.alt = "Imagem 3";}
  }, 3000);}

 