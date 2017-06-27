/*jshint esversion: 6*/
const App = {
  rootElement: '#app',
  selectedType: 'X',
  winnerColor: 'white',
  numRows: 3,
  numCols: 3,
  cellWidth: 100,
  cellHeight: 100,
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
    this.checkRowsWinner();
    this.checkColsWinner();
    this.checkMainDiagonalWinner();
  //  this.checkDiagonalWinner();
    this.render();
  },

  checkRowsWinner: function() {
    for(let rowIndex = 0; rowIndex < this.numRows; rowIndex+=1){
      if (this.grid[rowIndex][0].type && this.grid[rowIndex][0].type === this.grid[rowIndex][1].type && this.grid[rowIndex][0].type === this.grid[rowIndex][2].type)
      {
        this.grid[rowIndex][0].setWinnerColor('#9AA4AF');
        this.grid[rowIndex][1].setWinnerColor('#9AA4AF');
        this.grid[rowIndex][2].setWinnerColor('#9AA4AF');
        console.log('Winner rows!');
        return true;
      }
    }
    return false;
  },

  checkColsWinner: function(){
    for(let colIndex = 0; colIndex < this.numCols; colIndex+=1){
      if (this.grid[0][colIndex].type && this.grid[0][colIndex].type === this.grid[1][colIndex].type && this.grid[0][colIndex].type === this.grid[2][colIndex].type)
      {
        this.grid[0][colIndex].setWinnerColor('#9AA4AF');
        this.grid[1][colIndex].setWinnerColor('#9AA4AF');
        this.grid[2][colIndex].setWinnerColor('#9AA4AF');
        console.log('Winner columns!');
        return true;
      }
    }
        return false;
  },

  checkMainDiagonalWinner: function(){
    for(let rowIndex = 0; rowIndex < this.numRows; rowIndex+=1){
      for(let colIndex = 0; colIndex < this.numCols; colIndex+=1){
        if (this.grid[0][0].type && this.grid[0][0].type === this.grid[1][1].type && this.grid[0][0].type === this.grid[2][2].type)
        {
          this.grid[0][0].setWinnerColor('#9AA4AF');
          this.grid[1][1].setWinnerColor('#9AA4AF');
          this.grid[2][2].setWinnerColor('#9AA4AF');
          console.log('Winner diagonal!');
          return true;
        }
      }
      return false;
    }
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
