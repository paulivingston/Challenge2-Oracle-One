var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");	
var h = screen.height;
var w = screen.width;
brush.fillStyle = "lightgrey";
brush.fillRect(0,0,w,h); 
brush.lineWidth = 5;

function cleanScreen(){
    brush.clearRect(0,0,w,h);
}

function error1() {
    brush.beginPath()
    brush.moveTo(w*0.05,h*0.95);
    brush.lineTo(w*0.2,h*0.85);
    brush.lineTo(w*0.35,h*0.95);
    brush.lineTo(w*0.05,h*0.95);
    brush.stroke();
}

function error2() {
    brush.beginPath()
    brush.moveTo(w*0.2,h*0.85);
    brush.lineTo(w*0.2,h*0.1);
    brush.moveTo(w*0.2,h*0.1);
    brush.lineTo(w*0.5,h*0.1);
    brush.moveTo(w*0.5,h*0.1);
    brush.lineTo(w*0.5,h*0.2);
    brush.stroke();
}

function error3() {
    brush.beginPath();
    brush.arc(w*0.5,h*0.27,h*0.07,0,2*Math.PI);
    brush.stroke();
}

function error4() {
    brush.beginPath()
    brush.moveTo(w*0.5,h*0.34);
    brush.lineTo(w*0.5,h*0.55);
    brush.stroke();
}

function error5() {
    brush.beginPath()
    brush.moveTo(w*0.5,h*0.42);
    brush.lineTo(w*0.42,h*0.47);
    brush.stroke();
}

function error6() {
    brush.beginPath()
    brush.moveTo(w*0.5,h*0.42);
    brush.lineTo(w*0.58,h*0.47);
    brush.stroke();
}

function error7() {
    brush.beginPath()
    brush.moveTo(w*0.5,h*0.55);
    brush.lineTo(w*0.45,h*0.68);
    brush.stroke();
}

function error8() {
    brush.beginPath()
    brush.moveTo(w*0.5,h*0.55);
    brush.lineTo(w*0.55,h*0.68);
    brush.moveTo(w*0.48,h*0.25);
    brush.arc(w*0.48,h*0.26,h*0.01,-90,2*Math.PI);
    brush.moveTo(w*0.52,h*0.25);
    brush.arc(w*0.52,h*0.26,h*0.01,-90,2*Math.PI);
    brush.moveTo(w*0.487,h*0.31);
    brush.arc(w*0.5,h*0.31,h*0.02,160,119.5);
    brush.stroke();
}


//export { error1, error2, error3, error4, error5, error6, error7, error8 }
//import {error1, error2, error3, error4, error5, error6, error7, error8} from canvas.js;

