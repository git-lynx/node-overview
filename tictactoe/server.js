#!/usr/bin/env node

const net = require('net');

function createGameBoard() {
    return [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
}

function printGameBoard(board) {
    return ` ${board[0]} | ${board[1]} | ${board[2]} 
 --+---+--
 ${board[3]} | ${board[4]} | ${board[5]}
 --+---+--
 ${board[6]} | ${board[7]} | ${board[8]}`;
}

function selector(currentPl) {
    return current = currentPl === "X" ? "X" : "0";
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



function isCurrentValue(turn) {
    if (isNaN(turn) || turn > 9 || turn < 1 || turn === undefined || turn === null) {
        return false
    }
    return true
}

function moveProcess(gameBoard, currentPl, turn, cell) {
    if (cell === " ") {
        let board = gameBoard[turn - 1] = currentPl;
        return board
    }
}

function gameProccess(pl1, pl2, currentPl, turn) {
    let gameBoard = [...board];
    currentPl.write(printBoard(gameBoard))
    pl2.write(printBoard(gameBoard))
}
// let result = [];
// for(let i = 0; i < board.length; i++){
//     if ( board[i] % 3 === 0){
//         result.push()
//     }
//     result.push(board[i].join('|'))
// }
let clients = [];
const gameBoard = createGameBoard();
const port = socket.remotePort;
const ip = socket.remoteAddress
const server = net.createServer((socket) => {
    console.log(`Player: ${ip}:${port} is connected`);
    clients.push(socket);
    socket.write('Welcome! to TicTacToe\n');
    if (clients.length <= 2) {
        playerX = clients[0];
        socket.on('data', (message) => {
            let turn = message;
            if (clients.length === 2) {
                playerO = clients[1];
                clients.forEach(playerX => {
                    playerX.write(printGameBoard(gameBoard));
                    if (playerX !== socket) {
                        playerX.write(`Твой черед\n`);
                        playerO.write(`А теперь подожди
						 думает что и куда\n`);
                    }
                })
            } else {
                socket.write("Please, wait a second player")
            }
        });
        socket.on('close', () => {
            clients.splice(clients.indexOf(socket), 1)
            console.log('Игрок покинул нас...', socket.remoteAddress + ':' + socket.remotePort);
        })
    } else {
        socket.write('Походу занято, сорян\n');
        socket.destroy();
    }
});

server.maxConnections = 2;
server.listen(1337, "127.0.0.1");