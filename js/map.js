var Map = function(tiles, characters){
  this.tiles = tiles;
  this.characters = characters;
  this.num_characters = characters.length;
  this.tile_grid = [];
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
    if (this.tile_grid[y] === undefined){
      this.tile_grid[y] = [];
    }
    this.tile_grid[y][x] = tile;
  }
  return [max_x, max_y];
};
Map.prototype.getTile = function(x, y){ 
  if (y > this.max_y || y < 0 || x > this.max_x || x < 0){
    return;
  }
  return this.tile_grid[y][x];
};
Map.prototype.getCharacter = function(x, y){
  // don't store a character grid because it's very sparse
  for (var i=0; i<this.num_characters; i++){
    var ch = this.characters[i];
    if (ch.X() === x && ch.Y() === y){
      return ch;
    }
  }
}
Map.prototype.getMaxY = function(){
  return this.max_y;
};
Map.prototype.getMaxX = function(){
  return this.max_x;
}
