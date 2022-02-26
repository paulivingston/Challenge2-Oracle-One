let start = document.getElementById('start-game');
start.addEventListener('click', startGame);


function startGame() {
    let word = document.getElementById("input-word").value;
    if (word.length == 0) return alert('Please type a word');
    localStorage.setItem("word", word);
    
    window.location = "hangman.html";
}