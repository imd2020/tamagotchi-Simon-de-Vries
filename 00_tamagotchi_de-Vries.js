function render() {
  //Background 1100x620 Pixel (16:9)
  translate(550, 310);
  scale(1);
}

let isometricRoom = loadImage("Links/gameElements/room.png");
let statsLines = loadImage("Links/gameElements/statsLines.png");
function isometricRoomFunc() {
  imageMode(CENTER);
  image(isometricRoom, 0, 0, isometricRoom.width / 2, isometricRoom.height / 2);
  image(statsLines, 130, 180, statsLines.width / 2, statsLines.height / 2);
}

import button from "./01_buttons";
let energyButtonValues = {
  x1: -180,
  y1: 200,
  x2: -40,
  y2: 200,
  x3: -180,
  y3: 115,
  r: 1,
  g: 2,
  b: 3,
  buttonX1: -122,
  buttonY1: 160,
  buttonTypeSleeping: "energyButtonSleeping",
  buttonTypeAwake: "energyButtonAwake",
};
let hackingButtonValues = {
  x1: -180,
  y1: -115,
  x2: -40,
  y2: -200,
  x3: -180,
  y3: -200,
  r: 1,
  g: 2,
  b: 4,
  buttonX1: -122,
  buttonY1: -160,
  buttonTypeSleeping: "hackingButtonSleeping",
  buttonTypeAwake: "hackingButtonAwake",
};
let conditionButtonValues = {
  x1: 180,
  y1: -113,
  x2: 45,
  y2: -197,
  x3: 180,
  y3: -200,
  r: 1,
  g: 3,
  b: 4,
  buttonX1: 122,
  buttonY1: -160,
  buttonTypeSleeping: "conditionButtonSleeping",
  buttonTypeAwake: "conditionButtonAwake",
};
let energyButton = new button(energyButtonValues);
let hackingButton = new button(hackingButtonValues);
let conditionButton = new button(conditionButtonValues);

import roboLVL1 from "./02_roboLVL1";
let roboLVL1alive = new roboLVL1(0, 33);

function roboLVL1compact() {
  push();
  roboLVL1alive.move();
  roboLVL1alive.earL();
  roboLVL1alive.legL();
  roboLVL1alive.LVL1body();
  roboLVL1alive.face();
  roboLVL1alive.earR();
  roboLVL1alive.legR();
  roboLVL1alive.legMove();
  pop();
}

function mouseClicked() {
  if (energyButton.hoverOver()) {
    console.log("EnergyButton-Click!");
  }
  if (hackingButton.hoverOver()) {
    console.log("HackingButton-Click!");
  }
  if (conditionButton.hoverOver()) {
    console.log("ConditionButton-Click!");
  }
}

function draw() {
  render();

  energyButton.triangledetection();
  hackingButton.triangledetection();
  conditionButton.triangledetection();

  energyButton.backgroundImage();
  isometricRoomFunc();

  energyButton.buttonSleeps();
  hackingButton.buttonSleeps();
  conditionButton.buttonSleeps();

  energyButton.hoverOver();
  hackingButton.hoverOver();
  conditionButton.hoverOver();

  roboLVL1compact();

  // triangledetectionOf(energyButton);
  // backgroundImage();
  // hoverOver(energyButton);
}
