export default class ArrowDuringMiniGame {
  constructor(x, y) {
    this.arrowDuringMiniGame = loadImage(
      "./Links/gameElements/ButtonKlickedArrow.png"
    );
    this.rotateArrowDuringMiniGame = 0;
    this.x = x;
    this.y = y;
  }

  arrowLoad() {
    push();
    translate(this.x, this.y);
    angleMode(DEGREES);
    this.rotateArrowDuringMiniGame -= 5;
    rotate(this.rotateArrowDuringMiniGame);
    imageMode(CENTER);
    image(
      this.arrowDuringMiniGame,
      0,
      -1,
      this.arrowDuringMiniGame.width / 2.5,
      this.arrowDuringMiniGame.height / 2.5
    );
    pop();
  }
}
