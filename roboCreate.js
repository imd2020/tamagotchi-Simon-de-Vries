function render() {
  //Background 1100x620 Pixel (16:9)
  translate(550, 310);
  scale(2);
}

let LVL3bodyElement = loadImage("Links/gameElements/bodyLVL3.png");
let faceElement = loadImage("Links/gameElements/face.png");

//NEW
let legElement = loadImage("Links/gameElements/leg.png");
let earLElement = loadImage("Links/gameElements/earL.png");
let earRElement = loadImage("Links/gameElements/earR.png");

let move = 0;
let direction = 2;

headCircleX = 0;
headCircleY = -64;
headCircleElement = loadImage("Links/gameElements/headCircle.png");

fade = 0;
fadeVariable = 0;

////NNNEEEEWWWWWWWWWW
function headCircle() {
  push();
  tint(255, 255 + fade * 255);
  image(
    headCircleElement,
    headCircleX,
    headCircleY,
    headCircleElement.width / 2,
    headCircleElement.height / 2
  );
  pop();
  push();
  tint(255, 105 + fade * 255);
  image(
    headCircleElement,
    headCircleX,
    headCircleY - 5,
    headCircleElement.width / 2.5,
    headCircleElement.height / 2.5
  );
  pop();
  push();
  tint(255, 5 + fade * 255);
  image(
    headCircleElement,
    headCircleX,
    headCircleY - 10,
    headCircleElement.width / 3.2,
    headCircleElement.height / 3.2
  );
  pop();
  push();
  tint(255, -55 + fade * 255);
  image(
    headCircleElement,
    headCircleX,
    headCircleY - 13,
    headCircleElement.width / 4.7,
    headCircleElement.height / 4.7
  );
  pop();
}

function headCircleAnimation() {
  fade = Math.sin(fadeVariable);
  fadeVariable += 0.1;
}

scaloMeterElement = loadImage("Links/gameElements/bodyLvl4Arrow.png");

scaloMeterElementX = -18;
scaloMeterElementY = 5;
scaloMeterSpeed = -1;

function LVL4scalometer() {
  image(
    scaloMeterElement,
    scaloMeterElementX,
    scaloMeterElementY,
    scaloMeterElement.width / 2,
    scaloMeterElement.height / 2
  );
}
function LVL4scalometerAnimation() {
    scaloMeterElementY += scaloMeterSpeed;
    if (scaloMeterElementY<-50){
      scaloMeterSpeed = 1;
    }
    if (scaloMeterElementY>5){
      scaloMeterSpeed = -1;
    }
}

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
    LVL3bodyElement,
    0,
    0,
    LVL3bodyElement.width / 2,
    LVL3bodyElement.height / 2
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

  //NNNEEEEWWWWWWWWWW
  push();
  headCircle();
  headCircleAnimation();
  pop();
  LVL4scalometer();
  LVL4scalometerAnimation();
}
