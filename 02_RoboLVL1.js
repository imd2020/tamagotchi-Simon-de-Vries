export default class RoboLVL1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.headElement = loadImage("./Links/gameElements/bodyLVL1.png");
    this.faceElement = loadImage("./Links/gameElements/face.png");
    this.legElement = loadImage("./Links/gameElements/leg.png");
    this.earLElement = loadImage("./Links/gameElements/earL.png");
    this.earRElement = loadImage("./Links/gameElements/earR.png");
    this.jump = 0;
    this.jumpDirection = 2;

    this.legLX = 19;
    this.legLY = 16;
    this.legRX = -5;
    this.legRY = 27;

    this.earLX = 18;
    this.earLY = -25;
    this.earRX = -27;
    this.earRY = 8;

    this.faceX = 17;
    this.faceY = 6;

    this.headX = 0;
    this.headY = 0;
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
    translate(this.legLX, this.legLY);

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
      this.earLX,
      this.earLY,
      this.earLElement.width / 2,
      this.earLElement.height / 2
    );
  }

  head() {
    image(
      this.headElement,
      this.headX,
      this.headY,
      this.headElement.width / 2,
      this.headElement.height / 2
    );
  }

  legR() {
    push();
    translate(this.legRX, this.legRY);

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
      this.earRX,
      this.earRY,
      this.earRElement.width / 2,
      this.earRElement.height / 2
    );
  }

  face() {
    imageMode(CENTER);
    image(
      this.faceElement,
      this.faceX,
      this.faceY,
      this.faceElement.width / 2,
      this.faceElement.height / 2
    );
  }
  legMove() {}
}
