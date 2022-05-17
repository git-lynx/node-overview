const net = require('net')
let clients = [];
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function printBoard(gameBoard) {
    let fields = ` ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]} 
 --+---+--
 ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
 --+---+--
 ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}\n`;
    return fields
}

function moveProcess(gameBoard, currentPl, turn) {
    return gameBoard[turn - 1] = currentPl;
}

function getWinner(gameBoard, currentPl) {
    if ((gameBoard[0] === currentPl && gameBoard[1] === currentPl && gameBoard[2] === currentPl) ||
        (gameBoard[3] === currentPl && gameBoard[4] === currentPl && gameBoard[5] === currentPl) ||
        (gameBoard[6] === currentPl && gameBoard[7] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[0] === currentPl && gameBoard[3] === currentPl && gameBoard[6] === currentPl) ||
        (gameBoard[1] === currentPl && gameBoard[4] === currentPl && gameBoard[7] === currentPl) ||
        (gameBoard[2] === currentPl && gameBoard[5] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[0] === currentPl && gameBoard[4] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[6] === currentPl && gameBoard[4] === currentPl && gameBoard[2] === currentPl)) {
        return true
    } else {
        return false
    }
}

function selector(currentPl) {
    return currentPl !== "X" ? "X" : "O";
}

function gameProccess(playerX, playerO, currentPl, turn, gameBoard, moves) {
    if (!(turn == undefined, turn < 1, turn > 9, isNaN(turn))) {
        let cell = gameBoard[turn - 1];
        if (cell !== "X" && cell !== "O") {
            if (cell === " ") {
                moveProcess(gameBoard, currentPl, turn, cell);
                playerX.write(printBoard(gameBoard))
                playerO.write(printBoard(gameBoard))
                moves++
                if (getWinner(gameBoard, currentPl) || moves >= 9) {
                    if (getWinner(gameBoard, currentPl)) {
                        playerX.write(`${currentPl} is WINNER\n`)
                        playerO.write(`${currentPl} is WINNER\n`)
                    } else if (moves === 9) {
                        playerX.write(`DRAW\n`)
                        playerO.write(`DRAW\n`)
                    }
                }
                selector(currentPl)
            } else {
                playerX.write(`Oooops\n`)
            }
        } else {
            playerX.write(`Cell is not empty. Try again\n`)
        }
    } else {
        playerX.write(`Enter valid number from (1-9)\n`);
    }
}
const server = net.createServer(function (socket) {
    socket.write("Wellcome\n");
    const port = socket.remotePort;
    const ip = socket.remoteAddress

    clients.push(socket);
    socket.pipe(process.stdout);

    console.log("Connected Port:", port);
    console.log("Client IP:", ip);

    if (clients.length <= 1) {
        socket.write(`The game will start when second player is connected\n`);

    }
    if (clients.length === 2) {

        let moves = 0;
        playerX = clients[0];
        playerO = clients[1];
        let gameBoard = [...board];
        playerX.write(printBoard(gameBoard))
        playerO.write(printBoard(gameBoard))
        clients.forEach((clients) => {
            clients.write(`Game is start\n`);
        });

        playerX.on("data", (message) => {
            gameProccess(playerX, playerO, "X", Number(message), gameBoard, moves);

        });

        playerO.on("data", (message) => {
            gameProccess(playerO, playerX, "O", Number(message), gameBoard, moves);
        });
    }

    socket.on("close", () => {
        clients.splice(clients.indexOf(socket), 1)
        console.log("closed ", port);
    });
});


server.maxConnections = 2;
server.listen(3000, "127.0.0.1");
import net from 'net';
let clients = [];
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let moves = 0;
let currentPl = "X"
const main = () => {
    let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    moves = 0;
    currentPl = "X"
    clients.forEach(player => {
        clients.socket.write('\n')
        clients.socket.write('NEW GAME')
    });
    if (clients == 2) printBoard(gameBoard);
};

