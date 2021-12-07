class Boat {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }

  move() {
    this.y += this.speed;

    //if(playtime) {
    //this.y += this.speed * 1.2 ;
    //} 시간에 따라 속도 조절하게 되면 여기 변경
  }

  collide() {  
    if(objectmove){
      let d1 = dist(this.x+80, this.y + 120, px, py-40);
      let d2 = dist(this.x+80, this.y + 120, px, py+30);
      if (d1 < 90 || d2 < 100) { //배와 선수 팔
        live = false;
      } 
    }
  }
    
  display() {
    imageMode(CORNER);
    image(boat_image, this.x, this.y, 160, 200);
  }
  
}
