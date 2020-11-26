
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bob1 = new Bob(50,50,10);
	 bob2 = new Bob(250,50,10);
	 bob3 = new Bob(450,50,10);
	 bob4 = new Bob(650,50,10);
	 bob5 = new Bob(850,50,10);
	 cradle1 = new Cradle(bob1.body,{x:100,y:50});
	 cradle2 = new Cradle(bob2.body,{x:150,y:50});
	 cradle3 = new Cradle(bob3.body,{x:200,y:50});
	 cradle4 = new Cradle(bob4.body,{x:250,y:50});
	 cradle5 = new Cradle(bob5.body,{x:300,y:50});
	 roof = new Roof(200,50,400,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  cradle1.display();
  cradle2.display();
  cradle3.display();
  cradle4.display();
  cradle5.display();
  roof.display();
  drawSprites();
 
}



