function startGame() {
    let word = document.getElementById("input-nueva-palabra").value;
    localStorage.setItem("word", word)
    
    window.location = "hangman.html";
}