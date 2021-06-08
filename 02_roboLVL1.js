export default class roboLVL1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.LVL1bodyElement = loadImage("Links/gameElements/bodyLVL1.png");
    this.faceElement = loadImage("Links/gameElements/face.png");
    this.legElement = loadImage("Links/gameElements/leg.png");
    this.earLElement = loadImage("Links/gameElements/earL.png");
    this.earRElement = loadImage("Links/gameElements/earR.png");
    this.jump = 0;
    this.jumpDirection = 2;
  }
  move() {
    translate(this.x, this.y + (this.jump * this.jump) / 20);

    this.jump += this.jumpDirection;

    if (this.jump > 20) {
      this.jumpDirection = -2;
    }

    if (this.jump < -20) {
      this.jumpDirection = 2;
    }
  }

  legL() {
    push();
    translate(19, 16);

    angleMode(DEGREES);
    rotate(this.jump);

    imageMode(CENTER);
    image(
      this.legElement,
      0,
      10,
      this.legElement.width / 2,
      this.legElement.height / 2
    );
    pop();
  }

  earL() {
    imageMode(CENTER);
    image(
      this.earLElement,
      18,
      -25,
      this.earLElement.width / 2,
      this.earLElement.height / 2
    );
  }

  LVL1body() {
    image(
      this.LVL1bodyElement,
      0,
      0,
      this.LVL1bodyElement.width / 2,
      this.LVL1bodyElement.height / 2
    );
  }

  legR() {
    push();
    translate(-5, 27);

    angleMode(DEGREES);
    rotate(-this.jump);

    image(
      this.legElement,
      0,
      10,
      this.legElement.width / 2,
      this.legElement.height / 2
    );
    // -5, bei image x und y ohne Translate (-10)
    // 37,
    pop();
  }

  earR() {
    image(
      this.earRElement,
      -27,
      8,
      this.earRElement.width / 2,
      this.earRElement.height / 2
    );
  }

  face() {
    imageMode(CENTER);
    image(
      this.faceElement,
      17,
      6,
      this.faceElement.width / 2,
      this.faceElement.height / 2
    );
  }
  legMove() {}
}
