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
PortalTile.prototype.getNextMap = function(){
  return this.next_location.getMap(); 
};
PortalTile.prototype.getNextX = function(){
  return this.next_location.X();
}
PortalTile.prototype.getNextY = function(){
  return this.next_location.Y();
}
