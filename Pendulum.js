class Pendulum{
    constructor(x, y) {
      var options = {
        'restitution': 1,
        'slop': 1,
        'inertia': Infinity

      }
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display() {
      //console.log('this function is working')
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("white");
      strokeWeight(2);
      fill("black");
      ellipse( 0, 0, 60,60);
      pop();
    }
  }