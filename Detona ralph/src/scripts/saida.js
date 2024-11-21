document.addEventListener("DOMContentLoaded", function () {
    const backToGameButton = document.getElementById("back-to-game");

        backToGameButton.addEventListener("click", function () {
            console.log("Voltando ao jogo...");
            window.location.assign("game.html");
        });
    });