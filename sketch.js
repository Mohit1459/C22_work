const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;
var g,b;
function setup() {
  createCanvas(400,400);
  //
 engine=Engine.create();
 world=engine.world;
 g=Bodies.rectangle(200,200,390,20);
 World.add(world,g);
 b=Bodies.circle(200,100,20);
 World.add(world,b);
}

function draw() {
  background("red");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(g.position.x,g.position.y,50,50);
  ellipse(b.position.x,b.position.y,20,20);
}