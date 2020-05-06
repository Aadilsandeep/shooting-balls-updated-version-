function Box(x, y, w, h, a){
  var options={
friction:0.1
  }
  this.body=Bodies.rectangle(x, y, w, h, options);
  World.add(world,this.body);
  this.w= w;
  this.h= h;
  

this.show=function(){
  var pos=this.body.position;
  var angle=this.body.angle;

  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(7);
  stroke(0);
  fill("red");
  rect(0,0,this.w,this.h);
  pop();
}
}
