var bg
var balloon1, balloon2, balloon3
var balloon
var obstacles


function preload() {
  bg = loadImage("assets/bg.png")
  balloon = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
  obsBottom1 = loadImage("assets/obsBottom1.png")
  obsBottom2 = loadImage("assets/obsBottom2.png")
  obsBottom3 = loadImage("assets/obsBottom3.png")
  obsTop1 = loadImage("assets/obsTop1.png")
  obsTop2 = loadImage("assets/obsTop2.png")
  restartimg = loadImage("assets/restart.png")
  gameOverimg = loadImage("assets/gameOver.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  airballoon = createSprite(500,500)
  airballoon.addAnimation("balloon",balloon)
  airballoon.scale = 0.4;
  topground = createSprite(200,10,displayWidth,20)
  bottomground = createSprite(200,displayHeight-10,displayWidth,20)
  topground.visible = false
  bottomground.visible = false
}
function draw() {
  background(bg);
  
  if(keyDown("a")){
airballoon.velocityY = -6
  }

  airballoon.velocityY = airballoon.velocityY + 1
  spawnobstaclesTop();
  drawSprites();
}

function spawnobstaclesTop(){
  if (frameCount%60 === 0){
  obstaclesTop = createSprite(displayWidth,400)
  obstaclesTop.velocityX = -2
  obstaclesTop.scale = 0.3
  obstaclesTop.y = Math.round(random(140,120))
  var rand = Math.round(random(1,2))
  switch(rand){
    case 1:obstaclesTop.addImage(obsTop1);
    break;
    case 2:obstaclesTop.addImage(obsTop2);
    break;
    default:break;

  }
  obstaclesTop.lifetime = 100
}
}
function spawnobstaclesBottom(){
  if (frameCount%60 === 0){
  obstaclesBottom = createSprite(displayWidth,400)
  obstaclesBottom.velocityX = -2
  obstaclesBottom.scale = 0.3
  obstaclesBottom.y = Math.round(random(140,120))
  var rand = Math.round(random(1,3))
  switch(rand){
    case 1:obstaclesBottom.addImage(obsBottom1);
    break;
    case 2:obstaclesBottom.addImage(obsBottom2);
    break;
    case 3:obstaclesBottom.addImage(obsBottom3);
    break;
    default:break;

  }
  obstaclesBottom.lifetime = 100
}
}