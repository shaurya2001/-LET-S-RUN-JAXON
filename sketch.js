var path,pathImage;
var runner,runnerImage;
var InvisibleBoundary1,InvisibleBoundary2;
var BottomEdge;

function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
   InvisibleBoundary1=createSprite(34,200,20,400);
   InvisibleBoundary1.visible=false;
  InvisibleBoundary2=createSprite(370,200,20,400);
   InvisibleBoundary2.visible=false;
   
  runner=createSprite(300,320,70);
   runner.addAnimation("running",runnerImage);
 
  InvisibleBoundary1=createSprite(34,200,20,400);
  InvisibleBoundary1.visible=false;
  InvisibleBoundary2=createSprite(370,200,20,400);
   InvisibleBoundary2.visible=false;
  
  BottomEdge=createSprite(200,400,400,20);
  BottomEdge.visible=false;
}

function draw() {
  background(0);
  
  if(path.y>400)
    {
      path.y=height/2;
    }

    runner.x= World.mouseX;
  
  
  
  runner.collide(BottomEdge);
  runner.collide(InvisibleBoundary1);
  runner.collide(InvisibleBoundary2);
  drawSprites();
}
