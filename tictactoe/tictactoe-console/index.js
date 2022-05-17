const readline = require('readline-sync');
const main = () => {
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let gameBoard = [...board];
    let currentPl = "X";
    let moves = 0;
    console.clear();
    console.log(' START  GAME!\n');
    printBoard(gameBoard)
    console.log('\nPREPARE TO BATTLE');

    moveProcess(gameBoard, currentPl, moves)

};

function printBoard(cells) {
    let board = ''

    for (let i = 0; i < cells.length; i++) {
        if (i === 0) {
            board += '  ' + cells[i];
        } else if (i % 3 === 0) {
            board += '\n\ ---+---+--- \n\  ' + cells[i];
        } else {
            board += ' | ' + cells[i];
        }
    }
    console.log(board)
}

function moveProcess(gameBoard, currentPl, moves) {

    let turn = readline.question(`\nPlayer ${currentPl}'s turn > `);
    if (currentMove(gameBoard, turn)) {

        gameBoard[turn - 1] = currentPl;
        moves++


        console.clear();
        console.log('INPUT NUMBER OF EMPTY CELL WITHING THE BOARD  !\n');
        console.log('AND PRESS ENTER\n');


        printBoard(gameBoard);
        checkGameOver(gameBoard, currentPl, moves);


        currentPl = selector(currentPl);

        moveProcess(gameBoard, currentPl, moves)
    } else {

        moveProcess(gameBoard, currentPl, moves)
    }
}

function checkDraw(moves) {
    if (moves >= 9) {
        console.log('Game over')
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

function restartGame() {
    let restart = readline.question(`You like play again - (y/n) > `);
    console.log(restart);
    if ((restart) === 'n') {
        process.exit();
    } else if ((restart) === 'y') {
        main();
    } else {
        console.log('That was not a valid answer. Please only use Y (for yes) or N (for no)');
        restartGame();
    }
}

main();





// while (true) {
//     let turn = readline.question(`\n${currentPl}'s move > `);
//     if (turn > 9 || turn < 1) {
//         console.log('You must entered empty cell number from (1-9) area')
//         continue;
//     }

//     let cell = gameBoard[turn - 1];
//     if (cell !== "X" && cell !== "O") {
//         if (cell === " ") {
//             console.clear();
//             moveProcess(gameBoard, currentPl, turn);
//             console.log(printBoard(gameBoard));
//             moves++;
//         } else {
//             console.log("Cell is busy!");
//             continue;
//         }
//     } else {
//         console.log("Cell is not empty!\nPlease enter a valid number.");
//         continue;
//     }
//     if (checkWinner(gameBoard, currentPl) || moves > 9) {
//         if (checkWinner(gameBoard, currentPl)) {
//             console.log(`${currentPl} is win this game`)
//         }else if (moves > 9) {
//             console.log(`DRAW!`);
//         }
//         let restart = readline.question(`Enter "y" -  if you want to restart > `);
//         if (restart === 'y') {
//             main()
//         } else {
//             break;
//         }
//     }

//     currentPl = switchPlayer(currentPl);

// }