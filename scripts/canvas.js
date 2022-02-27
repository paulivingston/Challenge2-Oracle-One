var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");	
var h = screen.height;
var w = screen.width;
brush.fillStyle = "lightgrey";
brush.fillRect(0,0,w,h); 
brush.lineWidth = 5;
brush.lineJoin = "round";
brush.lineCap = "round";

var word = localStorage.getItem("word").toUpperCase();
var wordArray = word.split("");
let wordDiv = document.getElementById("word-div");

for (let i=0 ; i<word.length ; i++) {
    var letterId = "letter"+i;
    const node = document.createElement("div");
    wordDiv.appendChild(node);
    const node2 = document.createElement("div");
    wordDiv.lastChild.appendChild(node2);
    wordDiv.lastChild.lastChild.setAttribute("id", letterId);
    wordDiv.lastChild.lastChild.setAttribute("class", "letter-div");
    const line = document.createElement("p");
    line.innerHTML = "_";
    wordDiv.lastChild.appendChild(line);
    wordDiv.lastChild.lastChild.setAttribute("class", "line");
} 

var errors = 0;
var letters = [];
var wrongLetters = [];
let wrongBox = document.getElementById('wrong');

window.addEventListener('keydown', (e) => {
    var letter = e.key.toUpperCase();
    if ((letter >= 'A' && letter <= 'Z') && (letter.length == 1)){
        var incorrect = true;
        var newLetter = true;
        var won = true;
        for (let x = 0 ; x < letters.length; x++) {
            if (letter == letters[x]) {
                newLetter = false;
                return;
            }
        }
        if (newLetter) {
            letters.push(letter);
            for (let j = 0 ; j < word.length ; j++) {
                if (letter == wordArray[j]) {
                    var correctLetter = document.getElementById("letter"+j);
                    const paraLetter = document.createElement("p");
                    paraLetter.innerHTML = wordArray[j];
                    correctLetter.appendChild(paraLetter);
                    incorrect = false;
                    wordArray[j] = "";
                }
                if(wordArray[j] != "") won=false;
            }
            if (incorrect) {
                errors = errors + 1;
                hangman();
                wrongLetters.push(letter);
                var wrongArray = wrongLetters.join(', ');
                wrongBox.innerHTML = wrongArray;
            }

            if(won) finishModal();
        }
    }
});

function hangman() {
    switch(errors){
        case 1:
            error1();
        break;
        case 2:
            error2();
        break;
        case 3:
            error3();
        break;
        case 4:
            error4();
        break;
        case 5:
            error5();
        break;
        case 6:
            error6();
        break;
        case 7:
            error7();
        break;
        default:
            error8();
        break;
    }
}

function error1() {
    brush.beginPath();
    brush.moveTo(w*0.05,h*0.95);
    brush.lineTo(w*0.2,h*0.85);
    brush.lineTo(w*0.35,h*0.95);
    brush.lineTo(w*0.05,h*0.95);
    brush.stroke();
}

function error2() {
    brush.beginPath();
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
    brush.beginPath();
    brush.moveTo(w*0.5,h*0.42);
    brush.lineTo(w*0.42,h*0.47);
    brush.stroke();
}

function error6() {
    brush.beginPath();
    brush.moveTo(w*0.5,h*0.42);
    brush.lineTo(w*0.58,h*0.47);
    brush.stroke();
}

function error7() {
    brush.beginPath();
    brush.moveTo(w*0.5,h*0.55);
    brush.lineTo(w*0.45,h*0.68);
    brush.stroke();
}

function error8() {
    brush.beginPath();
    brush.moveTo(w*0.5,h*0.55);
    brush.lineTo(w*0.55,h*0.68);
    brush.moveTo(w*0.48,h*0.25);
    brush.arc(w*0.48,h*0.26,h*0.01,-90,2*Math.PI);
    brush.moveTo(w*0.52,h*0.25);
    brush.arc(w*0.52,h*0.26,h*0.01,-90,2*Math.PI);
    brush.moveTo(w*0.487,h*0.31);
    brush.arc(w*0.5,h*0.31,h*0.02,160,119.5);
    brush.stroke();

    let finishText = document.getElementById('finish-text');
    finishText.innerHTML = "Ups... You lose...<br>The word was: <br>"+ word;

    finishModal();
}

let restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    window.location='index.html';
    word = "";
});





function finishModal() {
    var modal = document.getElementById("finish");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
    modal.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
  
}



// When the user clicks anywhere outside of the modal, close it
