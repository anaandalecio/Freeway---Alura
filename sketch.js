
//let car_2;

function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(scene);
  showActor();
  showCar();
  carsMotion();
  actorMotion();
  carsReturn();
  carReachTheEnd();
  actorCollide();
  score();
  scoring();
  
  
}








