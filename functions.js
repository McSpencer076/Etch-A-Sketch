const container = document.querySelector('#container');
const gridButton = document.querySelector("#changeGrid");
const slider = document.querySelector('#slider')
const randomColorBtn = document.querySelector("#randomColorBtn");

let screenVal = document.querySelector('.value');
let val = document.getElementById('slider').value;
let randomColor = randomColorValue();
let grid = createGrid();

screenVal.textContent = val;

function createGrid(){
    resetGrid();
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    container.setAttribute("style", `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
    for (i=1; i<= val*val; i++){
            const divGrid = document.createElement("div");
            divGrid.classList.add("divGrid");
            divGrid.id = "divGrid";
            container.appendChild(divGrid);
            divGrid.addEventListener("mouseover", function(divGrid){
                divGrid.target.style.backgroundColor = "black";
            })
    }
}

function createGridRandomColor(){
    resetGrid();
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    container.setAttribute("style", `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
    for (i=1; i<= val*val; i++){
            const divGrid = document.createElement("div");
            divGrid.classList.add("divGrid");
            divGrid.id = "divGrid";
            container.appendChild(divGrid);
            divGrid.addEventListener("mouseover", function(divGrid){
                divGrid.target.style.backgroundColor = randomColorValue();
            })
    }
}

function resetGrid(){
    const resetGrid = document.querySelectorAll(".divGrid")
    resetGrid.forEach(divGrid => {
        divGrid.remove();
    });
}

function randomColorValue(){
    function randomInteger(max){
        return Math.floor(Math.random()*(max + 1));
    }
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let colorValues = "rgb(" + r + ', ' + g + ', ' + b + ")"
    return colorValues
}

container.classList.add("container");

gridButton.addEventListener("click", createGrid);
randomColorBtn.addEventListener("click", createGridRandomColor);

slider.addEventListener("input", function(){
    resetGrid();
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
})

createGrid();