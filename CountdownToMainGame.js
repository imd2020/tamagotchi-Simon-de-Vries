import TimerMinigames from "./TimerMinigames.js";

export default class CountDownToMainGame extends TimerMinigames {
  constructor(x, y) {
    super(x, y);
    this.countDownNumbers = ["GO!", 1, 2];
  }

  countDown() {
    push();
    clear();
    translate(this.x, this.y);
    this.two += 20;
    if (this.two > 255) {
      this.two2 -= 40;
    }
    if (this.two + this.two2 < -40) {
      this.one += 20;
    }
    if (this.one > 255) {
      this.one2 -= 40;
    }
    if (this.one + this.one2 < -40) {
      this.go += 20;
    }
    if (this.go > 255) {
      this.go2 -= 40;
    }

    textAlign(CENTER);
    textSize(65);
    fill(110, 248, 189, this.one + this.one2);
    textFont("VCR OSD MONO");
    text(" " + this.countDownNumbers[1], -15, 15);

    fill(110, 248, 189, this.two + this.two2);
    text(" " + this.countDownNumbers[2], -15, 15);

    fill(110, 248, 189, this.go + this.go2);
    text(" " + this.countDownNumbers[0], -8, 15);

    pop();
  }

  timeCake() {}

  resetTimesUpVariables() {
    this.one = 0;
    this.one2 = 0;
    this.two = 0;
    this.two2 = 0;
    this.go = 0;
    this.go2 = 0;
  }
}
