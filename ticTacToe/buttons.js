import { TicTacToe } from "./factoryFunction.js";

export const buttons = () => {

    const buttonPlayer1 = document.querySelectorAll('[data-player1]');
    const buttonPlayer2 = document.querySelectorAll('[data-player2]');
    const buttonStart = document.querySelector('[data-start]');
    const buttonInitialize = document.querySelector('[data-init]');
    const buttonRestart = document.querySelector('[data-restart]');
    let game;
    let gameDoc = document.querySelector(".game");
    let player1, player2;

    let updateScreen = (game) => {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                game == undefined? document.querySelector(`.gp__item--${x}${y}`).innerHTML = "": document.querySelector(`.gp__item--${x}${y}`).innerHTML = game.getGame()[x][y];
            }
        }
    }

    buttonInitialize.addEventListener("click", () => {
        gameDoc.classList.remove("init");
        gameDoc.classList.add("start");
    })

    buttonPlayer1.forEach(button => {
        button.addEventListener("click", () => {
            buttonPlayer1[0] != button ? buttonPlayer1[0].style.background = "#fff" : button.style.background = "#66ff55";
            buttonPlayer1[1] != button ? buttonPlayer1[1].style.background = "#fff" : button.style.background = "#66ff55";
            player1 = button.dataset.player1;
        })
    })

    buttonPlayer2.forEach(button => {
        button.addEventListener("click", () => {
            buttonPlayer2[0] != button ? buttonPlayer2[0].style.background = "#fff" : button.style.background = "#66ff55";
            buttonPlayer2[1] != button ? buttonPlayer2[1].style.background = "#fff" : button.style.background = "#66ff55";
            player2 = button.dataset.player2;
        })
    })

    buttonStart.addEventListener("click", () => {
        if (player1 != undefined && player2 != undefined) {
            gameDoc.classList.remove("start");
            gameDoc.classList.add("playing");
            game = TicTacToe(player1, player2);
        }

    })

    buttonRestart.onclick = () => {
        gameDoc.classList.remove("winner");
        gameDoc.classList.remove("playing");
        gameDoc.classList.add("start");
        player1 = undefined;
        player2 = undefined;
        game = undefined;
        let buttonStart = document.querySelectorAll(".game.start .gs__check")
        buttonStart.forEach(button => button.style.background = "#fff" )
        updateScreen(game);
    }

    document.querySelector(".gamePlaying").onclick = (e) => {
        if (game.getWinner() == undefined) {
            let x, y;
            if (e.offsetX < 67 && e.offsetY < 64) { x = 0, y = 0; }
            else if (e.offsetX < 134 && e.offsetY < 64) { x = 0, y = 1; }
            else if (e.offsetX < 201 && e.offsetY < 64) { x = 0, y = 2; }
            else if (e.offsetX < 67 && e.offsetY < 134) { x = 1, y = 0; }
            else if (e.offsetX < 134 && e.offsetY < 134) { x = 1, y = 1; }
            else if (e.offsetX < 201 && e.offsetY < 134) { x = 1, y = 2; }
            else if (e.offsetX < 67 && e.offsetY < 201) { x = 2, y = 0; }
            else if (e.offsetX < 134 && e.offsetY < 201) { x = 2, y = 1; }
            else if (e.offsetX < 201 && e.offsetY < 201) { x = 2, y = 2; }

            game.play(x, y)
            updateScreen(game);
        }
        if (game.getWinner() != undefined) {
            document.querySelector(".w__title").innerHTML = `Congrats! ${game.getWinner()} won!`
            gameDoc.classList.add("winner")
        }
        if(game.verifyGame() && game.getWinner() == undefined){
            document.querySelector(".w__title").innerHTML = `Congrats! It's a draw!`
            gameDoc.classList.add("winner")
        }
    }
}
