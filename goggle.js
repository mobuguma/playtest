class Goggle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.s = speed;
  }

  move() {
    this.y += this.s;
  }

   collide() {
     if(objectMove){
      let d1 = dist(this.x, this.y, px, py-40);
      let d2 = dist(this.x, this.y, px, py+30);
      if (d1 < 80 || d2< 90){
        dive=true;
        dive_count = 0;
        this.x += width;
      }
     }
     
     if(dive){
       dive_count++;
       if(dive_count >= 120){ //원하는 지속 시간(초*60)
         dive = false;
       }
     }    
   }

  display() {
    imageMode(CENTER);
    image(goggle_image, this.x, this.y, 80, 70);
  }
}