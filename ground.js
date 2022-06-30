class Ground{
    constructor(x,y,w,h){
        var prop = {isStatic: true}
        this.body = Bodies.rectangle(x,y,w,h, prop)
        World.add(world, this.body) 
        this.w = w
        this.h = h
    }
    display(){
        groundObj.display()
        groundObj = new ground(400,670,800,20)
        leftSide = new ground(1100,600,20,120)
    }
}