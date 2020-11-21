var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rb1,rb,rb3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	helicopterIMG=loadImage("SupplyMission-master/helicopter.png")
	packageIMG=loadImage("SupplyMission-master/package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	rb1 = createSprite(width/2, 690, 20, 200);
	rb2 = createSprite(600,50,100,20);
	rb3 = createSprite(800,50,100,20);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  rb1.shapeColor = ("red"); 
  rb2.shapeColor = ("red");
  rb3.shapeColor = ("red");
  
  rb1.debug = true;
  rb2.debug = true;
  rb3.debug = true;

  rb1.isStatic(true);
  rb2.isStatic(true);
  rb3.isStatic(true);
  drawSprites();
  packageSprite.collide(rb1 && rb2 && rb3);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.isStatic(packageBody,false);
  }
}