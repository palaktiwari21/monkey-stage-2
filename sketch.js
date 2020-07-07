//Global Variables

var scene,sceneimg;
var monkey,monkeyrunning,monkeycollided;
var stone,stoneimg,obdtaclegroup;
var banana,bananaimg,bananagroup;
var ground,groundimg;
var score;


function preload(){
  sceneimg=loadImage("jungle.jpg");
  stoneimg=loadImage("stone.png");
  bananaimg=loadImage("Banana.png");
  groundimg=loadImage("ground.jpg");
 monkeyrunning=loadImage("Monkey_01.png","Monkey_02.png","Monkey_03","Monkey_04","Monkey_05","Monkey_06,","Monkey_07","Monkey_08","Monkey_09","Monkey_10");
 
}


function setup() {
  createCanvas(600,300);
  scene=createSprite(20,20);
  scene.addImage(sceneimg);
  
  ground=createSprite(600,580,90,70);
  ground.addImage(groundimg);
  monkey=createSprite(40,220,20,20);
  monkey.addImage(monkeyrunning);
  
  
  bananagroup=new Group();
  obstaclegroup=new Group();
  
  scene.scale=1.3;
 ground.scale=0.8;
 
  monkey.scale=0.1;
  
  fill("red");
  textSize(20);
}


function draw(){
 background(255); 
  
  
   ground.velocityX=-5;
    
  if (ground.x < 0){
    ground.x = ground.width/8;
  }
    scene.velocityX=-8;
    if (scene.x < 0){
    scene.x = scene.width/2;
  } 
 console.log(monkey.y); 
 
 
  
  
 
  
  
  
  
 
  
  
  
  switch(score){
  
  case 20:monkey.scale=0.2;
      break;
      
  case 40:monkey.scale=0.3;
      break;
  
   case 60:monkey.scale=0.4;
         break;
         
    case 80:monkey.scale=0.5;
      break;
      
      
      case 150: monkey.scale=0.6;
        break;
        
        default:break;
  
  } 
    
    
    if(keyDown("UP_ARROW") && monkey.y >= 270){  
 monkey.velocityY=-12;  
   
 }
   monkey.velocityY = monkey.velocityY +0.3;
 
  
  
  
 
  
  
  
  

  
  
 food();
   stonegroup();
    if (bananagroup.isTouching(monkey)) {
  score=score+2;
      bananagroup.destroyEach();
  } 
    
    if(obstaclegroup.isTouching(monkey)){
  
    monkey.scale=0.1;
    obstaclegroup.destroyEach();
    }

    
    
    
    
 edge= createEdgeSprites();
  monkey.collide(edge[3]);
  
    
    
  
    

  
  
  drawSprites();
  score=Math.round(World.frameCount/200);
  text("SCORE :"+score,60,30);
}


 function food () {
  if(World.frameCount%80===0){
    var banana= createSprite(400,random(20,120));
   banana.addImage(bananaimg);
  banana.scale=0.1;
  banana.velocityX=-5;
banana.lifetime=80;
    bananagroup.add(banana);
  }
 }
    
    
    function stonegroup(){
   
 if(World.frameCount%100===0){  
var stone = createSprite(random(200,600),270);
stone.addImage(stoneimg); 
 stone.scale=0.2;
stone.velocityX=-5;
stone.lifetime=80;
 obstaclegroup.add(stone );


  }
  
  }






