const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisionHeight=300;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
  ground = new Ground(480,790,840,20)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  particles= new Particle(random,50,10)
  ground.display();
 
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 0; j < particles.length; j++){
    plinkos[j].display();
  }

  for (var p = 0; p <=width; p = p + 80) {
    divisions.push(new Divisions(p, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var k = 0; k < particles.length; k++){
    divisions[k].display();
  }

  drawSprites();
}
