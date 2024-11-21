document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("play-button");
    const playButton = document.getElementById("play-button");
    const exitButton = document.getElementById("exit-button");

    startButton.addEventListener("click", function () {
        playScreen.style.display = "none";
        playGame();
    });       

    exitButton.addEventListener("click", function () {
        window.close(); // volte e jogue crlh criar outra html evoltar para a tela do jogo
    });
    
function playGame() {
    window.location.href = "./game.html";
    }       
});
    

