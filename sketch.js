var sea,seai;
var ship,shipi;
function preload() {
  seai = loadImage("sea.png");
  shipi = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
}
function setup() {
  createCanvas(600,200);
background("blue");
  sea = createSprite(10,10,3000,200);
  sea.addImage(seai);
  sea.velocityX=-5;
  sea.scale=0.3;

  ship = createSprite(120,160,30,30);
  ship.addAnimation("movingship", shipi);
  ship.scale = 0.2; 

}
function draw() 
{
  background("white");
  
  sea.velocityX = -2;
  if(sea.x <0){
    sea.x = sea.width/8;
  }
  drawSprites();
}