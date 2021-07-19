import Button from "./01_Button.js";
import RoboLVL1 from "./02_RoboLVL1.js";
import RoboLVL2 from "./03_RoboLVL2.js";
import RoboLVL3 from "./04_RoboLVL3.js";
import RoboLVL4 from "./05_RoboLVL4.js";
import EnergyGame from "./EnergyGame.js";
import TimerMinigames from "./TimerMinigames.js";
import ArrowDuringMiniGame from "./ArrowDuringGame.js";
import HackingGame from "./HackingGame.js";
import ConditionGame from "./ConditionGame.js";
import Menu from "./Menu.js";
import CountDownToMainGame from "./CountdownToMainGame.js";
import WinScreen from "./WinScreen.js";
import LoseScreen from "./LoseScreen.js";

let myFont = loadFont("./Links/VCR_OSD_MONO_1.001.ttf");

function render() {
  //Origin: Background 1100x620 Pixel (16:9)
  //550, 310
  translate(320, 350);
  scale(1.2);
}
let menu = new Menu();

let isometricRoom = loadImage("./Links/gameElements/room.png");
let statsLines = loadImage("./Links/gameElements/statsLines.png");
function isometricRoomFunc() {
  imageMode(CENTER);
  image(isometricRoom, 0, 0, isometricRoom.width / 2, isometricRoom.height / 2);
  image(statsLines, 130, 180, statsLines.width / 2, statsLines.height / 2);
}

