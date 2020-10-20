var grass1, grass2, sun, tomato, potato, onion, carrot, pumpkin;
var imgSun, imgPumpkin, imgTomato, imgPotato, imgCarrot, imgOnion;

function preload(){
  imgSun = loadImage('images/sun.jpg',200,200);
  imgPumpkin = loadImage('images/pumpkin.jpg',10,10);
  imgTomato = loadImage('images/tomato.jpg',0,10);
  imgPotato = loadImage('images/potato.jpg',0,10);
  imgCarrot = loadImage('images/carrot.jpg',0,10);
  imgOnion = loadImage('images/onion.jpg',0,10);
}

function setup() {

grass1=createSprite(400,200,100,400);
grass1.shapeColor="green";
  
grass2=createSprite(5,200,50,400);
grass2.shapeColor="green";
  
sun=createSprite(300,100,100,100);
sun.addAnimation('explode', imgSun);
  
pumpkin=createSprite(50,50,10,10);
pumpkin.addAnimation('explode', imgPumpkin);
  
var tomato=createSprite(50,130,10,10);
tomato.addAnimation('explode', imgTomato);
  
var potato=createSprite(50,210,10,10);
potato.addAnimation('explode', imgPotato);
  
var carrot=createSprite(50,290,10,10);
carrot.addAnimation('explode', imgCarrot);
  
var onion=createSprite(50,370,10,10);
onion.addAnimation('explode', imgOnion);
}



function draw() { 
  
  if (keyDown("P")) {
    for (var i = 50; i < 300; i=i+50) {
      pumpkin = createSprite(i, 50, 20, 20);
      pumpkin.addAnimation('explode', imgPumpkin); 
    }
  }
 
  if (keyDown("T")) {
    for (var g = 0; g < 200; g=g+50) {
      tomato = createSprite(g+100, 130, 20, 20);
      tomato.addAnimation('explode', imgTomato); 
   }
  }

 
  if (keyDown("p")) {
    for (var a = 0; a < 200; a=a+50) {
      var potato = createSprite(a+100, 210, 20, 20);
      potato.addAnimation('explode', imgPotato); 
     }
  }

  if (keyDown("c")) {
    for (var t = 0; t < 200; t=t+50) {
      var carrot=createSprite(t+100, 290, 20, 20);
      carrot.addAnimation('explode', imgCarrot); 
    }
  }

  if (keyDown("o")) {
    for (var f = 0; f < 200; f=f+50) {
      var onion=createSprite(f+100, 370, 20, 20);
     onion.addAnimation('explode', imgOnion); 
    }
  }
  
  background(155,118,83);
  drawSprites();

}


