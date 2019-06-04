const canvas=document.createElement("canvas");
const body=document.getElementsByTagName("body")[0];
const c=canvas.getContext("2d");
let stopped=false;
function setFrame(){
	canvas.id="canvas";
	canvas.width=600;
	canvas.height=400;
	canvas.style.border = "1px solid";
	body.appendChild(canvas);
}
function background(color){
	c.fillStyle=color;
	c.fillRect(0,0,canvas.width,canvas.height);
}
function fill(color){
	c.fillStyle=color;
}
function noLoop(){
	stopped=true;
}


setFrame();
let x=5;
let y=5;

function setup(){
	background("white");
	document.addEventListener("click",mouseClicked);
	
	
}
function mouseClicked(event){
	let mouseX=event.layerX;
	let mouseY=event.layerY;
	c.beginPath();
	fill("black");
	c.fillRect(mouseX,mouseY,34,34);
	c.stroke();
	c.closePath();
}
function draw(){
	if (!stopped){
		c.beginPath();
		fill("black");
		c.fillRect(x,y,34,34);
		c.stroke();
		c.closePath();
	}
}
let intervalID=setInterval(draw,1000/60);
setup();
draw();
