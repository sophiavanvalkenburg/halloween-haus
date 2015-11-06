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
Tile.prototype.interactAction = function(controller){
  var map = controller.haus.getCurrentMap();
  var player = controller.haus.getPlayer();
  player.moveTo(map, new MapLocation(map.getId(), this.x, this.y));
  controller.canvas.updateCharacter(player);
}

var InteractiveTile = function(x, y, is_accessible, graphic, messages){
  Tile.call(this, x, y, is_accessible, graphic);
  this.messages = messages;
};
InteractiveTile.prototype = new Tile();
InteractiveTile.prototype.getMessages = function(){
  return this.messages;
};
InteractiveTile.prototype.interactAction = function(controller){
  var dialog = controller.haus.getMainDialog();
  dialog.setMessages(this.messages);
  dialog.start();
  controller.haus.setInteractingObject(dialog);
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
PortalTile.prototype.interactAction = function(controller){
  var map_index = this.getNextMapIndex();
  var map = controller.haus.getMap(map_index);
  var x = this.getNextX();
  var y = this.getNextY();
  controller.haus.setCurrentMap(map_index);
  controller.haus.getPlayer().moveTo(map, new MapLocation(map_index, x, y));
  controller.canvas.drawMap(controller.haus);
}