let levelUpXP = -17;
let lvlUpGIF = loadImage("./Links/gameElements/test.gif");
let GIFcounter = 0;
let GIFcounterTwo = 0;
let tintFader = 255;
function levelUpSystem() {
  levelUpXP -=
    conditionGame.conditionGameXP +
    theEnergyGame.energyGameXP +
    hackingGame.hackingGameXP;

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
      GIFcounter += 1;
      if (GIFcounter < 80) {
        push();
        tint(255, tintFader);
        lvlUpGIF.delay(20);
        image(lvlUpGIF, 0, 25, lvlUpGIF.width / 1.5, lvlUpGIF.height / 1.5);
        pop();
      }
      if (GIFcounter > 100) {
        lvlUpGIF.reset();
        tintFader = 255;
      }
      if (GIFcounter > 40) {
        tintFader -= 20;
        roboLVL2compact();
      }
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

      break;

    case levelUpXP <= -102 && levelUpXP > -144.5:
      GIFcounter = 0;
      GIFcounterTwo += 1;
      if (GIFcounterTwo < 80) {
        push();
        tint(255, tintFader);
        image(lvlUpGIF, 0, 25, lvlUpGIF.width / 1.5, lvlUpGIF.height / 1.5);
        pop();
      }
      if (GIFcounterTwo > 100) {
        lvlUpGIF.reset();
        tintFader = 255;
      }

      if (GIFcounterTwo > 40) {
        tintFader -= 20;
        roboLVL3compact();
      }
      //LVL3
      textFont("VCR OSD Mono");
      textSize(13);
      text("LVL 3", 230, 83 - 42.5 - 42.5);

      textSize(16);
      text("FAT2-D2", 94, 190);

      fill(0, 255, 255);
      rect(190, 78 - 42.5 - 42.5, 30, 1);
      rect(190, 78 - 42.5 - 42.5 - 42.5, 20, 1);

      break;

    case levelUpXP <= -144.5 && levelUpXP > -189:
      GIFcounterTwo = 0;
      GIFcounter += 1;
      if (GIFcounter < 80) {
        push();
        tint(255, tintFader);
        image(lvlUpGIF, 0, 25, lvlUpGIF.width / 1.5, lvlUpGIF.height / 1.5);
        pop();
      }
      if (GIFcounter > 100) {
        lvlUpGIF.reset();
        tintFader = 255;
      }
      if (GIFcounter > 40) {
        tintFader -= 20;
        roboLVL4compact();
      }
      //LVL4
      textFont("VCR OSD Mono");
      textSize(13);
      text("LVL 4", 230, 83 - 42.5 - 42.5 - 42.5);

      textSize(16);
      text("ULTRON", 104, 190);

      fill(0, 255, 255);
      rect(190, 78 - 42.5 - 42.5 - 42.5, 30, 1);

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
function completeBackButtonDesign() {
  push();
  if (mouseX > 14 && mouseX < 50 && mouseY > 20 && mouseY < 60) {
    //corner
    rectMode(CENTER);
    fill(223, 119, 193);
    rect(-240, -261, 30, 30, 20);

    //text
    textAlign(CENTER);
    fill(43, 22, 98);
    noStroke();
    textSize(10);
    textFont("VCR OSD MONO");
    text("<-", -240, -257);
  } else {
    //corner
    rectMode(CENTER);
    noFill();
    stroke(223, 119, 193);
    rect(-240, -261, 30, 30, 20);

    //text
    textAlign(CENTER);
    fill(223, 119, 193);
    noStroke();
    textSize(10);
    textFont("VCR OSD MONO");
    text("<-", -240, -257);
  }
  pop();
}
function completeBackButtonClick() {
  if (mouseX > 14 && mouseX < 50 && mouseY > 20 && mouseY < 60) {
    return true;
  }
}

function resetNotReallyGlobalVariables() {
  levelUpXP = -17;
  GIFcounter = 0;
  GIFcounterTwo = 0;
  tintFader = 255;
}

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

let theEnergyGame = new EnergyGame(0.03, 0.7, 0.008);
let timerEnergyGame = new TimerMinigames(0, -248, 3);
let arrowDuringEnergyGame = new ArrowDuringMiniGame(-50, 195);

let hackingGame = new HackingGame(0.08, 13, 0.018);
let timerHackingGame = new TimerMinigames(0, -248, 1.5);
let arrowDuringHackingGame = new ArrowDuringMiniGame(-50, -195);

let conditionGame = new ConditionGame(0.05, 7, 0.014);
let timerConditionGame = new TimerMinigames(0, -248, 1);
let arrowDuringConditionGame = new ArrowDuringMiniGame(50, -195);

let countDownToMainGame = new CountDownToMainGame(0, 0);

let winScreen = new WinScreen();
let loseScreen = new LoseScreen();
////-------------------------------------------------------------------keyReleased

window.keyPressed = keyPressed;
function keyPressed() {
  if (
    startTimerConditionGame === true &&
    timerConditionGame.startTimeCake === true &&
    timerConditionGame.timeIsOver === false
  ) {
    conditionGame.stopStopArrowWithKeys();
  }
}

window.keyReleased = keyReleased;
function keyReleased() {
  if (
    startTimerEnergyGame === true &&
    timerEnergyGame.startTimeCake === true &&
    timerEnergyGame.timeIsOver === false
  ) {
    theEnergyGame.fillBatteryWithKeys();
  }
  if (
    startTimerHackingGame === true &&
    timerHackingGame.startTimeCake === true &&
    timerHackingGame.timeIsOver === false
  ) {
    hackingGame.compareKeyInput();
  }
}

////-------------------------------------------------------------------mouseClicked

let startTimerEnergyGame = false;
let startTimerHackingGame = false;
let startTimerConditionGame = false;
let screen = "welcomeScreen";
window.mouseClicked = mouseClicked;
function mouseClicked() {
  if (screen === "welcomeScreen") {
    if (menu.playButtonClick()) {
      screen = "countDownScreen";
    }
    if (menu.instructionButtonClick()) {
      screen = "instructionScreen";
    }
  }
  if (screen === "instructionScreen") {
    if (menu.backToMenuButtonClick()) {
      screen = "welcomeScreen";
    }
  }
  if (screen === "gameScreen") {
    if (completeBackButtonClick()) {
      screen = "welcomeScreen";
    }
  }
  if (energyButton.hoverOver()) {
    startTimerEnergyGame = true;
  }
  if (hackingButton.hoverOver()) {
    startTimerHackingGame = true;
  }
  if (conditionButton.hoverOver()) {
    startTimerConditionGame = true;
  }
  if (screen === "winScreen") {
    if (winScreen.backFromEndScreenButtonClick()) {
      screen = "welcomeScreen";
    }
  }
  if (screen === "loseScreen") {
    if (loseScreen.backFromEndScreenButtonClick()) {
      screen = "welcomeScreen";
    }
  }
}

////-------------------------------------------------------------------draw
menu.animateButtonCorner();

window.draw = draw;
function draw() {
  render();

  if (screen === "welcomeScreen") {
    menu.startScreen();
    menu.playButtonDesign();
    menu.instructionButtonDesign();

    //-------------resets everything

    countDownToMainGame.resetTimesUpVariables();
    conditionGame.reset();
    theEnergyGame.reset();
    hackingGame.reset();
    timerEnergyGame.reset();
    timerConditionGame.reset();
    timerHackingGame.reset();

    resetNotReallyGlobalVariables();

    //The timer doesnt run anymore when you go back to the game
    startTimerEnergyGame = false;
    startTimerHackingGame = false;
    startTimerConditionGame = false;
  }

  if (screen === "instructionScreen") {
    menu.showInstruction();
    menu.backToMenuButtonDesign();
  }

  if (screen === "countDownScreen") {
    countDownToMainGame.countDown();
    if (countDownToMainGame.go2 < -600) {
      screen = "gameScreen";
    }
  }

  if (screen === "gameScreen") {
    //Buttondetections
    energyButton.triangledetection();
    hackingButton.triangledetection();
    conditionButton.triangledetection();

    // energyButton.backgroundImage();
    clear();
    isometricRoomFunc();
    //Go Back to menu
    completeBackButtonDesign();

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

      //End of Timer and Game
      if (timerEnergyGame.timesUpFade + timerEnergyGame.timesUpFade2 < 0) {
        theEnergyGame.rewardEnergySigns = [];
        timerEnergyGame.resetTimesUpVariables();
        startTimerEnergyGame = false;
      }
    }
    ////-------------------------------------------------------------------HackingGame
    hackingGame.hackingSystem();
    hackingGame.displayHackingScala();
    hackingGame.warnSignHacking();
    hackingGame.gainHackingXP();

    //timerMiniGamesStart Activated in mouseclicked when Hackerbutton is pressed
    if (startTimerHackingGame === true) {
      //Highlights it during the game
      hackingButton.stayOnSelectedButton();
      //rotates during the game ("Button is Active")
      arrowDuringHackingGame.arrowLoad();
      //Timer
      timerHackingGame.timeCake();
      timerHackingGame.countDown();
      timerHackingGame.timesUp();

      //starts after countdown and ends before timeOut
      if (
        timerHackingGame.startTimeCake === true &&
        timerHackingGame.timeIsOver === false
      ) {
        hackingGame.randomLetterMove();
        hackingGame.generateRandomLetter();
        hackingGame.displayRandomLetter();
        hackingGame.showErrorMessage();
        //"+1" Design. functionality is by keypressed
        for (let i = 0; i < hackingGame.rewardHackingSigns.length; i++) {
          hackingGame.rewardHackingSigns[i].rewardValues();
        }
      }
      //End of Timer and Game
      if (timerHackingGame.timesUpFade + timerHackingGame.timesUpFade2 < 0) {
        hackingGame.rewardHackingSigns = [];
        timerHackingGame.resetTimesUpVariables();
        startTimerHackingGame = false;
      }
    }
    ////-------------------------------------------------------------------ConditionGame

    conditionGame.conditionSystem();
    conditionGame.displayConditionScala();
    conditionGame.displayConditionMeterInRoom();
    conditionGame.warnSignCondition();
    conditionGame.gainConditionXP();

    if (startTimerConditionGame === true) {
      //Highlights it during the game
      conditionButton.stayOnSelectedButton();
      //rotates during the game ("Button is Active")
      arrowDuringConditionGame.arrowLoad();
      //Timer
      timerConditionGame.timeCake();
      timerConditionGame.countDown();
      timerConditionGame.timesUp();

      //starts after countdown and ends before timeOut
      if (
        timerConditionGame.startTimeCake === true &&
        timerConditionGame.timeIsOver === false
      ) {
        conditionGame.displayRandomConditionArrow();
        conditionGame.displayStopArrow();
        conditionGame.stopArrowMovement();
        conditionGame.compareArrows();
        conditionGame.wrongOrCorrectArrow();
        //"+1" Design. functionality is by keypressed
        for (let i = 0; i < conditionGame.rewardConditionSigns.length; i++) {
          conditionGame.rewardConditionSigns[i].rewardValues();
        }
      }
      //End of Timer and Game
      if (
        timerConditionGame.timesUpFade + timerConditionGame.timesUpFade2 <
        0
      ) {
        timerConditionGame.rewardConditionSigns = [];
        timerConditionGame.resetTimesUpVariables();
        startTimerConditionGame = false;
      }
    }

    //Counts XP
    levelUpSystem();

    console.log(theEnergyGame.energyRequirement);
    //WIN
    if (levelUpXP <= -186) {
      winScreen.justFadeInBackground();
      if (winScreen.fadeInBackground >= 255) {
        screen = "winScreen";
      }
    }

    //LOSE
    //a ? (b || c) : (b && c);
    //if a is true, it must be b or c
    //if a is false, it must be b and c
    if (
      theEnergyGame.energyRequirement >= 106
        ? hackingGame.hackingRequirement >= 150 ||
          conditionGame.conditionRequirement >= 150
        : hackingGame.hackingRequirement >= 150 &&
          conditionGame.conditionRequirement >= 150
    ) {
      loseScreen.justFadeInBackground();
      if (loseScreen.fadeInBackground >= 255) {
        screen = "loseScreen";
      }
    }
  }

  if (screen === "winScreen") {
    winScreen.showScreen();
    winScreen.backFromEndScreenButtonDesign();
  }
  //lose
  if (screen === "loseScreen") {
    loseScreen.showScreen();
    loseScreen.backFromEndScreenButtonDesign();
  }
}
