class Box
  {
    constructor()
    {
      this.x =100;
      this.y = 200
      this.w = 50;
      this.h = 50;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //write function to set the width of the box
set_speed(v){
  this.x=this.x+v
}
  set_width(b){
    this.w=b;
  }
  }

  
