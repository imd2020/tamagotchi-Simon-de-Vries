import rewardSign from "./rewardSign";

export default class energyGame {
  constructor() {
    this.energyRequirement = 0;
    this.energyRequirementorGain = 0.1;

    this.fluidTranceparency = 100;
    this.fluidTranceparencyVariable = 0;

    this.batteryBracketElement = loadImage(
      "Links/gameElements/waterBracket.png"
    );
    this.waterBottomElement = loadImage("Links/gameElements/waterBottom.png");
    this.waterTopElement = loadImage("Links/gameElements/waterTop.png");
    this.ausschnittElement = loadImage("Links/gameElements/ausschnitt.png");

    this.rewardEnergySigns = [];
  }

  energyConsume() {
    this.energyRequirement += this.energyRequirementorGain;

    if (this.energyRequirement > 106) {
      this.energyRequirement = 106;
    }

    if (this.energyRequirement < 0) {
      this.energyRequirement = 0;
    }
  }

  batteryFluidEmphasis() {
    //Farbe
    this.fluidTranceparency += this.fluidTranceparencyVariable;

    if (this.fluidTranceparency <= 120) {
      this.fluidTranceparencyVariable = 1;
    }
    if (this.fluidTranceparency >= 150) {
      this.fluidTranceparencyVariable = -1;
    }
  }

  batteryDesign() {
    //Bottom Battery Fluid

    image(
      this.waterBottomElement,
      -126.7,
      31.2,
      this.waterBottomElement.width / 2,
      this.waterBottomElement.height / 2
    );

    //Right Battery Fluid
    //0 min, -86 max.
    push();
    noStroke();
    rectMode(CORNERS);
    fill(116, 161, 216, this.fluidTranceparency);
    rect(-124.5, 30, -90, -86 + this.energyRequirement);
    pop();

    //Left Battery Fluid
    //20 min., -66 max
    push();
    noStroke();
    rectMode(CORNERS);
    fill(116, 161, 216, this.fluidTranceparency);
    rect(-163.5, 55, -128.9, -66 + this.energyRequirement);
    pop();

    //Top Battery Fluid
    //10 min., 76 max.
    image(
      this.waterTopElement,
      -126.7,
      -76 + this.energyRequirement,
      this.waterTopElement.width / 2,
      this.waterTopElement.height / 2
    );

    //Overlay Battery Fluid
    image(
      this.ausschnittElement,
      -126.7,
      31.2,
      this.ausschnittElement.width / 2,
      this.ausschnittElement.height / 2
    );

    //Battery Brackets
    image(
      this.batteryBracketElement,
      -154.5,
      -26,
      this.batteryBracketElement.width / 2,
      this.batteryBracketElement.height / 2
    );
  }

  fillBatteryWithKeys() {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.energyRequirement -= 0.8;
      this.rewardEnergySigns.push(new rewardSign(-205, 200, "+1", 20, 15, 5));
    }
  }
}
