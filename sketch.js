 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var plinkos = [];
var divisions = [];
var particle ;
var world,engine;
var divisionHeight=300;
var score =0;
var turn = 0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  
    
    text("SCORE:" + turn,20,20)
 
    text("500",25,550);
    text("500",100,550);
    text("500",180,550);
    text("500",260,550);
    text("100",340,550);
    text("100",420,550);
    text("100",500,550);
    text("200",575,550);
    text("200",660,550);
    text("200",745,550);
   ground.display();
    if (gameState == END){
      text("game over", displayWidth/4, displayHeight/2);
          }
      
          for (var i = 0; i < plinkos.length; i++) {
     
            plinkos[i].display();
            
          }



 if (particle != null ){
particle.display();
if (particle.body.position.y>760){
  if (particle.body.position.x<300){
    score = score+500;
    particle = null;
    if(turn>= 5){
      gameState = END;
    }
  }
  else if(particle.body.position.x<600 && particle.body.position.x > 301){
    score = score+100;
    particle = null;
    if(turn>= 5){
      gameState = END;
    }

  }
  else if(particle.body.position.x<900 && particle.body.position.x > 601){
    score = score+200;
    particle = null;
    if(turn>= 5){
      gameState = END;
}
  }
    }

 }

 

 for (var k = 0; k < divisions.length; k++) {
      
  divisions[k].display();
}
      

  }


  

    
    

function mousePressed(){
if (gameState !== END){
  turn++;
  particle = new Particle (mouseX,10,10,10);
  console.log("iran")
}
}