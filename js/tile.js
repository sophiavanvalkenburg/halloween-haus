var Tile = function(x, y, is_accessible, graphic){
  this.x = x;
  this.y = y;
  this.graphic = graphic;
  this.is_accessible = is_accessible;
};
Tile.prototype.X = function(){
  return this.x;
};
Tile.prototype.Y = function(){
  return this.y;
};
Tile.prototype.isAccessible = function(){
  return this.is_accessible;
};
Tile.prototype.getGraphic = function(){
  return this.graphic;
};
Tile.prototype.getModeSequence = function(){ return []; };


var InteractiveTile = function(x, y, is_accessible, graphic, modes){
  Tile.call(this, x, y, is_accessible, graphic);
  this.modes = modes;
};
InteractiveTile.prototype = new Tile();
InteractiveTile.prototype.getModeSequence = function(){ 
  return this.modes;
};

var PortalTile = function(x, y, next_location, graphic){
  Tile.call(this, x, y, true, graphic);
  this.next_location = next_location;
};
PortalTile.prototype = new Tile();
PortalTile.prototype.getNextMapIndex = function(){
  return this.next_location.mapIndex(); 
};
PortalTile.prototype.getNextX = function(){
  return this.next_location.X();
}
PortalTile.prototype.getNextY = function(){
  return this.next_location.Y();
}
/*
PortalTile.prototype.interactAction = function(controller){
  var map_index = this.getNextMapIndex();
  var map = controller.haus.getMap(map_index);
  var x = this.getNextX();
  var y = this.getNextY();
  controller.haus.setCurrentMap(map_index);
  controller.haus.getPlayer().moveTo(map, new MapLocation(map_index, x, y));
  controller.canvas.drawMap(controller.haus);
}
*/
