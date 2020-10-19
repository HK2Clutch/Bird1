class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 45, 45, options);
      this.width = 45;
      this.height = 45;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill("Purple");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  