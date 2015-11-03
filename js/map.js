var Map = function(tiles){
  this.tiles = tiles;
  this.grid = [];
  this.size = tiles.length;
  var res = this.mapTilesToGrid();
  this.max_x = res[0];
  this.max_y = res[1];
}; 
Map.prototype.mapTilesToGrid = function(){
  var max_x = 0;
  var max_y = 0;
  for (var i=0; i<this.size; i++){
    var tile = this.tiles[i];
    var x = tile.X();
    var y = tile.Y();
    if (x > max_x){
      max_x = x;
    }
    if (y > max_y){
      max_y = y;
    }
    // y is row, x is column
    if (this.grid[y] === undefined){
      this.grid[y] = [];
    }
    this.grid[y][x] = tile;
  }
  return [max_x, max_y];
};
Map.prototype.getTile = function(x, y){ 
  if (y > this.max_y){
    return;
  }
  return this.grid[y][x];
};
Map.prototype.getMaxY = function(){
  return this.max_y;
};
Map.prototype.getMaxX = function(){
  return this.max_x;
}
