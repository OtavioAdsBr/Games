const state = {
    view: {
        square: document.querySelectorAll(".square"),
        timeLeft: document.querySelector("#timer-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timeId: null,
        countDownTimeId: null,
        gameVelocity: 600,
        hitPosition: null,
        result: 0,
        curreTime: 4,
        bgMusic: null,
    },
};

function playBackgroundSound() {
    const bgMusic = new Audio("./src/audio/fundo.mp3");
    bgMusic.volume = 0.1;
    bgMusic.loop = true;
    bgMusic.play().catch((error) => {
        console.error("Erro em reproduzir a música de fundo:", error);
    });
    state.values.bgMusic = bgMusic;
}

function countDown() {
    state.values.curreTime--;
    state.view.timeLeft.textContent = FormatTime(state.values.curreTime);

    if (state.values.curreTime <= 0) {
        clearInterval(state.values.timeId);
        clearInterval(state.values.countDownTimeId);
        showGameOver();
    }
}

function FormatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function playSound() {
    const audioPath = `./src/audio/hit.m4a`;
    const audio = new Audio(audioPath);
    audio.volume = 0.1;
    audio.play().catch((error) => {
        console.error("Erro ao reproduzir o áudio:", error);
    });
}

function randomSquare() {
    state.view.square.forEach((square) => {
        square.classList.remove("enemy");
    });

    const randomNumber = Math.floor(Math.random() * state.view.square.length);
    const randomSquare = state.view.square[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.square.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
        });
    });
}

function showGameOver() {
    if (state.values.bgMusic) {
        state.values.bgMusic.pause();
        state.values.bgMusic.currentTime = 0;
    }

    const gameOverSound = new Audio("./src/audio/gameover.mp3");
    gameOverSound.play().catch((error) => {
        console.error("Erro ao reproduzir o áudio do game over", error);
    });
        document.querySelector(".container").style.display = "none";

    
        const gameOverPanel = document.createElement("div");
        gameOverPanel.classList.add("game-over-panel");

        gameOverPanel.innerHTML = `
        <h1>Game Over!</h1>
        <h2>Sua pontuação: <strong>${state.values.result}</strong></h2>
        <button id="back-to-menu">Voltar ao Início</button>
    `;

        document.body.appendChild(gameOverPanel);

        document.getElementById("back-to-menu").addEventListener("click", () => {
            window.location.assign("game.html");
        });
    }
function initialize() {
            playBackgroundSound();

            state.view.timeLeft.textContent = FormatTime(state.values.curreTime);
            state.view.score.textContent = state.values.result;

            addListenerHitBox();
            state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
            state.values.countDownTimeId = setInterval(countDown, 1000);
        }

initialize();

