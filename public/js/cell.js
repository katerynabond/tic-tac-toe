function Cell(width, height, type){
  this.width = width || 75;
  this.height = height || 75;
  this.type =  type;
}

Cell.prototype.toHtml = function(){
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width  = `${this.width}px`;
  div.style.border = '0.25px solid black';
  div.appendChild(document.createTextNode(this.type || '\u00A0'));
  return div;
};
