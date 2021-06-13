import RewardSign from "./RewardSign";
import WarnSign from "./WarnSign";

export default class ConditionGame {
  constructor(
    conditionRequirementOrGain,
    gainConditionWithKey,
    gainConditionXPamount
  ) {
    this.conditionRequirementOrGain = conditionRequirementOrGain;
    this.gainConditionWithKey = gainConditionWithKey;
    this.gainConditionXPamount = gainConditionXPamount;

    this.conditionRequirement = 0;

    this.warnSign = new WarnSign(128, -250, "BAD CONDITION", 15);
  }

  warnSignCondition() {
    if (this.conditionRequirement > 90) {
      this.warnSign.warnSign();
      this.warnSign.warnSignSpeed();
    }
  }

  gainConditionXP() {
    if (this.conditionRequirement < 30) {
      levelUpXP -= this.gainConditionXPamount;
    }
  }
}
