var ground,tree,mango,mango1,mango2,boy,slingi;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Matter.SAT
var flag =0;
var boyimg;
var stone,stoneimg;
function preload()
{
	boyimg =loadImage('images/boy.png')
  stoneimg =loadImage('images/stone.png')
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,650,800,20)
tree = new Tree(600+200,450-50,200,500)
mango=new Mango(580+200,300,50,50)

mango1= new Mango(600+ 200,180,50,50)
mango2 = new Mango(660+200,300,50,50)
	Engine.run(engine);
	var options = {
        isStatic: true
    }
boy = Bodies.rectangle(100,400,100,100,options)
  World.add(world,boy)
//stone = Bodies.rectangle(90,400,100,100,options)
  //World.add(world,stone)

stoneObj=new Stone(235,420,30); 
slingi = new Sling(stoneObj.body,{x:190,y:450})
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  tree.display()
  drawSprites();
  mango.display()
  mango1.display()
  mango2.display()
  slingi.display()
  imageMode(CENTER)
  image(boyimg,300,550,300,400);
  //image(stoneimg,stone.x,stone.y,35,35);


  stoneObj.display()
  var collison = Matter.SAT.collides(stoneObj.body, mango.body);
  if(collison.collided){
    flag=1;
  }
  if(flag===1){
    Matter.Body.setStatic(mango.body,false);
  }
  var collison = Matter.SAT.collides(stoneObj.body, mango1.body);
  if(collison.collided){
    flag=1;
  }
  if(flag===1){
    Matter.Body.setStatic(mango1.body,false);
  }
  var collison = Matter.SAT.collides(stoneObj.body, mango2.body);
  if(collison.collided){
    flag=1;
  }
  if(flag===1){
    Matter.Body.setStatic(mango2.body,false);
  }
  
 //share the screen????? can you hear me? i cant hear you
}



function mouseReleased(){
	slingi.fly()
    
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  console.log("dragged")
}

