function createGrid() {
    var conatiner = document.getElementById("grid-container");

    for (var i = 0; i < 81; i++) {
        var box = document.createElement("div");
        box.classList.add("grid-box");
        box.setAttribute("id", "cell_" + i);
        box.innerHTML = "1";
        box.onclick = function () {
            cellClicked(this.id);
        }

        if (i % 3 == 2 && i % 9 != 8)
            box.classList.add("grid-cell-right-border");
        if (parseInt(i / 9) == 2 || parseInt(i / 9) == 5)
            box.classList.add("grid-cell-bottom-border");

        conatiner.appendChild(box);
    }
}

function cellClicked(cellId) {
    var allCells = document.getElementsByClassName("grid-box");

    let id = parseInt(cellId.split("_")[1]);
    let y = id % 9;
    let x = (id - y) / 9;
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].classList.remove("selected-cell");
        allCells[i].classList.remove("possible-cell");

        if(i%9==y || parseInt(i / 9) ==x)   
            allCells[i].classList.add("possible-cell");

    }



    var cell = document.getElementById(cellId);
    cell.classList.add("selected-cell");
    cell.classList.remove("possible-cell");


}