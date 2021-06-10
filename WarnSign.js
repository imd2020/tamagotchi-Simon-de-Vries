export default class WarnSign {
  constructor(x, y, warnText) {
    this.warn = 0;
    this.warnFlash = 10;
    this.warnText = warnText;
    this.x = x;
    this.y = y;
  }

  warnSignSpeed() {
    this.warn += this.warnFlash;

    if (this.warn > 255) {
      this.warnFlash = -30;
    }
    if (this.warn < 0) {
      this.warnFlash = 10;
    }
  }
  warnSign() {
    push();
    textAlign(CENTER);
    translate(this.x, this.y);
    noStroke();
    textFont("VCR OSD MONO");
    textSize(15);
    fill(255, 51, 110, this.warn);
    text(this.warnText, 0, 15);
    pop();
  }
}
