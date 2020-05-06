var Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies,
Constraint = Matter.Constraint;

var ground;
var slingshot;


function setup(){
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
     var options={
        isStatic:true
  }
  ground=Bodies.rectangle(200,height,width,20,options);
  World.add(world,ground);

  box=new Box(500,350,50,50);
  box1=new Box(550,350,50,50);
  box2=new Box(450,350,50,50);
  box3=new Box(475,300,50,50);
  box4=new Box(525,300,50,50);
  box5=new Box(500,250,50,50);


  bird=new Circle(100,200,20);

  slingshot = new SlingShot(bird.body,{x:100, y:200});
}
function draw(){
  background("green");
  Engine.update(engine);

fill("green")
rect(ground.position.x,ground.position.y,width,10);

box.show();
bird.show();
box1.show();
box2.show();
box3.show();
box4.show();
box5.show();

slingshot.display();
  }
  function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    }
    function keyPressed(){
      if (keyCode===32){
Matter.Body.setPosition(bird.body,{x:200,y:50});
slingshot.attach(bird.body);


      }
    }
