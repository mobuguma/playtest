class Trash2 {
  
 constructor(x, y, w, h, s){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = s;
  }
  
  display() {
    image(trash2_image, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y = this.y + this.speed;
    }
  
  collide(){
    // if (this.x+this.w>=px-pw/2 && this.x+this.w<=px+pw/2 && this.y+this.h>=py-ph/2 && this.y+this.h<=py+ph/2){          
    //     if (keyIsDown(LEFT_ARROW)) {
    //       if (px > pw && px <= width - pw) {
    //         px += speed;
    //       } else if (px < pw) {
    //         px = pw;
    //       } else if (px > width - pw) {
    //         px = width - pw;
    //       }
    //     } else if (keyIsDown(RIGHT_ARROW)) {
    //       if (px >= pw && px < width - pw) {
    //         px -= speed;
    //       } else if (px < pw) {
    //         px = pw;
    //       } else if (px > width - pw) {
    //         px = width - pw;
    //       }
    //     }
    //     } else if (this.x>=px-pw/2 && this.x<=px+pw/2 && this.y>=py-ph/2 && this.y<=py+ph/2){
    //     if (keyIsDown(LEFT_ARROW)) {
    //       if (px > pw && px <= width - pw) {
    //         px += speed;
    //       } else if (px < pw) {
    //         px = pw;
    //       } else if (px > width - pw) {
    //         px = width - pw;
    //       }
    //     } else if (keyIsDown(RIGHT_ARROW)) {
    //       if (px >= pw && px < width - pw) {
    //         px -= speed;
    //       } else if (px < pw) {
    //         px = pw;
    //       } else if (px > width - pw) {
    //         px = width - pw;
    //       }
    //     }
    // }
    
    let d =dist(this.x/2, 0, 150, 80);
    if(d < 75+pw/2){
        if (keyIsDown(LEFT_ARROW)) {
          if (px > pw && px <= width - pw) {
            px += speed;
          } else if (px < pw) {
            px = pw;
          } else if (px > width - pw) {
            px = width - pw;
          }
        } else if (keyIsDown(RIGHT_ARROW)) {
          if (px >= pw && px < width - pw) {
            px -= speed;
          } else if (px < pw) {
            px = pw;
          } else if (px > width - pw) {
            px = width - pw;
          }
        }
  }
}
}