
document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("play-button");
    const exitButton = document.getElementById("exit-button");
    const toggleSoundButton = document.getElementById("toggle-button");

    startButton.addEventListener("click", startGame);
    exitButton.addEventListener("click", exitGame);

    const menuMusic = new Audio("./src/audio/inicio.mp3");
    menuMusic.volume = 0.1;
    menuMusic.loop = true;
    
    menuMusic.play().catch((error) => {
        console.error("Erro ao reproduzir o áudio:", error);
    });

    function startGame() {
        menuMusic.pause();
        menuMusic.currentTime = 0;
        window.location.href = "index.html";
    }


    function exitGame() {
        menuMusic.pause();
        menuMusic.currentTime = 0;
        window.location.href = "saida.html";
    }
});

const toggleSoundButton = document.getElementById("toggle-button");
let isPaused = true;

toggleSoundButton.addEventListener("click", () => {
    if (isPaused) {
        menuMusic.pause();
        toggleButton.textContent = "🔇 Som: Desligado";
    } else {
        menuMusic.play().catch((error) => {
            console.error("Erro ao pausar o áudio:", error);
        });
        toggleSoundButton.textContent = "🔈 Som: Ligado";
    }
    isPlayed = !isPaused;
});

