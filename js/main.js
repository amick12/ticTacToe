let rowIdArray = [];

const outerCont = document.createElement('div');
outerCont.id = 'outerCont';
outerCont.classList.add('container', 'border');

// outerCont.appendChild(row);
document.body.appendChild(outerCont);

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

//TODO: make a fucntion for column create - use one for loop

for (let i = 1; i <= 3; i++) {
    let column1 = new Column("col" + i, "col bg-primary ml-3 border bg-primary", rowIdArray[0])
    // console.log(column1);
    column1.create();
}

for (let i = 4; i <= 6; i++) {
    let column2 = new Column("col" + i, "col bg-primary ml-3 border", rowIdArray[1]);
    column2.create();
}

for (let i = 7; i <= 9; i++) {
    let column3 = new Column("col" + i, "col bg-primary ml-3 border", rowIdArray[2]);
    column3.create();

}

// function rowCol() {

//     let outerCont = document.createElement('div');
//     outerCont.id = 'outerCont';
//     outerCont.classList.add('container', 'border');

//     let row = document.createElement('div');
//     row.id = 'row';
//     row.className = 'row';
//     row.classList.add('mt-2', 'mb-2', 'mt-4');

//     outerCont.appendChild(row);
//     document.body.appendChild(outerCont);

//     document.getElementById('row').innerHTML = `<div id="row1col1" class="col bg-primary ml-3">row1col1</div> <div id="row12col2" class="col bg-dark">row1col2</div><div id="row1col3" class="col bg-warning mr-3">row1col3</div>`;

//     let rowTwo = document.createElement('div');
//     rowTwo.id = 'row2';
//     rowTwo.className = 'row';
//     rowTwo.classList.add('mt-4');

//     outerCont.appendChild(rowTwo);

//     document.getElementById('row2').innerHTML = `<div id="row1col1" class="col bg-dark ml-3">row1col1</div> <div id="row2col2" class="col bg-success">row2col2</div><div id="row1col3" class="col bg-primary mr-3">row1col3</div>`;

//     let rowThree = document.createElement('div');
//     rowThree.id = 'row3';
//     rowThree.className = 'row';
//     rowThree.classList.add('mt-4');

//     outerCont.appendChild(rowThree);

//     document.getElementById('row3').innerHTML = `<div id="row3col1" class="col bg-success ml-3">row3col1</div> <div id="row3col2" class="col bg-danger">row3col2</div><div id="row1col3" class="col bg-warning mr-3">row3col3</div>`;

//     let button = document.createElement('BUTTON');
//     button.id = 'btnId';
//     button.classList.add("btn", "btn-primary", "btn-lg", "btn-block", "mt-4", "mb-3");
//     button.innerText = 'Start Game';

//     outerCont.appendChild(button);
// }

// rowCol();

// function onClick() {

// }