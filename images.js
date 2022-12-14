// Sounds
let soundTrack;
let pointSound;
let lostSoung;

//Images
let scene;
let actor;
let car_1;
let car_2;
let car_3;
let car_4;
let car_5;
let car_6;

function preload() {
  scene = loadImage("Images/estrada.png");
  actor = loadImage("Images/ator-1.png");
  car_1 = loadImage("Images/carro-1.png");
  car_2 = loadImage("Images/carro-2.png");
  car_3 = loadImage("Images/carro-3.png");
  car_4 = loadImage("Images/carro-1.png");
  car_5 = loadImage("Images/carro-2.png");
  car_6 = loadImage("Images/carro-3.png");
  soundTrack = loadSound("Soundtrack/trilha.mp3");
  pointSound = loadSound("Soundtrack/pontos.wav");
  lostSoung = loadSound("Soundtrack/colidiu.mp3");
  
  carsImages = [car_1, car_2, car_3, car_4, car_5, car_6];
}

function showActor(){
  image(actor, actorXposition, actorYposition, actorWsize, actorHsize);
 
}

function showCar(){
  
  for (let i = 0; i < carsImages.length; i++){ 
  image(carsImages [i], carsX [i], carsY [i], carsWidth, carsHeigth); 
 } 
}