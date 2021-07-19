import RoboLVL1 from "./02_RoboLVL1.js";

export default class Menu {
  constructor() {
    this.menuRobo = new RoboLVL1(0, -114);
    this.menuPlatform = loadImage("./Links/gameElements/mainMenuPlatform.png");
    this.instruction = loadImage("./Links/gameElements/instruction.png");
    this.fadeInInstructions = 0;

    this.playButtonAnimatedCorner = {
      strokeWeight: 0,
      width: 140,
      height: 40,
      cornerRadius: 40,
    };

    this.strokeAnimation = 0;
  }

  startScreen() {
    //transparent background
    clear();

    //push & pop for textAlign etc.
    push();
    //Platform
    imageMode(CENTER);
    image(
      this.menuPlatform,
      0,
      -60,
      this.menuPlatform.width / 2.5,
      this.menuPlatform.height / 2.5
    );
    //robo
    push();
    this.menuRobo.move();
    this.menuRobo.legL();
    this.menuRobo.earL();
    this.menuRobo.head();
    this.menuRobo.legR();
    this.menuRobo.earR();
    this.menuRobo.face();
    pop();
    pop();
  }

  animateButtonCorner() {
    this.strokeAnimation = gsap.to(this.playButtonAnimatedCorner, {
      duration: 2,
      ease: "ease",
      strokeWeight: 4,
      width: 150,
      height: 50,
      cornerRadius: 60,
      repeat: -1,
      yoyo: true,
    });
  }

  displayButtonCorner() {
    rectMode(CENTER);
    noFill();
    strokeWeight(this.playButtonAnimatedCorner.strokeWeight);
    stroke(0, 255, 255);
    rect(
      0,
      51,
      this.playButtonAnimatedCorner.width,
      this.playButtonAnimatedCorner.height,
      this.playButtonAnimatedCorner.cornerRadius
    );
  }

  playButtonDesign() {
    push();
    if (mouseX > 235 && mouseX < 405 && mouseY > 390 && mouseY < 440) {
      //Animated Corner
      this.displayButtonCorner();
      //corner fill
      rectMode(CENTER);
      fill(0, 255, 255);
      noStroke();
      rect(0, 51, 140, 40, 40);

      //text fill
      textAlign(CENTER);
      fill(43, 22, 98);
      noStroke();
      textSize(20);
      textFont("VCR OSD MONO");
      text("PLAY GAME", 0, 60);
    } else {
      //corner
      rectMode(CENTER);
      noFill();
      stroke(0, 255, 255);
      rect(0, 51, 140, 40, 40);

      //text
      textAlign(CENTER);
      fill(0, 255, 255);
      noStroke();
      textSize(20);
      textFont("VCR OSD MONO");
      text("PLAY GAME", 0, 60);
    }
    pop();
  }
  playButtonClick() {
    if (mouseX > 235 && mouseX < 405 && mouseY > 390 && mouseY < 440) {
      return true;
    }
  }

  instructionButtonDesign() {
    push();
    if (mouseX > 260 && mouseX < 380 && mouseY > 460 && mouseY < 500) {
      //corner
      rectMode(CENTER);
      noFill();
      stroke(110, 248, 189);
      rect(0, 105, 100, 30, 40);

      //text
      textAlign(CENTER);
      fill(110, 248, 189);
      noStroke();
      textSize(10);
      textFont("VCR OSD MONO");
      text("INSTRUCTIONS", 0, 110);
    } else {
      //text
      textAlign(CENTER);
      fill(110, 248, 189);
      noStroke();
      textSize(10);
      textFont("VCR OSD MONO");
      text("INSTRUCTIONS", 0, 110);
    }
    pop();
  }
  instructionButtonClick() {
    if (mouseX > 260 && mouseX < 380 && mouseY > 460 && mouseY < 500) {
      return true;
    }
  }

  showInstruction() {
    push();
    clear();
    //Fade in
    this.fadeInInstructions += 15;
    if (this.fadeInInstructions > 255) {
      this.fadeInInstructions = 255;
    }
    imageMode(CENTER);
    tint(255, this.fadeInInstructions);
    image(
      this.instruction,
      0,
      -25,
      this.instruction.width / 1.4,
      this.instruction.height / 1.4
    );
    pop();
  }

  backToMenuButtonDesign() {
    push();
    if (mouseX > 45 && mouseX < 120 && mouseY > 305 && mouseY < 343) {
      //corner
      rectMode(CENTER);
      fill(223, 119, 193);
      rect(-200, -24, 64, 30, 20);

      //text
      textAlign(CENTER);
      fill(43, 22, 98);
      noStroke();
      textSize(10);
      textFont("VCR OSD MONO");
      text("<- BACK", -200, -20);
    } else {
      //corner
      rectMode(CENTER);
      noFill();
      stroke(223, 119, 193);
      rect(-200, -24, 64, 30, 20);

      //text
      textAlign(CENTER);
      fill(223, 119, 193);
      noStroke();
      textSize(10);
      textFont("VCR OSD MONO");
      text("<- BACK", -200, -20);
    }
    pop();
  }

  backToMenuButtonClick() {
    if (mouseX > 45 && mouseX < 120 && mouseY > 305 && mouseY < 343) {
      this.fadeInInstructions = 0;
      return true;
    }
  }
}
