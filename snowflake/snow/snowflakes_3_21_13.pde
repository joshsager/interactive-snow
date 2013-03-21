//declare variable
 
float myFloat  = 50;
 
//instruction to create new circle
 
Circle myCircle = new Circle (100,100,30);
Circle myCircle2 = new Circle (100,130,30);
Circle myCircle3 = new Circle (100,160,30);
Circle myCircle4 = new Circle (100,190,30);
Circle myCircle5 = new Circle (100,220,30);
Circle myCircle6 = new Circle (100,250,30);

  void setup () {
     
    size (400,400);
    smooth ();
   
}
 
 
  void draw () {
   
    background (0);
//    myCircle.checkCollisions ();
  //  myCircle2.checkCollisions ();
//    myCircle3.checkCollisions ();
  //  myCircle4.checkCollisions ();
//    myCircle5.checkCollisions ();
  //  myCircle6.checkCollisions ();
    
    myCircle.update (); //call the update for the speed of the circle
    myCircle2.update ();
    myCircle3.update ();
    myCircle4.update (); 
    myCircle5.update ();
    myCircle6.update (); 
     
    myCircle.drawCircle();  //this draws up the functions of the circle
    myCircle2.drawCircle();
    myCircle3.drawCircle();
    myCircle4.drawCircle();
    myCircle5.drawCircle();
    myCircle6.drawCircle();
     
}
//defining the circle - what its going to be like
  class Circle {
     
     float x;
     float y;
      
     //float xspeed;
     //float yspeed;
 
     float circleSize;
      
     //properties of the circle class
      
     //methods of this circle class
     Circle (float  xpos, float ypos, float cSize) {
        
       x = xpos;
       y = ypos;
       circleSize = cSize;
        
       //xspeed = random (-10,10); //create a speed for the circles
       //yspeed = random (-10,10); //adding random changes speed from -10 backwards speed to +10 forwards speed
        
     }
      
     void update () { //update function as another class to the circle
      // x += xspeed;
      // y += yspeed;
        
     }
      
    // void checkCollisions () { //check the collisions of the balls with wall
                                 //stops it goin outside box
      // if ( (x<0) || (x>width)) {
      //   xspeed = -xspeed;    //if x is less than or bigger than box minus the speed.
      // }
     
      //if ( (y<0)  || (y>height)) {
      //   yspeed = -yspeed;
     // }
    //}
   
  void drawCircle () {
     
    fill (255,255,255,255);
    ellipse (x,y,25,25);
  }
   
}
