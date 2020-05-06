function Circle(x, y, r){
  var options={
    friction:0.4,
    restitution:1


  }
  this.body=Bodies.circle(x, y, r, options);
  World.add(world,this.body);
  this.r= r;

this.show=function(){
  var pos=this.body.position;
  var angle=this.body.angle;

  push();
  translate(pos.x,pos.y);
  rotate(angle);
  fill("blue");
  noStroke();
  ellipse(0, 0, this.r*2);
  ellipseMode(CENTER);
  pop();
}
}
