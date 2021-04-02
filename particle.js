class Particle {
    constructor(x,y){
        var option = {
            'restitution':4,
            'friction':0
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,option);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(width/2-10,width/2+10,this.r,this.r);
        pop();
    }
}
