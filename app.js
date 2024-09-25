let selectedGrid = 0;

function generateGridTable(gridSize) {
  const sketchBox = document.querySelector(".sketch-box");
  sketchBox.innerHTML = "";

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("td");

      cell.style.width = `${500 / gridSize}px`;
      cell.style.height = `${500 / gridSize}px`;

      cell.style.backgroundColor = "#fff";
      cell.addEventListener("mousedown", function (event) {
        if (event.button === 0) {
          isPainting = true;
          const selectedColor = document.getElementById("color-selector").value;
          cell.style.backgroundColor = selectedColor;
        }
      });

      cell.addEventListener("mouseover", function () {
        if (isPainting) {
          const selectedColor = document.getElementById("color-selector").value;
          cell.style.backgroundColor = selectedColor;
        }
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  sketchBox.appendChild(table);
  document.addEventListener("mouseup", function () {
    isPainting = false;
  });
}

const gridOptions = document.querySelectorAll(".grid-option");
gridOptions.forEach((option) => {
  option.addEventListener("click", function () {
    selectedGrid = parseInt(this.textContent);
    document.getElementById("grid-size").textContent = selectedGrid;
    generateGridTable(selectedGrid);
  });
});

document.getElementById("reset-btn").addEventListener("click", function () {
  const sketchBox = document.querySelector(".sketch-box");
  sketchBox.innerHTML = "";
  document.getElementById("grid-size").textContent = "0";
});
