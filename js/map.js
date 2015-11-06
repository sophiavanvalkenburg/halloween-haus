var MapLocation = function(map_index, x, y){
  this.map_index = map_index;
  this.x = x;
  this.y = y;
};
MapLocation.prototype.mapIndex = function(){
  return this.map_index;
};
MapLocation.prototype.X = function(){
  return this.x;
};
MapLocation.prototype.Y = function(){
  return this.y;
};

var MapState = function(id, tiles){
  this.tiles = tiles;
  this.tile_grid = [];
  this.size = tiles.length;
  var res = this.mapTilesToGrid();
  this.max_x = res[0];
  this.max_y = res[1];
  this.id = id;
}; 
MapState.UP = "up";
MapState.DOWN = "down";
MapState.LEFT = "left";
MapState.RIGHT = "right";
MapState.prototype.getId = function(){
  return this.id;
};
MapState.prototype.addTileToGrid = function(tile){
    var x = tile.X();
    var y = tile.Y();
    // y is row, x is column
    if (this.tile_grid[y] === undefined){
      this.tile_grid[y] = [];
    }
    this.tile_grid[y][x] = tile;
};
MapState.prototype.mapTilesToGrid = function(){
  var max_x = 0;
  var max_y = 0;
  for (var i=0; i<this.size; i++){
    var tile = this.tiles[i];
    max_x = tile.X() > max_x ? tile.X() : max_x;
    max_y = tile.Y() > max_y ? tile.Y() : max_y;
    this.addTileToGrid(tile);
  }
  return [max_x, max_y];
};
MapState.prototype.locationIsAccessible = function(x, y){
  var tile = this.getTile(x, y);
  return tile !== undefined && tile.isAccessible();
};
MapState.prototype.getTile = function(x, y){ 
  if (this.tile_grid[y] === undefined){
    return;
  }
  return this.tile_grid[y][x];
};
MapState.prototype.getMaxY = function(){
  return this.max_y;
};
MapState.prototype.getMaxX = function(){
  return this.max_x;
};

