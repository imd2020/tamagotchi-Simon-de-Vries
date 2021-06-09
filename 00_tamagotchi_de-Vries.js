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
  roboLVL1alive.head();
  roboLVL1alive.face();
  roboLVL1alive.earR();
  roboLVL1alive.legR();
  roboLVL1alive.legMove();
  pop();
}
import roboLVL2 from "./03_roboLVL2";
let roboLVL2alive = new roboLVL2(0, 33);
function roboLVL2compact() {
  push();
  roboLVL2alive.move();
  roboLVL2alive.earL();
  roboLVL2alive.legL();
  roboLVL2alive.armL();
  roboLVL2alive.LVL2body();
  roboLVL2alive.armR();
  roboLVL2alive.head();
  roboLVL2alive.face();
  roboLVL2alive.earR();
  roboLVL2alive.legR();
  roboLVL2alive.legMove();
  pop();
}
import roboLVL3 from "./04_roboLVL3";
let roboLVL3alive = new roboLVL3(0, 33);
function roboLVL3compact() {
  push();
  roboLVL3alive.move();
  roboLVL3alive.earL();
  roboLVL3alive.legL();
  roboLVL3alive.armL();
  roboLVL3alive.head();
  roboLVL3alive.head();
  roboLVL3alive.armR();
  roboLVL3alive.face();
  roboLVL3alive.earR();
  roboLVL3alive.legR();
  roboLVL3alive.legMove();
  roboLVL3alive.headCircle();
  roboLVL3alive.headCircleAnimation();
  pop();
}
import roboLVL4 from "./05_roboLVL4";
let roboLVL4alive = new roboLVL4(0, 33);
function roboLVL4compact() {
  push();

  roboLVL4alive.move();
  roboLVL4alive.earL();
  roboLVL4alive.legL();
  roboLVL4alive.armL();
  roboLVL4alive.head();
  roboLVL4alive.head();
  roboLVL4alive.armR();
  roboLVL4alive.face();
  roboLVL4alive.earR();
  roboLVL4alive.legR();
  roboLVL4alive.legMove();
  roboLVL4alive.headCircle();
  roboLVL4alive.headCircleAnimation();
  roboLVL4alive.LVL4scalometer();
  roboLVL4alive.LVL4scalometerAnimation();
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

  // roboLVL1compact();
  // roboLVL2compact();
  // roboLVL3compact();
  roboLVL4compact();

  // triangledetectionOf(energyButton);
  // backgroundImage();
  // hoverOver(energyButton);
}
