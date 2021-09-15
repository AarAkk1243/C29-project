class Base{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var baseOptions={
            isStatic: true
        }
        this.base = Bodies.rectangle(x,y,w,h, baseOptions);
        World.add(world,this.base);
    }

    display(){
        var pos = this.base.position
        push ();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop ();
    }
}