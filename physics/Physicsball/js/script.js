 // JavaScript Document
onload = init;

var targetx;

var moveCircle = document.getElementById("circle");

function init(){
		
		document.getElementById("circle").ononmousedown = function(){easing()};
	
	}
	
function easing(){
	if(document.getElementById("circle").onmousedown){
		document.getElementById("circle").style.left = "10px";
	}
	}