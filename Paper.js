class Paper{

    constructor(x,y,r){
        var options ={
            isStatic: false,
            'restitution': 0.03,
            'friction':0.5,
            'density':1.2
        };

        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        
    }

    display(){
      var angle = this.body.angle;
      var pos = this.body.position;

      push()
      ellipseMode(RADIUS);
      fill(255);
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0,0, 100, 100);
      ellipse(0,0,this.r,this.r); 
      pop()
    }
};

