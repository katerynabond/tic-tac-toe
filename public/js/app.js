/*jshint esversion: 6*/
const App = {
  rootElement: '#app',
  selectedType: 'X',
  numRows: 3,
  numCols: 3,
  cellWidth: 25,
  cellHeight: 25,
  grid: [],
  start: function(){
    this.cacheDOM();
    this.makeGrid();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.xButton = this.root.querySelector('.tic-tac-toe-X');
    this.oButton = this.root.querySelector('.tic-tac-toe-O');
    this.resetButton = this.root.querySelector('.reset');
    this.gridOutput = this.root.querySelector('.grid-output');
  },

  makeGrid: function(){
    this.grid = new Array(this.numRows);
    for(let rowIndex = 0; rowIndex < this.numRows; rowIndex+=1){
      this.grid[rowIndex] = new Array(this.numCols);
      for(let colIndex=0; colIndex < this.numCols; colIndex+=1){
        this.grid[rowIndex][colIndex] = new Cell(this.cellWidth, this.cellHeight, this.selectedColor);
      }
    }
    console.log(this.grid);
  },

  bindEvents: function (){
    this.xButton.addEventListener('click', () => this.setX());
    this.oButton.addEventListener('click', () => this.setO());
    this.resetButton.addEventListener('click', () => this.resetGrid());
  },

  setX: function(){
    this.selectedType = 'X';
  },

  setO: function(){
    this.selectedType = 'O';
  },

  resetGrid: function(){
    console.log(this.selectedType);
    this.selectedType = '';
    this.makeGrid();
    this.render();
  },

  changeType: function(rowIndex, colIndex){
    const cell = this.grid[rowIndex][colIndex];
    cell.type = this.selectedType;
    console.log(cell.selectedCellType);
    this.render();
  },

  render: function(){
    this.gridOutput.innerHTML = '';
    this.grid.forEach((row, rowIndex) =>{
      const rowContainer = document.createElement('div');

      rowContainer.style.height = `${this.cellHeight}px`;

      row.forEach((cell, colIndex) =>{
        const element = cell.toHtml();
        element.addEventListener('click', () => this.changeType(rowIndex,colIndex));
        rowContainer.appendChild(element);
      });
      this.gridOutput.appendChild(rowContainer);
    });
  }
};

App.start();
