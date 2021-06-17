function setup() {
  //1100x620px
  let myCanvas = createCanvas(640, 640);
  myCanvas.parent("tamagotchi");

  frameRate(30);
}

// deaktiviert Pfeiltasten
window.addEventListener("keydown", function (event) {
  if ([32].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

new p5();
let width = windowWidth;
let height = windowHeight;
