function drawGrid(gridLength = 16) {
    
    const container = document.createElement('div');
    container.classList.add('container');
    container.style['grid-template-columns'] = `repeat(${gridLength}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${gridLength}, 1fr)`;
    /*
    for (let i = 0; i < 16; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        rowDiv.classList.add('flex');
        rowDiv.id = `row-div-${i}`;
        for (let j = 0; j < 16; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('square');
            columnDiv.classList.add(`column-div`);
            columnDiv.id = `column-div-${j}`;
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv)
    }
    */



    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }



    const body = document.querySelector('body')
    body.appendChild(container);
}



function addPaintingEvent() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (event) => {
            event.target.classList.add('painted');
        });
    });
}



const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', (e) => {
    // const squares = document.querySelectorAll('.square');
    // squares.forEach((square) => {
    //     square.classList.remove('painted');
    // });
    loadGrid();
});



function loadGrid (){
    removeGrid();
    let gridLength = prompt();
    while (gridLength < 0 || gridLength > 100){
        gridLength = prompt();
    }
    drawGrid(gridLength);
    addPaintingEvent();
}

function removeGrid(){
    document.body.removeChild(document.querySelector('.container'));
}

drawGrid();
addPaintingEvent();
