import RoboLVL3 from "./04_RoboLVL3.js";

export default class RoboLVL4 extends RoboLVL3 {
  constructor(x, y) {
    super(x, y);
    this.headElement = loadImage("./Links/gameElements/bodyLVL4.png");
    this.scaloMeterElement = loadImage("./Links/gameElements/bodyLvl4Arrow.png");

    this.headCircleX = 0;
    this.headCircleY = -90;

    this.legLX = 23;
    this.legLY = 15;
    this.legRX = -14;
    this.legRY = 31;

    this.earLX = 23;
    this.earLY = -85;
    this.earRX = -25;
    this.earRY = -57;

    this.faceX = 19;
    this.faceY = -40;

    this.armLX = 25;
    this.armLY = -30;
    this.armRX = -3;
    this.armRY = -13;

    this.headX = 0;
    this.headY = -30;

    this.scaloMeterElementX = -18;
    this.scaloMeterElementY = 9;
    this.scaloMeterSpeed = -1;
  }

  LVL4scalometer() {
    image(
      this.scaloMeterElement,
      this.scaloMeterElementX,
      this.scaloMeterElementY,
      this.scaloMeterElement.width / 2,
      this.scaloMeterElement.height / 2
    );
  }
  LVL4scalometerAnimation() {
    this.scaloMeterElementY += this.scaloMeterSpeed;
    if (this.scaloMeterElementY < -32) {
      this.scaloMeterSpeed = 1;
    }
    if (this.scaloMeterElementY > 9) {
      this.scaloMeterSpeed = -1;
    }
  }
}
