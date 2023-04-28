class Cannon {
    constructor(x, y, width, height ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
       var options = {
        isStatic: true

      }
      
      this.cannon_image = loadImage("cannon.png");
      
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
      World.add(world,this.body)
    }
    display() {

      var pos = this.body.position
     if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
        this.angle += 1;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
        this.angle -= 1;
      }
  
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.cannon_image,pos.x,pos.y,10,30)
      noFill();
      pop()
    }
  }