const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var r1, r2, r3, r4, r5;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  bob1 = new Pendulum(200,400, "white");
  bob2 = new Pendulum(260,400, "white");
  bob3 = new Pendulum(320,400, "white");
  bob4 = new Pendulum(380,400, "white");
  bob5 = new Pendulum(440,400, "white");

  r1 = new Sling(bob1.body , {x:200, y: 400 })
  r2 = new Sling(bob2.body , {x:260, y: 400 })
  r3 = new Sling(bob3.body , {x:320, y: 400 })
  r4 = new Sling(bob4.body , {x:380, y: 400 })
  r5 = new Sling(bob5.body , {x:440, y: 400 })

}

function draw() {
  background(0);  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();

}

function mouseDragged() {
   
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
  }



