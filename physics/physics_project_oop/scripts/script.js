// JavaScript Document

onload = init;
var c;
var circle1;
var circle2;
var xcoord;
var ycoord;
var theSide;
var x = 0;
var y = 0;

var resultx=0;
var resulty=0;
var totalSpeed = 0;
var xcoord;
var ycoord;
var ycoordOld = 0;
var xcoordOld = 0;

var xp = new Array(0, 0);
var yp = new Array(0, 0);

var loopInterval = setInterval(loop,1000/30);

function init(){
	
	createCanvas();
	
	circle1 = new Circle(100,100);
	circle2 = new Circle(350,150);
	
	window.onmousemove = function (e){circle1.x = e.pageX; circle1.y= e.pageY; }
	
	$(document).mousemove(function(e){
		if(circle1.x == circle2.x){
			

			//console.log("mousevoer");
			//circle2.x = resultx;		
			
			resultx = xp[0] - xp[1];
			resulty = yp[0] - yp[1];
		} else { 
			//console.log("not mousevoer");
		}
	});
}



function displayMouseSpeed(){
	document.getElementById("mouseSpeed").innerHTML = mouseSpeed;	
}

function createCanvas(){
	canvas = document.getElementsByTagName('canvas')[0];
	context = canvas.getContext( '2d' );
	canvas.width = 700; 
	canvas.height = 300; 
	c = context; 
}

$(document).mousemove(function(e){
	xcoord = e.pageX;
	ycoord = e.pageY;
});

$(document).mousemove(function(e){
	if(e.pageX > 20 && e.pageX < 720 && e.pageY > 20 && e.pageY < 320){
		$("#mouseSpeedTesting").html("xord: " + e.pageX + " ||| ycord: " + e.pageY);
		$("#arrayValues").html("<br /> XP[0]: " + xp[0] + " <br />XP[1]: " + xp[1] + "<br />result x: " + resultx + "<br /> <br >YP[0]: " + yp[0] + " <br />YP[1]: " + yp[1] + "<br />result y: " + resulty + "<br /><br /> which side: " + theSide + "<br /><br /> total speed: " + totalSpeed );
				
		$("#myCanvas").css("cursor", "pointer");
				
		if(e.pageX > 340 && e.pageX < 720){
			theSide = "right";
		} else if(e.pageX > 20 && e.pageX < 340){
			theSide = "left";
		}
	}
});

function Circle(xp, yp){
	this.x = xp;
	this.y = yp;
	
	this.update = function(){
	
		c.fillStyle = 'rgb(255,0,0)';
		c.beginPath(); 
		c.arc(this.x,this.y,25,0,Math.PI*2,true); 
		c.fill(); 
	}
	
	this.move = function(){
		//console.log(resultx)
		
		//resultx = ((resultx+this.x) - this.x) *.2;
		//console.log(resultx, this.x)
		resultx*=.9;
		this.x+= resultx;
		
		//console.log(this.x+resultx)
		
		c.fillStyle = 'rgb(255,0,0)';
		c.beginPath(); 
		c.arc(this.x,this.y,25,0,Math.PI*2,true); 
		c.fill(); 
	}
}

function loop(){
	
	c.clearRect(0,0,700,300);
	circle1.update();
	circle2.move();
	
	xp[x++%2] = xcoord;	
	yp[y++%2] = ycoord;

			
	totalSpeed = ((resultx*2)+(resulty*2))/2;
}