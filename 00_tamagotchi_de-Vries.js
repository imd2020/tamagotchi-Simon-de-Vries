function render() {
  translate(550, 310);
  //Background 1100x620 Pixel (16:9)
  // noStroke();
  // fill(21, 17, 77);
  // rectMode(CENTER);
  // rect(0, 0, 1100, 620);
  scale(1);
}

//weil der Background liegt zwischen der DetectionSpeicherung und der Detection liegt
function triangledetectionOf(values) {
  //Color-Detection-3-Eck
  noStroke();
  fill(values.r, values.g, values.b);
  triangle(values.x1, values.y1, values.x2, values.y2, values.x3, values.y3);

  //Farben speichern, bevor das Color-Detection-3-Eck überzeichnet wird
  //Get speichert die Farbe der Mauszeigerposition in ein Array (rgb + alpha)
  mouseTriangledetectionEnergyButton = get(mouseX, mouseY);
}

let back = loadImage("Links/gameElements/background.png");
function backgroundImage() {
  imageMode(CENTER);
  image(back, 0, 0, back.width / 4, back.height / 4);
}

function hoverOver(values) {
  if (
    mouseTriangledetectionEnergyButton[0] === values.r &&
    mouseTriangledetectionEnergyButton[1] === values.g &&
    mouseTriangledetectionEnergyButton[2] === values.b &&
    mouseTriangledetectionEnergyButton[3] === 255
  ) {
    noStroke();
    fill(174, 74, 245);
    triangle(values.x1, values.y1, values.x2, values.y2, values.x3, values.y3);
  } else {
    return;
  }
}

// das alles da oben in ne Klasse packen? und dann return true/false bei hittest siehe Avataremotions

let energyButton = {
  x1: -450,
  y1: -110,
  x2: -350,
  y2: -110,
  x3: -350,
  y3: -210,
  r: 1,
  g: 2,
  b: 3,
};

function draw() {
  render();
  triangledetectionOf(energyButton);
  backgroundImage();
  hoverOver(energyButton);
}
