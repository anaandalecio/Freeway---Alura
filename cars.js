
//List of variables
let carsX = [600, 600, 600, 600, 600, 600];
let carsY = [40, 95, 150, 210, 320, 260];
let carsWidth = 50;
let carsHeigth = 40;
let carsVel = [2, 2.4, 3.4, 3, 2.1, 2.8]


function carsMotion(){
  
  for ( let i = 0; i < carsX.length; i++){
  carsX[i] -= carsVel[i];
  }
  
}

function carsReturn(){
  
    for ( let i = 0; i < carsX.length; i++){
    if (carReachTheEnd(carsX[i])){
     carsX[i] = 600;
   }
  }
   
}


function carReachTheEnd(carsX){
 return carsX < -50;
}