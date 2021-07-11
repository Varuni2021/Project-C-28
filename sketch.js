const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,450,10);
	dustbin = new Dustbin(1150,650);
	launcher = new Launcher(paper.body,{x:200, y:50});
	




	Engine.run(engine);
  
}


function draw() {
background(230);
  rectMode(CENTER);
  

  paper.display();
  ground.display();
  dustbin.display();
  launcher.display();


  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});
	}

    
  };

  function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}


