export default class RoboLVL2 extends RoboLVL1 {
  constructor(x, y) {
    super(x, y);
    this.LVL2bodyElement = loadImage("Links/gameElements/bodyLVL2.png");
    this.armLElement = loadImage("Links/gameElements/armL.png");
    this.armRElement = loadImage("Links/gameElements/armR.png");
    this.legLX = 23;
    this.legLY = 22;
    this.legRX = -7;
    this.legRY = 38;

    this.earLX = 18;
    this.earLY = -80;
    this.earRX = -27;
    this.earRY = -47;

    this.faceX = 17;
    this.faceY = -49;

    this.headX = 0;
    this.headY = -55;

    this.armLX = 30;
    this.armLY = -13;

    this.armRX = 0;
    this.armRY = 10;
  }

  LVL2body() {
    image(
      this.LVL2bodyElement,
      0,
      0,
      this.LVL2bodyElement.width / 2,
      this.LVL2bodyElement.height / 2
    );
  }

  armL() {
    push();
    translate(this.armLX, this.armLY);

    angleMode(DEGREES);
    rotate(-this.jump);

    image(
      this.armLElement,
      10,
      10,
      this.armLElement.width / 2,
      this.armLElement.height / 2
    );
    pop();
  }

  armR() {
    push();
    translate(this.armRX, this.armRY);

    angleMode(DEGREES);
    rotate(this.jump);

    image(
      this.armRElement,
      10,
      10,
      this.armRElement.width / 2,
      this.armRElement.height / 2
    );
    pop();
  }
}