function printBoard(cells) {
    let board = '';
    for (let i = 0; i < cells.length; i++) {
        if (i === 0) {
            board += '  ' + cells[i];
        } else if (i % 3 === 0) {
            board += '\n\ ---+---+--- \n\  ' + cells[i];
        } else {
            board += ' | ' + cells[i];
        }
    }
    clients.forEach(player => {
        clients.socket.write('\n')
        clients.socket.write(board)
        clients.socket.write('\n')
    })
}

function moveProcess(X, O, currentPl, moves, turn, gameBoard) {
    if (currentMove(gameBoard, turn)) {
        if (gameBoard[turn - 1] === ' ') {
            gameBoard[turn - 1] = currentPl;
            moves++;
            printBoard(gameBoard)
            if (checkGameOver(gameBoard, currentPl, moves) || checkDraw(moves)) {
                if (client.socket === currentPl) {
                    clients.forEach(client => {
                        if (client.socket === currentPl) {
                            client.socket.write('You move');
                        }
                    });
                } else {
                    clients.forEach(client => {
                        if (client.socket === currentPl) {
                            client.socket.write('YOU WIN')
                        } else {
                            client.socket.write('YOU LOSE');
                        }
                    })
                    main();
                }
            }
            selector(currentPl);
        }
    }
};

function checkDraw(moves) {
    if (moves >= 9) {
        console.log('Game over');
        restartGame()
    }
}

function checkWinner(gameBoard, currentPl) {
    if ((gameBoard[0] === currentPl && gameBoard[1] === currentPl && gameBoard[2] === currentPl) ||
        (gameBoard[3] === currentPl && gameBoard[4] === currentPl && gameBoard[5] === currentPl) ||
        (gameBoard[6] === currentPl && gameBoard[7] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[0] === currentPl && gameBoard[3] === currentPl && gameBoard[6] === currentPl) ||
        (gameBoard[1] === currentPl && gameBoard[4] === currentPl && gameBoard[7] === currentPl) ||
        (gameBoard[2] === currentPl && gameBoard[5] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[0] === currentPl && gameBoard[4] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[6] === currentPl && gameBoard[4] === currentPl && gameBoard[2] === currentPl)) {
        return true
    } else {
        return false
    }
}

function checkGameOver(gameBoard, currentPl, moves) {
    checkDraw(moves);
    checkWinner(gameBoard, currentPl)

}

function currentMove(gameBoard, turn) {
    if (isNaN(turn)) {
        console.log('oops')
    } else if (turn > 9 || turn < 1) {
        console.log('Your move needs to be a number from 1 to 9.');
    } else if (isNaN(gameBoard[turn - 1])) {
        console.log('Cell ' + turn + ' has already been taken. Enter empty cell from (1-9)');
    } else {
        return true;
    }
}

function selector(currentPl) {
    return currentPl !== "X" ? "X" : "0";
}
const server = net.createServer(function (socket) {
    clients.push(socket);
    const port = socket.remotePort;
    const ip = socket.remoteAddress;
    console.log(`Player ${ip}:${port} is connnected`);
    let {
        X,
        O
    } = clients;
    if (clients.length < 2) {
        socket.write("waiting Player #2\n");
    } else if (clients.length === 2) {
        main();
        clients.forEach((clients) => {
            clients.write(' START  GAME!\nPREPARE TO BATTLE\'');
        });

        X.on("data", (message) => {
            moveProcess(X, O, "X", Number(message), moves, gameBoard);
        });
        O.on("data", (message) => {
            moveProcess(O, X, "0", Number(message));
        });
    }
    socket.on("close", () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log("closed ", port);
    });
});

server.maxConnections = 2;
server.listen(1337, "127.0.0.1");

//
// function restartGame() {
// 	let restart = readline.question(`You like play again - (y/n) > `);
// 	console.log(restart);
// 	if ((restart) === 'n') {
// 		process.exit();
// 	} else if ((restart) === 'y') {
// 		main();
// 	} else {
// 		console.log('That was not a valid answer. Please only use Y (for yes) or N (for no)');
// 		restartGame();
// 	}
// }
//
// main();