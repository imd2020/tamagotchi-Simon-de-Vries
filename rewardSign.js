export default class rewardSign {
  constructor(x, y, valueText, valueTextSize, tranceparencySpeed, riseUpSpeed) {
    this.x = x;
    this.y = y;
    this.valueText = valueText;
    this.valueTextSize = valueTextSize;
    this.tranceparencySpeed = tranceparencySpeed; //30
    this.riseUpSpeed = riseUpSpeed; //5
    this.rewardValueTranceparency = 255;
    this.rewardValueRiseUp = 0;
  }

  rewardValues() {
    push();
    translate(this.x, this.y);
    this.rewardValueTranceparency -= this.tranceparencySpeed;
    this.rewardValueRiseUp -= this.riseUpSpeed;
    fill(110, 248, 189, this.rewardValueTranceparency);
    textAlign(CENTER);
    textFont("VCR OSD Mono");
    textSize(this.valueTextSize);
    text(this.valueText, 0, this.rewardValueRiseUp);
    pop();
  }
}
