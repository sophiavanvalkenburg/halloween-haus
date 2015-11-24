var MapObject = function(map_loc, is_accessible, graphic, modes){
  this.map_loc = map_loc;
  this.graphic = graphic;
  this.is_accessible = is_accessible;
  this.modes = {};
  if (modes !== undefined){
    this.addModes(modes);
  }
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
MapObject.prototype.getModeSequence = function(played_states){
  var last_mode_seq = [];
  for (var i=0; i<played_states.length; i++){
    var state = played_states[i];
    if (this.modes[state] !== undefined){
      last_mode_seq = this.modes[state];
    }
  }
  return last_mode_seq;
};
MapObject.prototype.addMode = function(game_state, mode){
  if (this.modes[game_state] === undefined){
    this.modes[game_state] = [];
  }
  this.modes[game_state].push(mode);
};
MapObject.prototype.addModesForState = function(game_state, modes){
  if (this.modes[game_state] === undefined){
    this.modes[game_state] = [];
  }
  for (var i=0; i<modes.length; i++){
    this.addMode(game_state, modes[i]);
  }
}
MapObject.prototype.addModes = function(modes_per_state){
  for (var i=0; i<modes_per_state.length; i++){
    var obj = modes_per_state[i];
    this.addModesForState(obj.state, obj.modes);
  }
}


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

