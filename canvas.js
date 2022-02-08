var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");	
var h = screen.height;
var w = screen.width;
brush.fillStyle = "lightgrey";
brush.fillRect(0,0,w,h); 

function cleanScreen(){
    brush.clearRect(0,0,w,h);
}

function designCircumference(x,y,radio,color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x,y,radio,0,2*Math.PI);
    brush.fill();
}	
