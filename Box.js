class Box{
constructor(x, y, w, h){
    var options={
        isStatic: false,
        restitution: 1
       }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.body.width=w
    this.body.height=h
    World.add(world,this.body)  
     
}
display(){
    rectMode(CENTER);
    fill(random(0,255), 3, 252)
    rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height) 
 

}


}