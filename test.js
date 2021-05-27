function render() {
  translate(550, 310);

  //Background 1100x620 Pixel (16:9)
  fill(21, 17, 77);
  rectMode(CENTER);
  rect(0, 0, 1100, 620);

  scale(1);
}

let roomWalls = loadImage("Links/Element 7.png");
let rooms = [];

function room(x, y) {
  imageMode(CENTER);
  image(roomWalls, x, y, roomWalls.width / 2, roomWalls.height / 2);
}

function draw() {
  render();
  room(0, 0);
}
