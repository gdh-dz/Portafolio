let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: rgb(199, 103, 202);'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: rgb(199, 103, 202);">Estudio ingeniería en tecnologías de software y voy en 5to semestre. </br> </br> Bienvenid@ a mi portafolio!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
