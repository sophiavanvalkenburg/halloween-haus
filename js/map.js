var MapLocation = function(map_index, x, y){
  this.map_index = map_index;
  this.x = x;
  this.y = y;
};
MapLocation.prototype.mapIndex = function(){
  return this.map_index;
};
MapLocation.prototype.X() = function(){
  return this.x;
};
MapLocation.prototype.Y() = function(){
  return this.y;
};

var MapState = function(tiles, characters){
  this.tiles = tiles;
  this.characters = characters;
  this.num_characters = characters.length;
  this.tile_grid = [];
  this.size = tiles.length;
  var res = this.mapTilesToGrid();
  this.max_x = res[0];
  this.max_y = res[1];
}; 
MapState.UP = "up";
MapState.DOWN = "down";
MapState.LEFT = "left";
MapState.RIGHT = "right";
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
MapState.prototype.getTile = function(x, y){ 
  if (this.tile_grid[y] === undefined){
    return;
  }
  return this.tile_grid[y][x];
};
MapState.prototype.getCharacter = function(x, y){
  // don't store a character grid because it's very sparse
  for (var i=0; i<this.num_characters; i++){
    var ch = this.characters[i];
    if (ch.X() === x && ch.Y() === y){
      return ch;
    }
  }
};
MapState.prototype.getFacingObject = function(character){
  var ch_x = character.X();
  var ch_y = character.Y();  
  var ch_orientation = character.getOrientation();
  var facing_x;
  var facing_y;
  switch(ch_orientation){
    case(MapState.UP):
      facing_x = ch_x;
      facing_y = ch_y - 1;
      break;
    case(MapState.DOWN):
      facing_x = ch_x;
      facing_y = ch_y + 1;
      break;
    case(MapState.LEFT):
      facing_x = ch_x - 1;
      facing_y = ch_y;
      break;
    case(MapState.RIGHT):
      facing_x = ch_x + 1;
      facing_y = ch_y;
      break;
    default:
      break;
  }
  var facing_obj = this.getCharacter(facing_x, facing_y);
  if (facing_obj === undefined){    
    facing_obj = this.getTile(facing_x, facing_y);
  }
  return facing_obj;
};
MapState.prototype.getMaxY = function(){
  return this.max_y;
};
MapState.prototype.getMaxX = function(){
  return this.max_x;
};
