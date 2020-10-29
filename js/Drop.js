class Drop{

    
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push();
        translate(0,0,this.body.position.x,this.body.position.y);
        stroke(4);
        strokeWeight(10);
        ellipse(0,0,this.r,this.r);
        ellipseMode(RADIUS);
        fill("blue");
        pop();
    }
}