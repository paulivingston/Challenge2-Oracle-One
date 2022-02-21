let startButton = document.getElementById("iniciar-juego");
startButton.onclick = startGame;
var errors = 0;

function startGame() {
    let word = document.getElementById("input-nueva-palabra").value;
    document.getElementById("input-nueva-palabra").value = "";
    wordArray = word.split("");
    let letterDiv = document.getElementById("letter-div");
    let lineDiv = document.getElementById("line-div");
    

    for (let i=0 ; i<word.length ; i++) {
        var letterId = "letter"+i;
        const node = document.createElement("div");
        letterDiv.appendChild(node);
        letterDiv.lastChild.setAttribute("id", letterId);
        const node2 = document.createElement("div");
        lineDiv.appendChild(node2);
        const line = document.createElement("p");
        line.innerHTML = "_";
        lineDiv.lastChild.appendChild(line);
    } 

    window.addEventListener('keydown', (e) => {
        var incorrect = true;
        for (let j = 0 ; j < word.length ; j++) {
            if (e.key == wordArray[j]) {
                var correctLetter = document.getElementById("letter"+j);
                const paraLetter = document.createElement("p");
                paraLetter.innerHTML = wordArray[j];
                correctLetter.appendChild(paraLetter);
                incorrect = false;
            }
        }
        if(incorrect) {
            errors = errors + 1;
            hangman();
        }
    });

}

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
        case 8:
            error8();
        break;
    }
}