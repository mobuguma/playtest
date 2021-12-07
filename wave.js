class Wave {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }

  move() {
    if(objectMove) this.y += this.speed;
    
    //if(wind) {
      //this.x += windspeed;
    //}
  }
  
  display() {
    //if(frameCount%60>29) {
      noStroke();
      fill(255,180);
      
      beginShape();
      curveVertex(7+this.x, 40+this.y);
      curveVertex(7+this.x, 40+this.y);
      curveVertex(12+this.x, 30+this.y);
      curveVertex(19+this.x, 26+this.y);
      curveVertex(30+this.x, 30+this.y);
      curveVertex(30+this.x, 30+this.y);
      curveVertex(30+this.x, 30+this.y);
      curveVertex(40+this.x, 26+this.y);
      curveVertex(50+this.x, 30+this.y);
      curveVertex(50+this.x, 30+this.y);
      curveVertex(50+this.x, 30+this.y);
      curveVertex(61+this.x, 26+this.y);
      curveVertex(67+this.x, 30+this.y);
      curveVertex(72+this.x, 40+this.y);
      curveVertex(72+this.x, 40+this.y);
      curveVertex(72+this.x, 40+this.y);
      curveVertex(59+this.x, 33+this.y);
      curveVertex(50+this.x, 38+this.y);
      curveVertex(40+this.x, 33+this.y);
      curveVertex(30+this.x, 38+this.y);
      curveVertex(21+this.x, 33+this.y);
      curveVertex(7+this.x, 40+this.y);
      curveVertex(7+this.x, 40+this.y);
      endShape();
//     } else {
//       noStroke();
//       fill(255);
      
//       beginShape();
//       curveVertex(79-7+this.x, 66-40+this.y);
//       curveVertex(79-7+this.x, 66-40+this.y);
//       curveVertex(79-12+this.x, 66-30+this.y);
//       curveVertex(79-19+this.x, 66-26+this.y);
//       curveVertex(79-30+this.x, 66-30+this.y);
//       curveVertex(79-30+this.x, 66-30+this.y);
//       curveVertex(79-30+this.x, 66-30+this.y);
//       curveVertex(79-40+this.x, 66-26+this.y);
//       curveVertex(79-50+this.x, 66-30+this.y);
//       curveVertex(79-50+this.x, 66-30+this.y);
//       curveVertex(79-50+this.x, 66-30+this.y);
//       curveVertex(79-61+this.x, 66-26+this.y);
//       curveVertex(79-67+this.x, 66-30+this.y);
//       curveVertex(79-72+this.x, 66-40+this.y);
//       curveVertex(79-72+this.x, 66-40+this.y);
//       curveVertex(79-72+this.x, 66-40+this.y);
//       curveVertex(79-59+this.x, 66-33+this.y);
//       curveVertex(79-50+this.x, 66-38+this.y);
//       curveVertex(79-40+this.x, 66-33+this.y);
//       curveVertex(79-30+this.x, 66-38+this.y);
//       curveVertex(79-21+this.x, 66-33+this.y);
//       curveVertex(79-7+this.x, 66-40+this.y);
//       curveVertex(79-7+this.x, 66-40+this.y);
//       endShape();
//     }
    }
  //}
}