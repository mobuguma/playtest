class Trash1 {
  
 constructor(x, y, w, h, s){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = s;
  }
  
  display() {
    if(objectMove) {
      imageMode(CORNER);
      image(trash1_image, this.x, this.y, this.w, this.h);
    }
    
  }

  move() {
    this.y += this.speed;
    }
  
  collide(){
    if(objectMove){
      let d1 =dist(this.x+this.w/2-5, this.y+this.w/2+12, px, py-40);
      let d2 =dist(this.x+this.w/2-5, this.y+this.w/2+12, px, py+30);
      if(d1 < 25+this.w*7/20 || d2 < 35+this.w*7/20){ //선수 팔
        trasheffect = !trasheffect;
        this.x += width;
      }
    }
  }
}