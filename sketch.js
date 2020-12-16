var car,wall;
var speed,weight,deform;

function setup() {
  createCanvas(800,400);
  
  car=createSprite(50,200,50,25);
  car.shapeColor="white";

  wall=createSprite(700,200,60,height/2);
  wall.shapeColor="black";

  speed=random(50,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("lightblue");  

  if(wall.x-car.x<=car.width/2+wall.width/2){
    car.velocityX=0;
    deform=0.5*speed*weight*speed/22500;
    console.log(deform);
    if(deform<=100){
      car.shapeColor="green";
    }
    else if(deform<=180){
      car.shapeColor="yellow";
    }
    else{
      car.shapeColor="red";
    }
  }

  drawSprites();
}