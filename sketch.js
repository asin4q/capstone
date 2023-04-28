
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball = []
let ground, leftSide,rightSide
var cannon
var angle
var trampoline

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;


	
	


	Engine.run(engine);

	
	



  ground = new Ground(width/2,670,width,20)
	 right = new Ground(790,200,20,8000)
     left = new Ground(10,200,20,8000)
     top_wall = new Ground(200,10,8000,20)
	leftSide = new Ground(100,600,20,120)
	rightSide = new Ground(250,600,20,120)

  

	
	cannon = new Cannon(300,120,80,70);
  
  	

 
  
    
	
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  Engine.update(engine);

  ground.display()
  leftSide.display()
  rightSide.display()
  right.display()
  left.display()	
  top_wall.display()
  
  
  cannon.display()
  
 
 keyPressed()
  

 
  
  
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  var cannonBall = new CannonBall(cannon.x, cannon.y);
	  cannonBall.trajectory = [];
	  Matter.Body.setAngle(cannonBall.body, cannon.angle);
	  balls.push(cannonBall);
	}
  }

  
	
