class Rock {
  constructor(_x, _y, _size, _speed) {
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.speed = _speed;
  }

  move() {
    this.y += this.speed;


    //if(playtime) {
    //this.y += this.speed * 1.2 ;
    //} 시간에 따라 속도 조절하게되면 여기 변경
  }

  collide() {
    if(objectMove){
      let d1 = dist(this.x+this.size/2, this.y+this.size*2/6, px, py-40);
      let d2 = dist(this.x+this.size/2, this.y+this.size*2/6, px, py+30);
      if (d1 < 25+this.size*7/20 || d2 < 35+this.size*7/20) {
        live = false;
      }
    }
  }

  display() {
      imageMode(CORNER);
      image(rock_image, this.x, this.y, this.size, (this.size * 2) / 3);
      // stroke(255, 0, 0);
      // noFill();
      // strokeWeight(5);
      // circle(this.x+this.size/2, this.y+this.size*2/6, this.size*7/10);
      // point(this.x+this.size/2, this.y+this.size*2/6);
      // circle(px, py-40, 50);
      // circle(px, py+30, 70);
      // point(px, py-40);
      // point(px, py+30);
      //image(rock2_image, this.x, this.y, this.size, this.size*2/3);
    
  }
}
