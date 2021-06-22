var garden,rabbit;
var gardenImg,rabbitImg;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
edges= createEdgeSprites();
}


function draw() {
  
  rabbit.x=World.mouseX
  
  rabbit.collide(edges);
  
 
  
  var select_Sprites=Math.round(random(1,3)) ; 
  
  
 if(frameCount%80==0){
if(select_Sprites==1) {
  apple();
} else if(select_Sprites==2) {
redleaf();
}
 else {
orangeleaf();
}  
drawSprites();
}

function redleaf(){
 
 var redleaf=createSprite(random(100,200),80,10,10); 
 redleaf.shapeColour="red";
 redleaf.velocityY=2;
 redleaf.scale=0.1;
 redleaf.lifetime=100;
}   

function orangeleaf(){

 var orangeleaf=createSprite(random(50,350),80,10,10); 
 orangeleaf.shapeColour="orange"
orangeleaf.velocityY=2;
orangeleaf.scale=0.1; 
orangeleaf.lifetime=100;  
}

function apple(){

 var apple=createSprite(random(80,330),80,10,10); 
 appleleaf.shapeColour="green"
 apple.velocityY=2;
 apple.scale=0.3; 
 apple.lifetime=100;
}
  


}



