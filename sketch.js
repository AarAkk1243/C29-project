const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var bridge, base, wall1, wall2;
var jointPoint, jointLink;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  bridge = new Bridge(10,{x:width/2-400, y:height/2});
  base = new Base(0,height-10, width*2,20);
  wall1 = new Base(200, height/2+50, 400, 100);
  wall2 = new Base(width-200, height/2+50, 400,100);
  jointPoint = new Base(width-400, height/2+10, 40,20);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge,jointPoint);

}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();
  base.display();
  wall1.display();
  wall2.display();

}
