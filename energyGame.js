import RewardSign from "./RewardSign.js";
import WarnSign from "./WarnSign.js";

export default class EnergyGame {
  constructor(energyRequirementOrGain, gainEnergyWithKeys, gainEnergyXPamount) {
    this.energyRequirement = 0;

    this.energyRequirementOrGain = energyRequirementOrGain;
    this.gainEnergyWithKeys = gainEnergyWithKeys;
    this.gainEnergyXPamount = gainEnergyXPamount;

    this.fluidTranceparency = 100;
    this.fluidTranceparencyVariable = 0;

    this.batteryBracketElement = loadImage(
      "Links/gameElements/waterBracket.png"
    );
    this.waterBottomElement = loadImage("Links/gameElements/waterBottom.png");
    this.waterTopElement = loadImage("Links/gameElements/waterTop.png");
    this.ausschnittElement = loadImage("Links/gameElements/ausschnitt.png");

    this.rewardEnergySigns = [];

    this.warnSign = new WarnSign(-115, 210, "CRITICAL ENERGY", 15);

    this.energyGameXP = 0;
  }

  energyConsume() {
    this.energyRequirement += this.energyRequirementOrGain;

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
      this.energyRequirement -= this.gainEnergyWithKeys;
      this.rewardEnergySigns.push(new RewardSign(-200, 205, "+1", 20, 15, 5));
    }
  }

  warnSignEnergy() {
    if (this.energyRequirement > 70) {
      this.warnSign.warnSign();
      this.warnSign.warnSignSpeed();
    }
  }

  gainEnergyXP() {
    if (this.energyRequirement < 30) {
      this.energyGameXP = this.gainEnergyXPamount;
    } else {
      this.energyGameXP = 0;
    }
  }
}
