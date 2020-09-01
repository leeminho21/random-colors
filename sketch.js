const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var bodies;
var ground
var box
var square
var lee
var jeon
function setup() {
  createCanvas(800,400);
 engine=Engine.create ();
 world=engine.world;
 var options2={
  isStatic: true
 }

 ground=Bodies.rectangle(400,300,800,20, options2);

 bodies=new Box(116,105,30,30);
 box=new Box(200,200,60,50);
 square=new Box(153,50,50,50);
 lee=new Box(70,40,30,20);
 jeon=new Box(90,40,30,50);
 World.add(world,ground)
 console.log(bodies)
}

function draw() {
  background(100,random(0,100),random(0,252));
  
  Engine.update(engine); 
  fill(66, 102, 245)
  bodies.display();
  rectMode(CENTER);
 rect (ground.position.x, ground.position.y,800,20)
 box.display();
 square.display();
 lee.display();
 jeon.display();

}