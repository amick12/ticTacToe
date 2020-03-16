//set initial state turn & number of clicks to 0
let turn = 0;
let numOfClicks = 0;
let winner;

//initialize arrays for rowId's, columnId's, and clicked tiles
let rowIdArray = [];
let columnIdArray = [];
let clickedTilesArray = [];
let possibleWinsArray = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 5, 9],
    [3, 5, 7], [1, 4, 7],
    [2, 5, 8], [2, 6, 9]];

//create constants for innerText of #winner & #score
const WINNER_TEXT = document.getElementById('winner');
const SCORE_TEXT = document.getElementById('score');

/*create constants equal to HTML
        **Done**--need to assign classes to differentiate x's tiles & o's tiles*/

const PLAYER_1_HTML = '<h1 class="x text-center pt-4 mt-1 font-weight-bolder">X</h1>';
const PLAYER_2_HTML = '<h1 class="o text-center pt-4 mt-1 font-weight-bolder">O</h1>'

const CONTAINER = document.createElement('div');
CONTAINER.id = 'outerCont';
CONTAINER.classList.add('container');

document.body.appendChild(CONTAINER);

// function prototype for Row
class Row {
    constructor(id, classList) {
        this.id = id;
        this.classList = classList;
    }
    create() {
        let row = document.createElement('div');
        row.id = this.id;
        row.classList = this.classList;
        document.getElementById('outerCont').appendChild(row);
    }
}


// function prototype for Column
class Column {
    constructor(id, classList, rowId) {
        this.id = id;
        this.classList = classList;
        this.rowId = rowId;
    }
    create() {
        let column = document.createElement('div');
        column.id = this.id;
        column.classList = this.classList;
        column.location = this.location;
        column.rowId = this.rowId;
        document.getElementById(column.rowId).appendChild(column);
        /*
           **DONE**--Something needs to happen when a column is clicked
                   **DONE**--addEventListener 'click' to columns dynamically
                   **DONE**--create onclick function to handle post click logic
       */
        document.getElementById(column.id).addEventListener('click', gotClicked, { once: true });
        /*
        
        ***** create fx for column onclick <---> function gotClicked() below *****
     
                **DONE**-- check innerHTML for empty
                        **DONE**--whose turn is it?
                        **DONE**--display h1
                            **DONE**--  X or O based on whose turn in current state
                **DONE**--prevent reclick on same column
                        **DONE**--use addEL third parameter?
                            **DONE**--once (a boolean, initially false)
                //TODO:
                --  check to see if game has ended
                        --has someone won?
                **DONE**--has there been a draw?
                --  if no one has won and there is no draw:
                        --  add 1 to numberOfClicks
                        --  add 1 to turn
                    
        */
        function gotClicked(e) {
            let gotClickedCol = document.getElementById(this.id);
            if (gotClickedCol.innerHTML === '') {
                whoseTurnIsIt();
                gotClickedCol.innerHTML = turn;
                numOfClicks++;
                clickedTilesArray.push(this.id);
            }
        }
    }
}


//create function to check if the game has ended
// function hasGameEnded() {

// }

// create function to check if the game is a draw
function isDraw() {
    if (numOfClicks === 9) {
        gameOver;
    }
}
// create fx to decide whose turn it is @ 'click'
function whoseTurnIsIt() {
    if (numOfClicks % 2 !== 0) {
        return turn = PLAYER_1_HTML;
    } else {
        return turn = PLAYER_2_HTML;
    }
}

//create function to determine if win
// function winnerWinner() {
//     if (possibleWinsArray)
// }

//create function for gameOver logic
// function gameOver() {

// }

//function to create row --> for loop for multiple rows

function rowCreate() {
    for (let i = 1; i <= 3; i++) {
        let row = new Row("row" + i, "row mr-1 my-auto");
        row.create();
        rowIdArray.push('row' + i);
    }
    // console.log(rowIdArray);

}
rowCreate();



//TODO: make a function for column create - use one for loop

//function to create row --> for loop for multiple rows
function init() {

    rowCreate();

    for (let i = 1; i <= 3; i++) {
        let column1 = new Column("col" + i, "col bg-primary ml-3 border bg-primary", rowIdArray[0])

        // console.log(column1);
        column1.create();
        columnIdArray.push('col' + i);

    }

    //TODO: make a function for column create - use one for loop

    for (let i = 4; i <= 6; i++) {
        let column2 = new Column("col" + i, "col bg-primary ml-3 border", rowIdArray[1]);
        column2.create();
        columnIdArray.push('col' + i);

    }

    for (let i = 7; i <= 9; i++) {
        let column3 = new Column("col" + i, "col bg-primary ml-3 border", rowIdArray[2]);
        column3.create();
        columnIdArray.push('col' + i);
    }
}

init();