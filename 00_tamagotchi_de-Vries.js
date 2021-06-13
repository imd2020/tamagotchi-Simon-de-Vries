let myFont;
myFont = loadFont("Links/VCR_OSD_MONO_1.001.ttf");

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

let levelUpXP = -17;
function levelUpSystem() {
  push();
  stroke(0, 255, 255);
  noFill();
  rect(190, 95, 20, -187, 10);

  noStroke();
  fill(0, 255, 255);
  //min -17, max -187, span: 170, 42,5XP to LVLUp
  rect(190, 95, 20, levelUpXP, 10);

  textFont("VCR OSD Mono");
  text("XP", 194, -96);

  textSize(10);
  text("ROBOT ID:", 110, 170);

  switch (true) {
    case levelUpXP <= -17 && levelUpXP > -59.5:
      //LVL1
      textFont("VCR OSD Mono");
      textSize(13);
      text("LVL 1", 230, 83);

      textSize(16);
      text("WALTER", 104, 190);

      fill(0, 255, 255);
      rect(190, 78, 30, 1);
      rect(190, 78 - 42.5, 20, 1);
      rect(190, 78 - 42.5 - 42.5, 20, 1);
      rect(190, 78 - 42.5 - 42.5 - 42.5, 20, 1);

      roboLVL1compact();
      break;

    case levelUpXP <= -59.5 && levelUpXP > -102:
      //LVL2
      textFont("VCR OSD Mono");
      textSize(13);
      text("LVL 2", 230, 83 - 42.5);

      textSize(16);
      text("BROBOT", 103, 190);

      fill(0, 255, 255);
      rect(190, 78 - 42.5, 30, 1);
      rect(190, 78 - 42.5 - 42.5, 20, 1);
      rect(190, 78 - 42.5 - 42.5 - 42.5, 20, 1);

      roboLVL2compact();
      break;

    case levelUpXP <= -102 && levelUpXP > -144.5:
      //LVL3
      textFont("VCR OSD Mono");
      textSize(13);
      text("LVL 3", 230, 83 - 42.5 - 42.5);

      textSize(16);
      text("FAT2-D2", 94, 190);

      fill(0, 255, 255);
      rect(190, 78 - 42.5 - 42.5, 30, 1);
      rect(190, 78 - 42.5 - 42.5 - 42.5, 20, 1);

      roboLVL3compact();
      break;

    case levelUpXP <= -144.5 && levelUpXP > -189:
      //LVL4
      textFont("VCR OSD Mono");
      textSize(13);
      text("LVL 4", 230, 83 - 42.5 - 42.5 - 42.5);

      textSize(16);
      text("ULTRON", 104, 190);

      fill(0, 255, 255);
      rect(190, 78 - 42.5 - 42.5 - 42.5, 30, 1);

      roboLVL4compact();
      break;

    case levelUpXP <= -189:
      levelUpXP = -189;

      textSize(16);
      text("ULTRON", 104, 190);
      roboLVL4compact();
      break;
  }

  pop();
}

import Button from "./01_Button";
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
let energyButton = new Button(energyButtonValues);
let hackingButton = new Button(hackingButtonValues);
let conditionButton = new Button(conditionButtonValues);

import RoboLVL1 from "./02_RoboLVL1";
let roboLVL1alive = new RoboLVL1(0, 33);
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

import RoboLVL2 from "./03_RoboLVL2";
let roboLVL2alive = new RoboLVL2(0, 33);
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
import RoboLVL3 from "./04_RoboLVL3";
let roboLVL3alive = new RoboLVL3(0, 33);
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
import RoboLVL4 from "./05_RoboLVL4";
let roboLVL4alive = new RoboLVL4(0, 33);
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

import EnergyGame from "./EnergyGame";
let theEnergyGame = new EnergyGame(0.05, 0.7, 0.02);

import TimerMinigames from "./TimerMinigames";
let timerEnergyGame = new TimerMinigames(0, -248, 4);

import ArrowDuringMiniGame from "./ArrowDuringGame";
let arrowDuringEnergyGame = new ArrowDuringMiniGame(-50, 195);

import HackingGame from "./HackingGame";
let hackingGame = new HackingGame(0.1, 10, 0.02);
let timerHackingGame = new TimerMinigames(0, -248, 4);
let arrowDuringHackingGame = new ArrowDuringMiniGame(-50, -195);

////-------------------------------------------------------------------keyReleased

function keyReleased() {
  if (
    startTimerEnergyGame === true &&
    timerEnergyGame.startTimeCake === true &&
    timerEnergyGame.timeIsOver === false
  ) {
    theEnergyGame.fillBatteryWithKeys();
  }
  hackingGame.compareKeyInput();
}

////-------------------------------------------------------------------mouseClicked

let startTimerEnergyGame = false;

function mouseClicked() {
  if (energyButton.hoverOver()) {
    startTimerEnergyGame = true;
  }
  if (hackingButton.hoverOver()) {
    console.log("HackingButton-Click!");
  }
  if (conditionButton.hoverOver()) {
    console.log("ConditionButton-Click!");
  }
}

////-------------------------------------------------------------------draw

function draw() {
  render();

  //Buttondetections
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

  //-----------------------------------Batterygame
  theEnergyGame.energyConsume();
  theEnergyGame.batteryFluidEmphasis();
  theEnergyGame.batteryDesign();
  theEnergyGame.warnSignEnergy();
  theEnergyGame.gainEnergyXP();
  //"+1" Design. functionality is by keypressed
  for (let i = 0; i < theEnergyGame.rewardEnergySigns.length; i++) {
    theEnergyGame.rewardEnergySigns[i].rewardValues();
  }

  //timerMiniGamesStart Activated in mouseclicked when energybutton is pressed
  if (startTimerEnergyGame === true) {
    //Highlights it during the game
    energyButton.stayOnSelectedButton();
    //rotates during the game ("Button is Active")
    arrowDuringEnergyGame.arrowLoad();
    //Timer
    timerEnergyGame.timeCake();
    timerEnergyGame.countDown();
    timerEnergyGame.timesUp();

    //starts after countdown and ends before timeOut
    if (
      timerEnergyGame.startTimeCake === true &&
      timerEnergyGame.timeIsOver === false
    ) {
    }
    //End of Timer and Game
    if (timerEnergyGame.timesUpFade + timerEnergyGame.timesUpFade2 < 0) {
      theEnergyGame.rewardEnergySigns = [];
      timerEnergyGame.resetTimesUpVariables();
      startTimerEnergyGame = false;
    }
  }
  ////-------------------------------------------------------------------HackingGame
  hackingGame.hackingSystem();
  hackingGame.randomLetterMove();
  hackingGame.generateRandomLetter();
  hackingGame.displayRandomLetter();
  hackingGame.showErrorMessage();
  hackingGame.displayHackingScala();
  hackingGame.warnSignHacking();
  hackingGame.gainHackingXP();

  //"+1" Design. functionality is by keypressed
  for (let i = 0; i < hackingGame.rewardHackingSigns.length; i++) {
    hackingGame.rewardHackingSigns[i].rewardValues();
  }

  //Counts XP
  levelUpSystem();
}
