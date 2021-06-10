export default class WarnSign {
  constructor() {
    this.warn = 0;
    this.warnFlash = 10;
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
    noStroke();
    textFont("VCR OSD MONO");
    textSize(20);
    fill(200, 0, 0, this.warn);
    text("CRITICAL", 0, 0);
  }
}
