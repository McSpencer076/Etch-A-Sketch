const sketchGrid = document.querySelector('#sketchGrid');
const gridButton = document.querySelector("#changeGrid");
const slider = document.querySelector('#slider');
const randomColorBtn = document.querySelector("#randomColorBtn")
const colorPicker = document.querySelector("#colorPicker")

let screenVal = document.querySelector('#gridValue');
let val = document.getElementById('slider').value;
screenVal.textContent = "Gridsize: " + val;

function createGrid() {
    resetGrid();
    let screenVal = document.querySelector('#gridValue');
    let val = document.getElementById('slider').value;
    sketchGrid.setAttribute("style", `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
    for (i = 1; i <= val * val; i++) {
        const divGrid = document.createElement("div");
        divGrid.classList.add("divGrid");
        divGrid.id = "divGrid";
        sketchGrid.appendChild(divGrid);
        divGrid.addEventListener("mouseover", function (divGrid) {
            divGrid.target.style.backgroundColor = "black";
        })
    }
}
function setBlackColor() {
    const divGrid = document.querySelectorAll("div.divGrid");
    divGrid.forEach(divGrid => {
        divGrid.addEventListener("mouseover", function (divGrid) {
            divGrid.target.style.backgroundColor = "black";
        })
    })
}

function setRandomColor() {
    const divGrid = document.querySelectorAll("div.divGrid");
    divGrid.forEach(divGrid => {
        divGrid.addEventListener("mouseover", function(divGrid) {
            divGrid.target.style.backgroundColor = randomColorValue();
        })
    })
}

function gridColorPicker(){
    const divGrid = document.querySelectorAll("div.divGrid");
    divGrid.forEach(divGrid => {
        divGrid.addEventListener("mouseover", function(divGrid) {
            divGrid.target.style.backgroundColor = hexToRGB();
        })
    })
}

function resetGrid() {
    const resetGrid = document.querySelectorAll(".divGrid")
    resetGrid.forEach(divGrid => {
        divGrid.remove();
    });
}

function randomColorValue() {
    function randomInteger(max) {
        return Math.floor(Math.random() * (max + 1));
    }
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let colorValue = `rgb(${r},${g},${b})`;
    return colorValue
}

function hexToRGB(){
    let colorHEX = document.getElementById("colorPicker").value;
        let r = parseInt(colorHEX.substring(1, 3), 16);
        let g = parseInt(colorHEX.substring(3, 5), 16);
        let b = parseInt(colorHEX.substring(5, 7), 16);
    let colorRGB = `rgb(${r},${g},${b})`
    return colorRGB;
}

sketchGrid.classList.add("sketchGrid");

slider.addEventListener("input", createGrid)
gridButton.addEventListener("click", setBlackColor);
randomColorBtn.addEventListener("click", setRandomColor);
colorPicker.addEventListener("change", gridColorPicker);

createGrid();