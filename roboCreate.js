function render() {
  //Background 1100x620 Pixel (16:9)
  translate(550, 310);
  scale(2);
}

let LVL1bodyElement = loadImage("Links/gameElements/bodyLVL1.png");
let faceElement = loadImage("Links/gameElements/face.png");

//NEW
let legElement = loadImage("Links/gameElements/leg.png");
let earLElement = loadImage("Links/gameElements/earL.png");
let earRElement = loadImage("Links/gameElements/earR.png");

let move = 0;
let direction = 2;

function draw() {
  render();
  clear();

  translate(0, (move * move) / 10);

  move += direction;

  if (move > 20) {
    direction = -2;
  }

  if (move < -20) {
    direction = 2;
  }

  //EAR L
  image(earLElement, 18, -25, earLElement.width / 2, earLElement.height / 2);

  //LEG L
  push();
  translate(19, 16);

  angleMode(DEGREES);
  rotate(move);

  imageMode(CENTER);
  image(legElement, 0, 10, legElement.width / 2, legElement.height / 2);
  pop();

  // Body
  imageMode(CENTER);
  image(
    LVL1bodyElement,
    0,
    0,
    LVL1bodyElement.width / 2,
    LVL1bodyElement.height / 2
  );

  //
  image(faceElement, 17, 6, faceElement.width / 2, faceElement.height / 2);

  //LEG R
  push();
  translate(-5, 27);
  angleMode(DEGREES);
  rotate(-move);
  imageMode(CENTER);
  image(legElement, 0, 10, legElement.width / 2, legElement.height / 2);
  pop();

  //EAR R
  image(earRElement, -27, 8, earRElement.width / 2, earRElement.height / 2);
}
