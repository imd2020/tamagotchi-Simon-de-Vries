export default class WinScreen {
  constructor() {
    this.fadeInBackground = 0;
    this.fadeInScreen = 0;
    this.endScreenGIF = loadImage("./Links/gameElements/win.gif");
  }

  justFadeInBackground() {
    //fade in
    this.fadeInBackground += 10;
    noStroke();
    fill(21, 17, 77, this.fadeInBackground);
    rect(-320, -320, 640, 640);
    if (this.fadeInBackground > 255) {
      this.fadeInBackground = 255;
    }
  }

  showScreen() {
    //fade in
    this.fadeInScreen += 10;

    fill(21, 17, 77, 255);
    rect(-320, -320, 640, 640);

    push();
    //text top
    textAlign(CENTER);
    fill(110, 248, 189, this.fadeInScreen);
    noStroke();
    textSize(75);
    textFont("VCR OSD MONO");
    text("HEY", 0, -155);
    text("ROBOTCHI", 15, -80);

    //GIF
    imageMode(CORNER);
    image(
      this.endScreenGIF,
      -140,
      -60,
      this.endScreenGIF.width / 1.5,
      this.endScreenGIF.height / 1.5
    );

    //text bottom
    textSize(15);
    text("YOU ARE ALMOST HUMAN NOW!", 0, 135);

    if (this.fadeInScreen > 255) {
      this.fadeInScreen = 255;
    }
    pop();
  }

  backFromEndScreenButtonDesign() {
    push();
    if (mouseX > 235 && mouseX < 405 && mouseY > 560 && mouseY < 610) {
      // fill
      rectMode(CENTER);
      fill(223, 119, 193, this.fadeInScreen);
      rect(0, 194, 140, 40, 40);

      //text
      textAlign(CENTER);
      fill(21, 17, 77, this.fadeInScreen);
      noStroke();
      textSize(15);
      textFont("VCR OSD MONO");
      text("BACK TO MENU", 0, 200);
    } else {
      //corner
      rectMode(CENTER);
      noFill();
      stroke(223, 119, 193, this.fadeInScreen);
      rect(0, 194, 140, 40, 40);

      //text
      textAlign(CENTER);
      fill(223, 119, 193, this.fadeInScreen);
      noStroke();
      textSize(15);
      textFont("VCR OSD MONO");
      text("BACK TO MENU", 0, 200);
    }

    pop();
  }

  backFromEndScreenButtonClick() {
    if (mouseX > 235 && mouseX < 405 && mouseY > 560 && mouseY < 610) {
      return true;
    }
  }
}
