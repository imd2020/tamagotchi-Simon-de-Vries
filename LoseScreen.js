import WinScreen from "./WinScreen.js";

export default class LoseScreen extends WinScreen {
  constructor() {
    super();
    this.endScreenGIF = loadImage("./Links/gameElements/lose.gif");
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
    text("ROBOTCHI", 5, -155);
    text("DIED", 5, -85);

    //GIF
    imageMode(CORNER);
    image(
      this.endScreenGIF,
      -158,
      -70,
      this.endScreenGIF.width / 1.5,
      this.endScreenGIF.height / 1.5
    );

    //text bottom
    textSize(15);
    text("THE FLOOR WAS VERY SLIPPERY", 0, 135);

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
}
