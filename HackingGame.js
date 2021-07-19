import RewardSign from "./RewardSign.js";
import WarnSign from "./WarnSign.js";

export default class HackingGame {
  constructor(
    hackingRequirementOrGain,
    gainIntelligenceWithHacking,
    gainHackingXPamount
  ) {
    this.a = loadImage("./Links/alphabet/a.png");
    this.s = loadImage("./Links/alphabet/s.png");
    this.d = loadImage("./Links/alphabet/d.png");
    this.f = loadImage("./Links/alphabet/f.png");
    this.g = loadImage("./Links/alphabet/g.png");
    this.h = loadImage("./Links/alphabet/h.png");
    this.j = loadImage("./Links/alphabet/j.png");
    this.k = loadImage("./Links/alphabet/k.png");
    this.l = loadImage("./Links/alphabet/l.png");

    this.randomLetterMovement = 0;
    this.randomLetterMovementVariable = 0.5;

    this.alphabet = [
      this.a,
      this.s,
      this.d,
      this.f,
      this.g,
      this.h,
      this.j,
      this.k,
      this.l,
    ];
    this.randomLetterFromAlphabet = 0;
    this.newRandomLetter = true;

    this.hackingError = false;

    this.rewardHackingSigns = [];
    this.forEasyKeysCompareArray = [
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
    ];
    this.hackingRequirement = 0;
    this.hackingRequirementOrGain = hackingRequirementOrGain;
    this.gainIntelligenceWithHacking = gainIntelligenceWithHacking;
    this.gainHackingXPamount = gainHackingXPamount;

    this.hackingErrorGIF = loadImage("./Links/gameElements/glitch.gif");
    this.errorCounter = 0;

    this.warnSign = new WarnSign(-128, -250, "LACK OF DATA", 15);

    this.hackingGameXP = 0;
  }

  randomLetterMove() {
    this.randomLetterMovement += this.randomLetterMovementVariable;
    if (this.randomLetterMovement > 4) {
      this.randomLetterMovementVariable = -0.5;
    }
    if (this.randomLetterMovement < -4) {
      this.randomLetterMovementVariable = 0.5;
    }
  }

  generateRandomLetter() {
    if (this.newRandomLetter === true) {
      this.randomLetterFromAlphabet = Math.floor(random(0, 9));
      this.newRandomLetter = false;
    }
  }

  displayRandomLetter() {
    if (this.hackingError === false) {
      image(
        this.alphabet[this.randomLetterFromAlphabet],
        -38,
        -100 + this.randomLetterMovement,
        this.alphabet[this.randomLetterFromAlphabet].width / 2,
        this.alphabet[this.randomLetterFromAlphabet].height / 2
      );
    }
  }

  compareKeyInput() {
    for (let i = 0; i < 9; i++) {
      if (
        key === this.forEasyKeysCompareArray[i] &&
        this.randomLetterFromAlphabet === i
      ) {
        this.rewardHackingSigns.push(
          new RewardSign(-210, -155, "+5", 35, 5, 1)
        );
        this.hackingRequirement -= this.gainIntelligenceWithHacking;
        this.newRandomLetter = true;
      }
      if (
        key === this.forEasyKeysCompareArray[i] &&
        this.randomLetterFromAlphabet !== i
      ) {
        this.hackingError = true;
      }
    }
  }

  showErrorMessage() {
    if (this.hackingError === true) {
      image(
        this.hackingErrorGIF,
        -36,
        -102,
        this.hackingErrorGIF.width / 3,
        this.hackingErrorGIF.height / 3
      );
      this.errorCounter += 1;
      if (this.errorCounter > 30) {
        this.errorCounter = 0;
        this.newRandomLetter = true;
        this.hackingError = false;
      }
    }
  }
  displayHackingScala() {
    stroke(0, 255, 255);
    noFill();
    rect(-180, -225, 150, 15, 10);
    rect(-180, -225, 115, 15, 10);

    //min 0, max 150
    noStroke();
    fill(0, 255, 255);
    rect(-180, -225, 150 - this.hackingRequirement, 15, 10);

    textSize(9);
    textFont("VCR OSD MONO");
    text("+XP", -58, -214);
  }

  hackingSystem() {
    this.hackingRequirement += this.hackingRequirementOrGain;
    if (this.hackingRequirement > 150) {
      this.hackingRequirement = 150;
    }
    if (this.hackingRequirement < 0) {
      this.hackingRequirement = 0;
    }
  }

  warnSignHacking() {
    if (this.hackingRequirement > 90) {
      this.warnSign.warnSign();
      this.warnSign.warnSignSpeed();
    }
  }

  gainHackingXP() {
    if (this.hackingRequirement < 35) {
      this.hackingGameXP = this.gainHackingXPamount;
    } else {
      this.hackingGameXP = 0;
    }
  }

  reset() {
    this.randomLetterMovement = 0;
    this.randomLetterMovementVariable = 0.5;

    this.randomLetterFromAlphabet = 0;
    this.newRandomLetter = true;

    this.hackingError = false;

    this.rewardHackingSigns = [];

    this.hackingRequirement = 0;

    this.errorCounter = 0;

    this.hackingGameXP = 0;
  }
}
