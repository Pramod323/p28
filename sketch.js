 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, d1, d2, d3;
var dp, pp;
var d, p;
var chain;

function preload()
{
	dp = loadImage("dustbin.png");
	pp = loadImage("paper.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	d = createSprite(width/4+width/4+width/4,(height/400)*240);
	d.addImage(dp); 
	d.scale = (width/800)*0.2;

	p = createSprite((width/800)*50,(height/400)*50);
	p.addImage(pp);
	p.scale = (width/800)*0.3;
	
	//Create the Bodies Here.

	ground = new Ground(width/2,(height/400)*340,width,(height/400)*20);

	d1 = new Dustbin((width/800)*596,(height/400)*320,(width/800)*170,(height/400)*20);
	d2 = new Dustbin((width/800)*555,(height/400)*275,(width/800)*20,(height/400)*90);
    d3 = new Dustbin((width/800)*638,(height/400)*275,(width/800)*20,(height/400)*90);

	paper = new Paper((width/800)*90,(height/400)*280,(width/800)*23);

	chain = new Chain(paper.body, {x: width/4, y: height/4})
	
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
    rectMode(CENTER);
    background("white");

	//d1.display();
	//d2.display();
	//d3.display();

    ground.display();
	paper.display();
	chain.display();
    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}