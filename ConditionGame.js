import RewardSign from "./RewardSign.js";
import WarnSign from "./WarnSign.js";

export default class ConditionGame {
  constructor(
    conditionRequirementOrGain,
    gainConditionWithKey,
    gainConditionXPamount
  ) {
    this.conditionRequirementOrGain = conditionRequirementOrGain;
    this.gainConditionWithKey = gainConditionWithKey;
    this.gainConditionXPamount = gainConditionXPamount;

    this.warnSign = new WarnSign(125, -250, "BAD CONDITION", 15);

    this.conditionMeterInRoom = loadImage(
      "Links/gameElements/conditionMeter.png"
    );

    this.conditionRandomArrow = loadImage(
      "Links/gameElements/conditionRandomArrow.png"
    );

    this.firstSpan = { x: 40, y: -68 };
    this.secondSpan = { x: 70, y: -48 };
    this.thirdSpan = { x: 100, y: -29 };
    this.fourthSpan = { x: 130, y: -10 };

    this.spans = [
      this.firstSpan,
      this.secondSpan,
      this.thirdSpan,
      this.fourthSpan,
    ];
    this.randomSpan = Math.floor(random(0, 4));

    this.conditionRequirement = 0;

    this.stopArrowX = 0;
    this.stopArrowXVariable = 5;
    this.stopArrowY = 0;
    this.stopArrowYVariable = 3.2;

    this.stopArrow = loadImage("Links/gameElements/conditionArrow.png");

    this.compareArrowsNow = false;
    this.oldstopArrowX = 0;
    this.oldstopArrowY = 0;
    this.oldstopArrowXVariable = 0;
    this.oldstopArrowYVariable = 0;
    this.debuggingMultipleSpaceHits = true;

    this.correctStopArrow = false;
    this.wrongStopArrow = false;

    this.conditionCounter = 0;
    this.conditionErrorGIF = loadImage(
      "Links/gameElements/glitchCondition.gif"
    );

    this.rewardConditionSigns = [];
    this.conditionGameXP = 0;
  }

  conditionSystem() {
    this.conditionRequirement += this.conditionRequirementOrGain;

    if (this.conditionRequirement > 150) {
      this.conditionRequirement = 150;
    }
    if (this.conditionRequirement < 0) {
      this.conditionRequirement = 0;
    }
  }

  displayConditionScala() {
    stroke(0, 255, 255);
    noFill();
    rect(30, -225, 150, 15, 10);
    rect(60, -225, 120, 15, 10);

    //min 0, max 150
    noStroke();
    fill(0, 255, 255);
    rect(180, -225, -150 + this.conditionRequirement, 15, 10);

    textSize(9);
    textFont("VCR OSD MONO");
    text("+XP", 38, -214);
  }

  displayConditionMeterInRoom() {
    image(
      this.conditionMeterInRoom,
      88,
      -73,
      this.conditionMeterInRoom.width / 2,
      this.conditionMeterInRoom.height / 2
    );
  }

  displayRandomConditionArrow() {
    image(
      this.conditionRandomArrow,
      this.spans[this.randomSpan].x,
      this.spans[this.randomSpan].y,
      this.conditionRandomArrow.width / 2,
      this.conditionRandomArrow.height / 2
    );
  }

  stopArrowMovement() {
    if (this.compareArrowsNow === false) {
      this.stopArrowX += this.stopArrowXVariable;
      this.stopArrowY += this.stopArrowYVariable;

      if (this.stopArrowX >= 122) {
        this.stopArrowX = 122;
        this.stopArrowXVariable += -5;
        this.stopArrowYVariable += -3.2;
      }
      if (this.stopArrowX <= 0) {
        this.stopArrowX = 0;
        this.stopArrowXVariable += 5;
        this.stopArrowYVariable += 3.2;
      }
    }
  }

  displayStopArrow() {
    image(
      this.stopArrow,
      29 + this.stopArrowX,
      -150 + this.stopArrowY,
      this.stopArrow.width / 2,
      this.stopArrow.height / 2
    );
  }

