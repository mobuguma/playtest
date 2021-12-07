class Octopus {
  
  constructor(x, y, w, h, s){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = s;
  }
  
  display() {
      imageMode(CORNER);
      image(imgO, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y = this.y + this.speed;
    }
  
  collide(){
   if(objectMove){
    let d1 =dist(this.x+this.w/2, this.y+this.w/3, px, py-40);
    let d2 =dist(this.x+this.w/2, this.y+this.w/3, px, py+30);
    if(d1 < 25+this.w*2/6 || d2 < 35+this.w*2/6){
      ink = true;
      ink_count = 0;
      this.x+= width;   
    } 
   }
     
    if(ink){
      ink_count++;
      imageMode(CENTER);
      image(imgB, width/2, height/2,1200,700);
       
      if(ink_count >= 240){ //원하는 지속 시간(초*60)
         ink = false;
       }
     }
  }
}