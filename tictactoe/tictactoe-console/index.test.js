const {restartGame, selector, currentMove, checkGameOver, checkWinner, checkDraw, moveProcess, printBoard} = require('./tictactoe');

describe('render board', () => {
    let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    // let gameBoard = [...board];
    it('has gameboard empty cells', () => {
        let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        expect(printBoard(gameBoard)).toBe(" | | \n | | \n | |");
    });
});