  stopStopArrowWithKeys() {
    if (this.debuggingMultipleSpaceHits === true) {
      if (keyCode === 32) {
        this.oldstopArrowX = this.stopArrowX;
        this.oldstopArrowY = this.stopArrowY;
        this.oldstopArrowXVariable = this.stopArrowXVariable;
        this.oldstopArrowYVariable = this.stopArrowYVariable;
        this.stopArrowXVariable = 0;
        this.stopArrowYVariable = 0;
        this.compareArrowsNow = true;
        this.debuggingMultipleSpaceHits = false;
      }
    }
  }

  compareArrows() {
    if (this.compareArrowsNow === true) {
      if (this.randomSpan === 0 && this.stopArrowX < 30) {
        this.correctStopArrow = true;
      } else if (
        this.randomSpan === 1 &&
        this.stopArrowX >= 30 &&
        this.stopArrowX < 56
      ) {
        this.correctStopArrow = true;
      } else if (
        this.randomSpan === 2 &&
        this.stopArrowX >= 56 &&
        this.stopArrowX < 86
      ) {
        this.correctStopArrow = true;
      } else if (this.randomSpan === 3 && this.stopArrowX >= 86) {
        this.correctStopArrow = true;
      } else {
        this.wrongStopArrow = true;
      }
    }
  }

  wrongOrCorrectArrow() {
    if (this.correctStopArrow === true) {
      this.rewardConditionSigns.push(new RewardSign(210, -155, "+3", 35, 5, 1));
      this.conditionRequirement -= this.gainConditionWithKey;

      this.randomSpan = Math.floor(random(0, 4));
      this.stopArrowX = this.oldstopArrowX;
      this.stopArrowY = this.oldstopArrowY;
      this.stopArrowXVariable = this.oldstopArrowXVariable;
      this.stopArrowYVariable = this.oldstopArrowYVariable;

      this.compareArrowsNow = false;
      this.debuggingMultipleSpaceHits = true;
      this.correctStopArrow = false;
    } else if (this.wrongStopArrow === true) {
      image(
        this.conditionErrorGIF,
        29 + this.stopArrowX,
        -150 + this.stopArrowY,
        this.conditionErrorGIF.width / 4.5,
        this.conditionErrorGIF.height / 4.5
      );

      this.conditionCounter += 1;
      if (this.conditionCounter > 40) {
        this.conditionCounter = 0;

        this.stopArrowX = this.oldstopArrowX;
        this.stopArrowY = this.oldstopArrowY;
        this.stopArrowXVariable = this.oldstopArrowXVariable;
        this.stopArrowYVariable = this.oldstopArrowYVariable;
        this.compareArrowsNow = false;
        this.debuggingMultipleSpaceHits = true;
        this.wrongStopArrow = false;
      }
    }
  }

  warnSignCondition() {
    if (this.conditionRequirement > 100) {
      this.warnSign.warnSign();
      this.warnSign.warnSignSpeed();
    }
  }

  gainConditionXP() {
    if (this.conditionRequirement < 30) {
      this.conditionGameXP = this.gainConditionXPamount;
    } else {
      this.conditionGameXP = 0;
    }
  }

  reset() {
    this.conditionRequirement = 0;

    this.stopArrowX = 0;
    this.stopArrowXVariable = 5;
    this.stopArrowY = 0;
    this.stopArrowYVariable = 3.2;

    this.compareArrowsNow = false;
    this.oldstopArrowX = 0;
    this.oldstopArrowY = 0;
    this.oldstopArrowXVariable = 0;
    this.oldstopArrowYVariable = 0;
    this.debuggingMultipleSpaceHits = true;

    this.correctStopArrow = false;
    this.wrongStopArrow = false;

    this.conditionCounter = 0;

    this.rewardConditionSigns = [];
    this.conditionGameXP = 0;
  }
}
