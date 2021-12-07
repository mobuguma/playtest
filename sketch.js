let imgO; //문어그림
let imgB; //먹물
let imgD; //잠수하는 사람
let img = [];
let c; //바다 색깔

let start_image;
let rock_image;
let rock2_image; //돌이미지
let boat_image; //배이미지
let goggle_image; 
let star_image;
let fail_image;
let success_image;
let arrive_image;
let intro1;
let intro2;
let intro3;
let night;

let storyline = 0; //스토리 진행

//restart -> reset
let waves = [];
let octopuses = [];
let trashes1 = [];
let trashes2 = [];
let rocks = [];
let boats = [];
let goggles = [];
let current = 0;

let live = true;
let dive = false;
let dive_count;
let ink = false;
let ink_count;
let px = 600; //선수x
let py = 550; //선수y
let pw = 150; //선수너비
let ph = 150; //선수높이
let speed = 5; //선수스피드
let seaSpeed = 2; //바다스피드
let seaSpeed2 = 3;
let seaSpeed3 = 4;
let seaSpeed4 = 5;
let distance = 1085; //스코어
let positions = [60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140]; //장애물위치
let trasheffect = false; //
let objectMove = true;
let end_count= 0;

function preload() {
  //수영 이미지 로딩
  for (let i = 0; i < 6; i++) {
    img[i] = loadImage("assets/swim" + i + ".png");
  }
  start_image = loadImage("assets/start.png");
  intro1 = loadImage("assets/intro1.png");
  intro2 = loadImage("assets/intro2.png");
  intro3 = loadImage("assets/intro3.png");
  imgO = loadImage("assets/octopus.png");
  imgB = loadImage("assets/black.png");
  imgD = loadImage("assets/diver.png");
  star_image = loadImage("assets/star.png");
  goggle_image = loadImage("assets/goggle.png");
  boat_image = loadImage("assets/boat.png");
  rock_image = loadImage("assets/rock1.png");
  rock2_image = loadImage("assets/rock2.png");
  trash1_image = loadImage("assets/trash1.png");
  fail_image = loadImage("assets/fail.png");
  success_image = loadImage("assets/success.png");
  arrive_image = loadImage("assets/korea.png");
  // trash2_image = loadImage("assets/trash2.png");
}

function setup() {
  createCanvas(1200, 700);
  c = color(60, 195, 225);
  waves[0] = new Wave(noOverlap(), -50, seaSpeed);
  octopuses[0] = new Octopus(noOverlap(), -70, 80, 60, seaSpeed);
  boats[0] = new Boat(noOverlap(), -80, seaSpeed);
  rocks[0] = new Rock(noOverlap(), 0, random(50, 100), seaSpeed);
  trashes1[0] = new Trash1(noOverlap(), -100, 100, seaSpeed);
  // trashes2[0] = new Trash2(random(width), -10, 100, 1);

}

function noOverlap(){
  if (positions.length<=2) {
      positions = [60, 200, 350, 500, 640, 800, 950, 900, 1140];
  }
  let num = int(random(0, positions.length));
  let object = positions[num];
  positions.splice(num, 1);

  return object;
}

