var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(100,600,50,50);
	helicopterSprite=createSprite(width/2,200,50,50);
	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(100,600,5,{restitution:0.5,isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}
function keypressed()
{
	if (keyCode === 32)
	{
	Matter.Body.applyForce(packageBody,225,10)
	}
}