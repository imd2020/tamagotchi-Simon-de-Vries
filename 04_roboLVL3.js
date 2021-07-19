import RoboLVL2 from "./03_RoboLVL2.js";
export default class RoboLVL3 extends RoboLVL2 {
  constructor(x, y) {
    super(x, y);

    this.headElement = loadImage("Links/gameElements/bodyLVL3.png");
    this.headCircleElement = loadImage("Links/gameElements/headCircle.png");

    this.fade = 0;
    this.fadeVariable = 0;
    this.headCircleX = 0;
    this.headCircleY = -64;

    this.legLX = 23;
    this.legLY = 15;
    this.legRX = -17;
    this.legRY = 31;

    this.earLX = 35;
    this.earLY = -50;
    this.earRX = -28;
    this.earRY = -7;

    this.faceX = 28;
    this.faceY = -7;

    this.armRX = -10;
    this.armRY = 10;

    this.headX = 0;
    this.headY = -20;
  }

  headCircle() {
    push();
    tint(255, 255 + this.fade * 255);
    image(
      this.headCircleElement,
      this.headCircleX,
      this.headCircleY,
      this.headCircleElement.width / 2,
      this.headCircleElement.height / 2
    );
    pop();
    push();
    tint(255, 105 + this.fade * 255);
    image(
      this.headCircleElement,
      this.headCircleX,
      this.headCircleY - 5,
      this.headCircleElement.width / 2.5,
      this.headCircleElement.height / 2.5
    );
    pop();
    push();
    tint(255, 5 + this.fade * 255);
    image(
      this.headCircleElement,
      this.headCircleX,
      this.headCircleY - 10,
      this.headCircleElement.width / 3.2,
      this.headCircleElement.height / 3.2
    );
    pop();
    push();
    tint(255, -55 + this.fade * 255);
    image(
      this.headCircleElement,
      this.headCircleX,
      this.headCircleY - 13,
      this.headCircleElement.width / 4.7,
      this.headCircleElement.height / 4.7
    );
    pop();
  }

  headCircleAnimation() {
    this.fade = Math.sin(this.fadeVariable);
    this.fadeVariable += 0.1;
  }
}
