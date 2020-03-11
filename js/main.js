//set initial state turn & number of clicks to 0
let turn = 0;
let numOfClicks = 0;

let rowIdArray = [];
let columnIdArray = [];

const CONTAINER = document.createElement('div');
CONTAINER.id = 'outerCont';
CONTAINER.classList.add('container');

document.body.appendChild(CONTAINER);

// function prototype for Row
function Row(id, classList) {
    this.id = id;
    this.classList = classList;
}

Row.prototype.create = function () {
    let row = document.createElement('div');
    row.id = this.id;
    row.classList = this.classList;

    document.getElementById('outerCont').appendChild(row);
}

// function prototype for Column
function Column(id, classList, rowId) {
    this.id = id;
    this.classList = classList;
    this.rowId = rowId;
}

Column.prototype.create = function () {
    let column = document.createElement('div');
    column.id = this.id;
    column.classList = this.classList;
    column.location = this.location;
    column.rowId = this.rowId;

    document.getElementById(column.rowId).appendChild(column);
    /*
       --Something needs to happen when a column is clicked
               --addEventListener 'click' to columns dynamically
               --create onclick function to handle post click logic   
   */

    document.getElementById(column.id).addEventListener('click', gotClicked, { once: true });
    /*  
    
    ***** create fx for column onclick <---> function gotClicked() below *****
 
            -- check innerHTML for empty
                    --whose turn is it? 
                    --display h1 
                        --  X or O based on whose turn in current state
            --  prevent reclick on same column
                    --use addEL third parameter? 
                        --once (a boolean, initially false) 
            //TODO:
            --  check to see if game has ended
                    --has someone won?
                    --has there been a draw?
            --  if no one has one and there is no draw:
                    --  add 1 to numberOfClicks
                    --  add 1 to turn
                
    */
    function gotClicked(e) {
        let gotClickedCol = document.getElementById(e.target.id);

        if (gotClickedCol.innerHTML === '') {
            gotClickedCol.innerHTML = '<h1 class="text-center pt-4 mt-1 font-weight-bolder">X</h1>';
        }
    }
}

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

for (let i = 1; i <= 3; i++) {
    let column1 = new Column("col" + i, "col bg-primary ml-3 border bg-primary", rowIdArray[0]);
    // console.log(column1);
    column1.create();
    columnIdArray.push('col' + i);
}

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