/*jshint esversion: 6*/
function Cell(width, height, type){
  this.width = width || 75;
  this.height = height || 75;
  this.type =  type;
  this.color = '#D8EBB5';
}

Cell.prototype.toHtml = function(){
  const div = document.createElement('div');
  div.className = "grid-view";
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width  = `${this.width}px`;
  div.style.border = '0.25px solid #205D67';
  div.style.margin = '0.5px';
  div.style.paddingTop ='3px';
  div.style.fontSize = '60px';
  div.style.color = '#205D67';
  div.style.backgroundColor = this.color;
  div.appendChild(document.createTextNode(this.type || ''));
  div.style.verticalAlign = "top";
  return div;
};

Cell.prototype.setWinnerColor = function(winnerColor){
    this.color = winnerColor;
};
