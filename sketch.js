const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,50,50);
    box2 = new Box(925,320,50,50);
    box3 = new Box(800,295,50,50);
    box4 = new Box(925,295,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(860,320);
    pig2 = new Pig(860,295);
    log1 = new Log(860,300,170,PI/2);
    log2 = new Log(860,285,170,PI/2);
    bird = new Bird(200,380);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird.display();
    
}