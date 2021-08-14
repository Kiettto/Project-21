
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftPole, rightPole;
//var leftSide;
//var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	};

	var pole_options = {
		isStatic:true
	};

	//Create the Bodies Here.
	ball = Bodies.circle(200,650,15,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	//leftSide = new Ground(1100,600,20,120);
	leftPole = new Ground(500,623,10,75);
	rightPole = new Ground(620,623,10,75);

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

 ellipse(ball.position.x,ball.position.y,27);
  

 groundObj.display();
 //leftSide.display();
 leftPole.display();
 rightPole.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === 68){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:-0.5});
	}
}



