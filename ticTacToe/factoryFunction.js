function Player(type) {
    type = "player" == type ? "player" : "CPU";

    const getTypePlayer = () => type;
    return { getTypePlayer };
}


export function TicTacToe(player1, player2) {
    player1 = [Player(player1).getTypePlayer(), "X"];
    player2 = [Player(player2).getTypePlayer(), "O"];
    let count = 0;
    let winner;
    let game = [["", "", ""], ["", "", ""], ["", "", ""]]

    let getGame = () => game;
    let getWinner = () => winner;

    let verifyGame = () => {
        let countFull = 0;
        game.forEach(row => {
            row.forEach(column => {
                column != ""? countFull++ : ()=>{};
            }
            )
        })
        return countFull == 9 ? true : false;
    }

    let CPU = (player) => {
        let x, y;
        do {
            if (verifyGame()) return "";
            x = parseInt(Math.random() * 3);
            y = parseInt(Math.random() * 3);
        } while (game[x][y] != "");
        if (!verifyGame()) {
            game[x][y] = player[1];
            count++;
        }
    };

    let player = (player, x, y) => {
        if (game[x][y] == "") { game[x][y] = player[1]; count++; }
    }

    let validity = () => {
        for (let test = 0; test < 3; test++) {
            if (game[test][0] == game[test][1] && game[test][0] == game[test][2] && game[test][0] != "") return player1[1] == game[test][0] ? winner = "player1" : winner = "Player2";
            if (game[0][test] == game[1][test] && game[0][test] == game[2][test] && game[0][test] != "") return player1[1] == game[0][test] ? winner = "player1" : winner = "Player2";
        }
        if (game[1][1] == game[0][0] && game[0][0] == game[2][2] && game[0][0] != "") return player1[1] == game[0][0] ? winner = "player1" : winner = "Player2";
        if (game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] != "") return player1[1] == game[0][2] ? winner = "player1" : winner = "Player2";
    }

    let play = (x, y) => {
        if (!verifyGame()) {
            if (count % 2 == 0 && winner == undefined) player1[0] == "player" ? player(player1, x, y) : CPU(player1);
            else if (count % 2 == 1 && winner == undefined) player2[0] == "player" ? player(player2, x, y) : CPU(player2);
            validity();
        }
    }

    return { getWinner, play, getGame, verifyGame };
}