function draw() {
  switch (storyline) {
    case 0: //시작화면
      imageMode(CENTER);
      image(start_image, width/2, height/2, 1200, 700);
      break;
    case 1: //스토리1
      imageMode(CENTER);
      image(intro1, width/2, height/2, 1200, 700);
      break;
    case 2: //스토리2
      imageMode(CENTER);
      image(intro2, width/2, height/2, 1200, 700);
      break;
    case 3: //게임설명
      imageMode(CENTER);
      image(intro3, width/2, height/2, 1200, 700);
      if (keyIsDown(ENTER) && storyline == 3) {
        storyline++;
      }
      break;
    case 4: //게임화면
      //생사
      if (live) {
        //배경
        //background(120, 220, 255); //하늘
        noStroke();
        fill(c);
        rectMode(CORNER);
        rect(0, 0, width, height); //바다

        //파도
        for (let wave of waves) {
          if(objectMove) wave.move();
          wave.display();
        }

        if (frameCount % 40 == 0) {
          let b = new Wave(random(0, width - 60), -60, seaSpeed);
          waves.push(b);
        }

        for (let i = 0; i < waves.length; i++) {
          if (waves[i].y - 50 > width) {
            waves.splice(0, 1);
          }
        }

        if (!dive){
        //선수
        rectMode(CENTER);
        //stroke(0);
        fill(0);
        imageMode(CENTER);
        if (frameCount % 6 == 0 && objectMove) {
          image(img[current++ % 6], px, py, pw, ph);
        } else {
          image(img[current % 6], px, py, pw, ph);
        }
          } else {
        imageMode(CENTER);
        image(imgD, px, py, pw, ph);
      }

        //좌우키 이동
        if(!trasheffect) {
          if (keyIsDown(LEFT_ARROW)) {
            if (px > pw/2 && px <= width - pw/2) {
              px -= speed;
            } else if (px < pw/2) {
              px = pw/2;
            } else if (px > width - pw/2) {
              px = width - pw/2;
            }
          } else if (keyIsDown(RIGHT_ARROW)) {
            if (px >= pw/2 && px < width - pw/2) {
              px += speed;
            } else if (px < pw/2) {
              px = pw/2;
            } else if (px > width - pw/2) {
              px = width - pw/2;
            }
          }
        } else if(trasheffect) {
          if (keyIsDown(LEFT_ARROW)) {
            if (px >= pw/2 && px < width - pw/2) {
              px += speed;
            } else if (px < pw/2) {
              px = pw/2;
            } else if (px > width - pw/2) {
              px = width - pw/2;
            }
          } else if (keyIsDown(RIGHT_ARROW)) {
            if (px > pw/2 && px <= width - pw/2) {
              px -= speed;
            } else if (px < pw/2) {
              px = pw/2;
            } else if (px > width - pw/2) {
              px = width - pw/2;
            }
          }
        }
       
        //상하키 이동
        if (keyIsDown(UP_ARROW)) {
          if (py > ph/2 && py <= height - ph/2) {
            py -= speed;
          } else if (py < ph/2) {
            py = ph/2;
          } else if (pw > height - ph/2) {
            py = height - ph/2;
          }
        } else if (keyIsDown(DOWN_ARROW)) {
          if (py >= ph/2 && py < height - ph/2) {
            py += speed;
          } else if (py < ph/2) {
            py = ph/2;
          } else if (py > height - ph/2) {
            py = height - ph/2;
          }
        }

      //STAGE1
        if(distance<1085 && distance >=900){
         //바위
        if(objectMove){
          for (let rock of rocks) {
            rock.move();
            rock.display();
            if(!dive){
            rock.collide();
          }
          }
        }

        if (frameCount % 70 == 0) {
          let rr = new Rock(noOverlap(), -200, random(70, 150), seaSpeed);
          rocks.push(rr);
        }

        for (let i = 0; i < rocks.length; i++) {
          if (rocks[i].y - height > height) {
            rocks.splice(0, 1);
          }
        }
          
        //문어
        if(objectMove){
           for (let octopus of octopuses) {
            octopus.move();
            octopus.display();
             if(!dive){
            octopus.collide();
          }
           }
        }

        if (frameCount % 150 == 40) {
          let o = new Octopus(noOverlap(), -200, 80, 60, seaSpeed);
          octopuses.push(o);
        }

        for (let i = 0; i < octopuses.length; i++) {
          if (octopuses[i].y > height) {
            octopuses.splice(0, 1);
          }
        }
        } 
      
      //STAGE1 밤
        if(distance<900 && distance >=750){
          // rectMode(CORNER);
          // c = color(0, 29, 69);
          // fill(0, 0, 0, 150);
          // rect(0, 0, width, height);

          imageMode(CORNER);
          image(star_image, 0, 0, width, 200);
          
         //바위
        if(objectMove){
          for (let rock of rocks) {
            rock.move();
            rock.display();
            if(!dive){
            rock.collide();
          }
          }
        }

        if (frameCount % 50 == 0) {
          let rr = new Rock(noOverlap(), -200, random(70, 150), seaSpeed2);
          rocks.push(rr);
        }

        for (let i = 0; i < rocks.length; i++) {
          if (rocks[i].y - height > height) {
            rocks.splice(0, 1);
          }
        }
          
        //문어
        if(objectMove){
           for (let octopus of octopuses) {
            octopus.move();
            octopus.display();
             if(!dive){
            octopus.collide();
          }
           }
        }

        if (frameCount % 150 == 40) {
          let o = new Octopus(noOverlap(), -200, 80, 60, seaSpeed2);
          octopuses.push(o);
        }

        for (let i = 0; i < octopuses.length; i++) {
          if (octopuses[i].y > height) {
            octopuses.splice(0, 1);
          }
        }
        } 
        
        
       //STAGE2 
        if(distance < 750 && distance >=550){ 
          c = color(60, 195, 225);
          
          //바위
          if(objectMove){
          for (let rock of rocks) {
            rock.move();
            rock.display();
            if(!dive){
            rock.collide();
          }
          }
        }

        if (frameCount % 60 == 0) {
          let rr = new Rock(noOverlap(), -200, random(100, 200), seaSpeed2);
          rocks.push(rr);
        }

        for (let i = 0; i < rocks.length; i++) {
          if (rocks[i].y - height > height) {
            rocks.splice(0, 1);
          }
        }
          
        //문어
        if(objectMove){
           for (let octopus of octopuses) {
            octopus.move();
            octopus.display();
             if(!dive){
            octopus.collide();
          }
           }
        }

        if (frameCount % 150 == 40) {
          let o = new Octopus(noOverlap(), -200, 80, 60, seaSpeed2);
          octopuses.push(o);
        }

        for (let i = 0; i < octopuses.length; i++) {
          if (octopuses[i].y > height) {
            octopuses.splice(0, 1);
          }
        }
          
        //배
        if(objectMove){
          for (let boat of boats) {
            boat.move();
            boat.display();
            if(!dive){
            boat.collide();
          }  
          }
        }

        if (frameCount % 320 == 0) {
          let bb = new Boat(noOverlap(), -200, seaSpeed2);
          boats.push(bb);
        }

        for (let i = 0; i < boats.length; i++) {
          if (boats[i].y - height > height) {
            boats.splice(0, 1);
          }
        }

        //쓰레기1
        if(objectMove){
          for (let trash1 of trashes1) {
            trash1.move();
            trash1.display();
            if(!dive){
            trash1.collide();
          }
          }
        }

        if (frameCount % 150 == 0) {
          let t1 = new Trash1(noOverlap(), -200, 100, 100, seaSpeed2);
          trashes1.push(t1);
        }

        for (let i = 0; i < trashes1.length; i++) {
          if (trashes1[i].y > height) {
            trashes1.splice(0, 1);
          }
        }
        
        //고글 아이템
          if(objectMove){
        for (let goggle of goggles) {
          goggle.move();
          goggle.display();
          //if(!dive){
          goggle.collide();
          //}
         }
          }
        if (frameCount % 400 == 100) {
          let g = new Goggle(noOverlap(), -80, seaSpeed2);
          goggles.push(g);
        }

        for (let i = 0; i < goggles.length; i++) {
          if (goggles[i].y > height) {
            goggles.splice(0, 1);
          }
        }
        }
      
      //STAGE2 밤
          if(distance < 550 && distance >=400){ 
            // rectMode(CORNER);
            // c = color(0, 29, 69);
            // fill(0, 0, 0, 150);
            // rect(0, 0, width, height);
            imageMode(CORNER);
            image(star_image, 0, 0, width, 200);
            
          //바위
          if(objectMove){
          for (let rock of rocks) {
            rock.move();
            rock.display();
            if(!dive){
            rock.collide();
          }
          }
        }

        if (frameCount % 60 == 0) {
          let rr = new Rock(noOverlap(), -200, random(100, 200), seaSpeed3);
          rocks.push(rr);
        }

        for (let i = 0; i < rocks.length; i++) {
          if (rocks[i].y - height > height) {
            rocks.splice(0, 1);
          }
        }
          
        //문어
        if(objectMove){
           for (let octopus of octopuses) {
            octopus.move();
            octopus.display();
             if(!dive){
            octopus.collide();
          }
           }
        }

        if (frameCount % 150 == 40) {
          let o = new Octopus(noOverlap(), -200, 80, 60, seaSpeed3);
          octopuses.push(o);
        }

        for (let i = 0; i < octopuses.length; i++) {
          if (octopuses[i].y > height) {
            octopuses.splice(0, 1);
          }
        }
          
        //배
        if(objectMove){
          for (let boat of boats) {
            boat.move();
            boat.display();
            if(!dive){
            boat.collide();
          }  
          }
        }

        if (frameCount % 400 == 0) {
          let bb = new Boat(noOverlap(), -200, seaSpeed3);
          boats.push(bb);
        }

        for (let i = 0; i < boats.length; i++) {
          if (boats[i].y - height > height) {
            boats.splice(0, 1);
          }
        }

        //쓰레기1
        if(objectMove){
          for (let trash1 of trashes1) {
            trash1.move();
            trash1.display();
            if(!dive){
            trash1.collide();
          }
          }
        }

        if (frameCount % 150 == 0) {
          let t1 = new Trash1(noOverlap(), -200, 100, 100, seaSpeed3);
          trashes1.push(t1);
        }

        for (let i = 0; i < trashes1.length; i++) {
          if (trashes1[i].y > height) {
            trashes1.splice(0, 1);
          }
        }
        
        //고글 아이템
            if(objectMove){
        for (let goggle of goggles) {
          goggle.move();
          goggle.display();
          //if(!dive){
          goggle.collide();
          //}
         }
            }
        if (frameCount % 400 == 100) {
          let g = new Goggle(noOverlap(), -80, seaSpeed3);
          goggles.push(g);
        }

        for (let i = 0; i < goggles.length; i++) {
          if (goggles[i].y > height) {
            goggles.splice(0, 1);
          }
        }
        }
          
  
      //STAGE3
        if(distance > 0 && distance < 400){    
          c = color(60, 195, 225);
        //문어
        if(objectMove){
           for (let octopus of octopuses) {
            octopus.move();
            octopus.display();
             if(!dive){
            octopus.collide();
          }
           }
        }

        if (frameCount % 150 == 40) {
          let o = new Octopus(noOverlap(), -200, 80, 60, seaSpeed4);
          octopuses.push(o);
        }

        for (let i = 0; i < octopuses.length; i++) {
          if (octopuses[i].y > height) {
            octopuses.splice(0, 1);
          }
        }
          
        //배
        if(objectMove){
          for (let boat of boats) {
            boat.move();
            boat.display();
            if(!dive){
            boat.collide();
          }  
          }
        }

        if (frameCount % 300 == 0) {
          let bb = new Boat(noOverlap(), -200, seaSpeed4);
          boats.push(bb);
        }

        for (let i = 0; i < boats.length; i++) {
          if (boats[i].y - height > height) {
            boats.splice(0, 1);
          }
        }

        //고글 아이템
          if(objectMove){
        for (let goggle of goggles) {
          goggle.move();
          goggle.display();
          //if(!dive){
          goggle.collide();
          //}
         }
          }

        if (frameCount % 400 == 100) {
          let g = new Goggle(noOverlap(), -80, seaSpeed4);
          goggles.push(g);
        }

        for (let i = 0; i < goggles.length; i++) {
          if (goggles[i].y > height) {
            goggles.splice(0, 1);
          }
        }
          
//         //쓰레기2인데 일단 쓰레기1로 넣어놓음!
//         for (let trash2 of trashes2) {
//           trash2.move();
//           trash2.display();
        if(!dive){}
//           trash2.collide();
//         }
      

//         if (frameCount % 500 == 0) {
//           let t2 = new Trash2(random(width), -200, 200, 150, 1);
//           trashes2.push(t2);
//         }

//         for (let i = 0; i < trashes2.length; i++) {
//           if (trashes2[i].y > height) {
//             trashes2.splice(0, 1);
//           }
//         }
          if(objectMove){
          for (let trash1 of trashes1) {
            trash1.move();
            trash1.display();
            if(!dive){
            trash1.collide();
          }
          }
        }

        if (frameCount % 150 == 0) {
          let t1 = new Trash1(noOverlap(), -200, 100, 100, seaSpeed4);
          trashes1.push(t1);
        }

        for (let i = 0; i < trashes1.length; i++) {
          if (trashes1[i].y > height) {
            trashes1.splice(0, 1);
          }
        }
          
          //큰 바위인데 일단 작은 바위로 코드 넣어놓음!
          if(objectMove){
          for (let rock of rocks) {
            rock.move();
            rock.display();
            if(!dive){
            rock.collide();
          }
          }
        }

        if (frameCount % 80 == 0) {
          let rr = new Rock(noOverlap(), -200, random(120, 250), seaSpeed4);
          rocks.push(rr);
        }

        for (let i = 0; i < rocks.length; i++) {
          if (rocks[i].y - height > height) {
            rocks.splice(0, 1);
          }
        }
        }
        
      
        //상태창
        rectMode(CORNER);
        fill(255);
        rect(30, 30, 170, 50);
        fill(0);
        textSize(15);
        textAlign(LEFT);
        text("남은 거리: " + distance+"km", 50, 60);
        if (live && frameCount % 10 == 0) {
          if(distance != 0){
          distance--;
          }
        }
        
        // //밤낮
        // if(distance<900 && distance>750) {
        //   rectMode(CORNER);
        //   c = color(0, 29, 69);
        //   fill(0, 0, 0, 150);
        //   rect(0, 0, width, height);
        //   imageMode(CORNER);
        //   image(star_image, 0, 0, width, 200);
        // } else if(distance<550 && distance>400){
        //   rectMode(CORNER);
        //   c = color(0, 29, 69);
        //   fill(0, 0, 0, 100);
        //   rect(0, 0, width, height);
        //   imageMode(CORNER);
        //   image(star_image, 0, 0, width, 200);
        // } else{
        //   c = color(60, 195, 225);
        // }        
        
        if(distance<900 && distance >=750 ||
          distance < 550 && distance >=400){
          rectMode(CORNER);
          c = color(0, 29, 69);
          fill(0, 0, 0, 150);
          rect(0, 0, width, height);
        }
        
      } else {
        //실패
        imageMode(CORNER);
        image(fail_image, 0, 0, width, height);
        // background(255);
        // fill(255);
        // rect(0, 0, width, height);
        // fill(0);
        // noStroke();
        // rectMode(CENTER);
        // textAlign(CENTER);
        // text("실패...", 600, 200);
        // text("남은 거리: " + distance, 600, 300);
        // text("Press enter to restart", 600, 500);
        
        if (keyIsDown(ENTER) && storyline == 4) {
          storyline = 4;
          waves = [];
          octopuses = [];
          trashes1 = [];
          trashes2 = [];
          rocks = [];
          boats = [];
          goggles = [];
          current = 0;
          live = true;
          dive = false;
          dive_count = 0;
          ink = false;
          ink_count = 0;
          px = 600; //선수x
          py = 550; //선수y
          pw = 150; //선수너비
          ph = 150; //선수높이
          speed = 5; //선수스피드
          seaSpeed = 2; //바다스피드
          seaSpeed2 = 3 //바다스피드2
          distance = 1085; //스코어
          positions = [60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140]; //장애물위치
          trasheffect = false; //
          objectMove = true;
          end_count= 0;
        }
      }

      if (storyline == 4) {
        //실패조건
        if (keyIsDown(CONTROL)) live = false;

        //성공조건(도착)
        if (keyIsDown(SHIFT)) distance = 0;
        if (distance == 0) {
          end_count ++;
          if(end_count >= 120 && !objectMove){
            storyline = 5;
          }
          for(let i=0; i<120;i++){
            noStroke();
            fill(0, 255, 0);
            imageMode(CORNER);
            image(arrive_image, 0, 0, 1200, 80);
          }
          objectMove = false;
          if(py <= ph) py = ph;
          else py -= 10;
        }
       // if(mouseIsPressed && !objectMove) storyline = 5;
        //if (distance == 0) storyline++;
      }

      break;
    
      case 5: //엔딩
      imageMode(CORNER);
      image(success_image, 0, 0, width, height);
      // background(0);
      // textAlign(CENTER);
      // fill(255);
      // text("동해를 헤엄쳐 무사히 한국에 도착한 *** 선수!", 600, 400);
      // text(
      //   "동해를 헤엄치며 늘어난 수영 실력으로 수영 국가대표로 전향하게 되고,",
      //   600,
      //   420
      // );
      // text("금메달을 휩쓸며 제 2의 인생을 살게 되었답니다!", 600, 440);

      //restart
      //text("Press enter to restart", 600, 500);
      if (keyIsDown(ENTER) && storyline == 5) {
        storyline = 4;
        waves = [];
        octopuses = [];
        trashes1 = [];
        trashes2 = [];
        rocks = [];
        boats = [];
        goggles = [];
        current = 0;
        live = true;
        dive = false;
        dive_count = 0;
        ink = false;
        ink_count = 0;
        px = 600; //선수x
        py = 550; //선수y
        pw = 150; //선수너비
        ph = 150; //선수높이
        speed = 5; //선수스피드
        seaSpeed = 2; //바다스피드
        seaSpeed2 = 3 //바다스피드2
        distance = 1085; //스코어
        live = true;
        positions = [60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140]; //장애물위치
        trasheffect = false; //
        objectMove = true;
        end_count= 0;
      }
      
      break;
  }
      }
  

  function mouseClicked() {
  switch (storyline) {
    case 0:
      storyline++;
      break;
    case 1:
      storyline++;
      break;
    case 2:
      storyline++;
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
  }
}
  
