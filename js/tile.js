var Tile = function(map_loc, portal_loc, is_accessible, graphic){
  this.map_loc = map_loc;
  if (portal_loc === undefined){
    this.portal_loc = map_loc;
  }else{
    this.portal_loc = portal_loc;
  }
  this.graphic = graphic;
  this.is_accessible = is_accessible;
};
Tile.prototype.X = function(){
  return this.map_loc.X();
};
Tile.prototype.Y = function(){
  return this.map_loc.Y();
};
Tile.prototype.mapIndex = function(){
  return this.map_loc.mapIndex();
}
Tile.prototype.getPortalLoc = function(){
  return this.portal_loc; 
};
Tile.prototype.isAccessible = function(){
  return this.is_accessible;
};
Tile.prototype.getGraphic = function(){
  return this.graphic;
};
Tile.prototype.getModeSequence = function(){ return []; };


var InteractiveTile = function(map_loc, portal_loc, is_accessible, graphic, modes){
  Tile.call(this, map_loc, portal_loc, is_accessible, graphic);
  this.modes = modes;
};
InteractiveTile.prototype = new Tile();
InteractiveTile.prototype.getModeSequence = function(){ 
  return this.modes;
};

