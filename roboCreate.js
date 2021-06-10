let myFont;
myFont = loadFont("Links/VCR_OSD_MONO_1.001.ttf");

function render() {
  //Background 1100x620 Pixel (16:9)
  clear();
  translate(550, 310);
  scale(1);
}

let warn = 0;
let warnFlash = 10;

function warnSignSpeed() {
  warn += warnFlash;

  if (warn > 255) {
    warnFlash = -30;
  }
  if (warn < 0) {
    warnFlash = 10;
  }
}
function warnSign() {
  noStroke();
  textFont("VCR OSD MONO");
  textSize(20);
  fill(200, 0, 0, warn);
  text("CRITICAL", 0, 0);
}

function draw() {
  render();

  warnSignSpeed();
  warnSign();
  console.log(warn);
}
