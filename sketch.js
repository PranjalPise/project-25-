


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var ballIMG;


function preload (){

ballIMG=loadImage("paper.png");
binIMG=loadImage("dustbingreen.png")

}
function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,540,800,10,ground_options);
    World.add(world,ground);


    bin=createSprite(544,455,50,50);
    bin.addImage(binIMG);
    bin.scale=0.5;

    ball=createSprite(200,100,25,25);
    ball.addImage(ballIMG);
    ball.scale=0.5;

    var ball_options ={
	 restitution:0.3,
	 density:0.2,
	 friction:0.5,
  }

  ball = Bodies.circle(200,100,25,ball_options);
  //ball.addImage(ballIMG);
  World.add(world,ball,ball);

// box1=new Box(500,490,20,80);
// box2=new Box (50,40,80,20);
 //box3=new Box (300,300,20,80);

 drawSprites();


}

function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,800,10);
	ellipse(ball.position.x,ball.position.y,10,10);
	
	

    text(mouseX+","+mouseY,mouseX,mouseY);
    
  // box1.display();
    //box2.display(); 
    //box3.display();

    keyPressed();

    drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){ 
	Matter.Body.applyFroce(ball.body,ball.body.position,{x:85,y:-85});
	}
}