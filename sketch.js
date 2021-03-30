var garden, gardenImg;
var cat, catImg, catImgF, catImgL;
var mouse, mouseImg, mouseImgF, mouseImgL;

function preload(){

gardenImg = loadImage("images/garden.png");
  catImg =  loadAnimation("images/cat2.png"&& "images/cat3.png");
	catImgF = loadAnimation("images/cat1.png");
  catImgL = loadAnimation("images/cat4.png");
  mouseImg = loadAnimation("images/mouse2.png"&& "images/mouse3.png");
  mouseImgF = loadAnimation("images/mouse1.png");
  mouseImgL = loadAnimation("images/mouse4.png");
}

function setup() {
	createCanvas(800, 750);

  garden = createSprite(400, 375);
  garden.addImage("Garden", gardenImg);
  garden.scale = 1.1;

  cat = createSprite(620, 600, 20, 50);
  cat.addAnimation("catFirstImage", catImgF);
  cat.scale = 0.2;

  mouse = createSprite(100, 620, 20, 40);
  mouse.addAnimation("mouseFirstImage", mouseImgF);
  mouse.scale = 0.1;
}


function draw() {
  background(0);

  var collisionDetectorX = 0;
  collisionDetectorX = cat.width/2 + mouse.width/2

  if(cat.collide(mouse)){
    cat.velocityX = 0;
    cat.y = 600;
    cat.addAnimation("catLastImage", catImgL);
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage", mouseImgL);
    mouse.changeAnimation("mouseLastImage");
    }
  
cat.debug = true;
cat.setCollider("circle", 5, 5, 500);
mouse.debug = true;
mouse.setCollider("circle", 5, 5, 200);

  keyPressed();

  drawSprites();

}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg) &&  mouse.addAnimation("mouseTeasing", mouseImg);
    cat.changeAnimation("catRunning") && mouse.changeAnimation("mouseTeasing");
  }
} 