var paper;
var side1, side2, side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper = createSprite(50, 650, 20, 20);
	side1 = createSprite(500, 600, 10, 250);
	side2 = createSprite(700, 600, 10, 250);
	side3 = createSprite(600, 695, 200, 10);
	Matter.engine.add(paper);
	Engine.run(engine);
}
function draw() {
	rectMode(CENTER);
	background(0);
	drawSprites();
}
function keyPressed()
{
	if (keyCode===85)
	{
		
	}
}