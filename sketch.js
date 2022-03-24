const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var score; 

var gameState = 2;
var start = 1;
var end = 0;
var score = 0;
var velocityY = 0;
var velocityX = 0;

function setup() {
 // createCanvas(windowWidth, windowHeight);
 createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  bottom_wall =createSprite(200,790,1200,20);
  right = createSprite(790,200,20,1200);
  left = createSprite(10,200,20,1200);
  top_wall = createSprite(200,10,1200,20);
  obstacle1 = createSprite(300,200,20,20);
  obstacle2 = createSprite(200,200,20,20);
  obstacle3 = createSprite(random(50,750),random(50,750),20,20);
  obstacle4 = createSprite(random(50,750),random(50,750),20,20);
  obstacle5 = createSprite(random(50,750),random(50,750),20,20);
  player = createSprite(100,200,20,50);
  ball = createSprite(300,300,30,30)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("skyblue");  
  bottom_wall.display();
  right.display();
  top_wall.display();
  left.display();
  obstacle1.display();
  obstacle2.display();
  controlVelocity();


  if(player.x === 789||player.x === 11||player.y === 789 || player.y === 11){
    gameState = 0; 
    controlVelocity();
  }

  if(player.isTouching(obstacle5)||player.isTouching(obstacle4)||player.isTouching(obstacle3)||player.isTouching(bottom_wall)||player.isTouching(top_wall)||player.isTouching(right)||player.isTouching(left)||player.isTouching(obstacle1)||player.isTouching(obstacle2)){
    gameState = 0; 
    controlVelocity();
  }

  if(player.isTouching(ball)){
    score=score+1; 
    obstacle1.x= random(50,750);
    obstacle1.y= random(50,750);
    obstacle2.x= random(50,750);
    obstacle2.y= random(50,750);
    ball.x= random(50,750);
    ball.y= random(50,750);
  }
 /* if(score%2===0 && score>0  ){
    velocityX = velocityX+5;
    velocityY = velocityX+5;
    controlVelocity();
    console.log("modulo");
  } */



  drawSprites();
  fill("black");
  textSize(25);
  text("Score: "+score,355,40);

  if(gameState === 0){
    fill("red");
    textStyle("bold");
    textSize(100);
    text("Game Over", 100,400);
    console.log("test");
  }
}


function controlVelocity(){
  player.velocityX = velocityX;
  player.velocityY = velocityY;

  if(keyDown("left_arrow")){
    velocityX = -10;
    velocityY = 0;

  }
  if(keyDown("right_arrow")){
    velocityX = 10;
    velocityY = 0;

  }
  if(keyDown("up_arrow")){
    velocityY = -10;
    velocityX = 0;

  }
  if(keyDown("down_arrow")){
    velocityY = 10;
    velocityX = 0;

  }
  console.log("function");
}
