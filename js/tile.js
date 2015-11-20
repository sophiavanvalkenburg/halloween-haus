var MapObject = function(map_loc, is_accessible, graphic, modes){
  this.map_loc = map_loc;
  this.graphic = graphic;
  this.is_accessible = is_accessible;
  this.modes = modes === undefined ? [] : modes;
}
MapObject.prototype.getGraphic = function(){
  return this.graphic;
};
MapObject.prototype.isAccessible = function(){
  return this.is_accessible;
}
MapObject.prototype.X = function(){
  return this.map_loc.X();
};
MapObject.prototype.Y = function(){
  return this.map_loc.Y();
};
MapObject.prototype.mapIndex = function(){
  return this.map_loc.mapIndex();
}
MapObject.prototype.setLocation = function(map_location){
  this.map_loc = map_location;
};
MapObject.prototype.getOrientationTowardsMe = function(x, y){
  if (x > this.X()){
    return MapState.RIGHT;
  }
  if (x < this.X()){
    return MapState.LEFT;
  }
  if (y > this.Y()){
    return MapState.DOWN;
  }
  if (y < this.Y()){
    return MapState.UP;
  }
  return MapState.DOWN;
};
MapObject.prototype.getModeSequence = function(){ 
  return this.modes;
};
MapObject.prototype.addMode = function(mode){
  this.modes.push(mode);
}
;


var Tile = function(map_loc, portal_loc, is_accessible, graphic, modes){
  MapObject.call(this, map_loc, is_accessible, graphic, modes);
  if (portal_loc === undefined){
    this.portal_loc = map_loc;
  }else{
    this.portal_loc = portal_loc;
  }
};
Tile.prototype = new MapObject();
Tile.prototype.constructor = Tile;
Tile.prototype.getPortalLoc = function(){
  return this.portal_loc; 
};

