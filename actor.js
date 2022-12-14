
//Actor - Variable
let actorXposition = 87;
let actorYposition = 366;
let actorWsize = 30;
let actorHsize = 30;
let actorVel = 3;
let collide = false;
let myPoints = 0

function actorMotion(){
  if (keyIsDown(UP_ARROW)){
   actorYposition -= actorVel
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if (verificationActorPostition()){
     actorYposition += actorVel
      }
  }
}

function verificationActorPostition(){
  return actorYposition < 366
}

function actorCollide(){
    for (let i = 0; i < carsImages.length; i++){
      collide = collideRectCircle(carsX [i], carsY [i], carsWidth, carsHeigth, actorXposition, actorYposition, 10);

      if (collide){
        backToStart();
        lostSoung.play();

        if (myPointsGreaterThanZero()){
          myPoints -= 1;
          lostSoung.play();
      }

    }
  }
}
  
function myPointsGreaterThanZero(){
  return  myPoints > 0;
}

function backToStart(){
   actorYposition = 366;
}

function score(){
  
  fill(color(248,248,255))
  rect(70,2, 60, 30)
  textSize(24);
  textStyle(BOLD)
  textAlign(CENTER);
  fill(color(218,112,214))
  text(myPoints, width / 5, 27)
}

function scoring() {
  if (actorYposition < 20){
    myPoints += 1;
    pointSound.play();
    backToStart();
    
  }
}