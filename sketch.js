var bg,bgImg;
var player, shooterImg, shooter_shooting;
var invisibleGround;
var enemy1,enemy2;
var zombie;
var zombieGroup;
var bullet;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/BackGround1.png")
  enemy1 = loadImage("assets/zombie.png")
  enemy2 = loadImage("assets/zombie1.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2,displayHeight/2,200,200)
bg.addImage(bgImg)
bg.scale = 3.0;

  
invisibleGround = createSprite(displayWidth/2,displayHeight-170,displayWidth,10)
invisibleGround.visible = false;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-250, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

zombieGroup = new Group();

}

function draw() {
  background(0); 
bg.velocityX = -2;
player.collide(invisibleGround);

if(bg.x<500){
bg.x = displayWidth/2
}
Zombies();








//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet = createSprite(player.x+70,player.y-15,10,10);
  bullet.velocityX = 2; 
  if(zombieGroup.isTouching(bullet)){
    zombieGroup.destroyEach()
    bullet.destroy()
  }
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
function Zombies(){
  if(frameCount%60===0){
     zombie = createSprite(displayWidth+20,displayHeight-230)
     zombie.velocityX = -6;
     var randomNo = Math.round(random(1,2))
     if(randomNo===1){
       zombie.addImage(enemy1)
       zombie.scale = 0.1;
       
     }
     else{
       zombie.addImage(enemy2)
    zombie.scale = 0.5;
    }
    zombieGroup.add(zombie);
  }
}
