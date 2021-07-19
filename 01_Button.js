export default class Button {
  constructor(values) {
    this.x1 = values.x1;
    this.y1 = values.y1;
    this.x2 = values.x2;
    this.y2 = values.y2;
    this.x3 = values.x3;
    this.y3 = values.y3;
    this.r = values.r;
    this.g = values.g;
    this.b = values.b;
    this.buttonX1 = values.buttonX1;
    this.buttonY1 = values.buttonY1;

    this.buttonTypeSleeping = values.buttonTypeSleeping;
    this.buttonTypeDesignSleeping = loadImage(
      "./Links/gameElements/" + this.buttonTypeSleeping + ".png"
    );

    this.buttonTypeAwake = values.buttonTypeAwake;
    this.buttonTypeDesignAwake = loadImage(
      "./Links/gameElements/" + this.buttonTypeAwake + ".png"
    );

    this.mouseTriangledetectionEnergyButton = 0;
    this.back = loadImage("./Links/gameElements/background.png");
  }

  //weil der Background liegt zwischen der DetectionSpeicherung und der Detection liegt
  triangledetection() {
    //Color-Detection-3-Eck
    noStroke();
    fill(this.r, this.g, this.b);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, 10);

    //Farben speichern, bevor das Color-Detection-3-Eck überzeichnet wird
    //Get speichert die Farbe der Mauszeigerposition in ein Array (rgb + alpha)
    this.mouseTriangledetectionEnergyButton = get(mouseX, mouseY);
  }

  backgroundImage() {
    imageMode(CENTER);
    image(this.back, 0, 0, this.back.width / 2, this.back.height / 2);
  }

  buttonSleeps() {
    imageMode(CENTER);
    image(
      this.buttonTypeDesignSleeping,
      this.buttonX1,
      this.buttonY1,
      this.buttonTypeDesignSleeping.width / 2,
      this.buttonTypeDesignSleeping.height / 2
    );
  }
  hoverOver() {
    if (
      this.mouseTriangledetectionEnergyButton[0] === this.r &&
      this.mouseTriangledetectionEnergyButton[1] === this.g &&
      this.mouseTriangledetectionEnergyButton[2] === this.b &&
      this.mouseTriangledetectionEnergyButton[3] === 255
    ) {
      //macht die Dtection sichtbar
      // noStroke();
      // fill(174, 74, 245);
      // triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, 10);
      image(
        this.buttonTypeDesignAwake,
        this.buttonX1,
        this.buttonY1,
        this.buttonTypeDesignAwake.width / 2,
        this.buttonTypeDesignAwake.height / 2
      );
      return true;
    } else {
      return false;
    }
  }
  stayOnSelectedButton() {
    image(
      this.buttonTypeDesignAwake,
      this.buttonX1,
      this.buttonY1,
      this.buttonTypeDesignAwake.width / 2,
      this.buttonTypeDesignAwake.height / 2
    );
  }
}
