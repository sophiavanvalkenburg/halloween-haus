var Character = function(name, graphic, map_index, x, y){
  this.name = name;
  this.map_index = map_index;
  this.x = x;
  this.y = y;
  this.graphic = graphic;
  this.inventory = [];
  this.orientation = undefined; 
};
Character.prototype.X = function(){
  return this.x;
};
Character.prototype.Y = function(){
  return this.y;
};
Character.prototype.mapIndex = function(){
  return this.map_index;
};
Character.prototype.setX = function(x){
  this.x = x;
};
Character.prototype.setY = function(y){
  this.y = y;
};
Character.prototype.setMapIndex = function(map_index){
  this.map_index = map_index;
};
Character.prototype.getGraphic = function(){
  return this.graphic;
};
Character.prototype.setOrientation = function(orientation){
  this.orientation = orientation;
};
Character.prototype.getOrientation = function(){
  return this.orientation;
};
Character.prototype.setOrientationTowards = function(x, y){
  this.setOrientation(this.getOrientationTowardsMe(x, y));
}
Character.prototype.getOrientationTowardsMe = function(x, y){
  if (x > this.x){
    return MapState.RIGHT;
  }
  if (x < this.x){
    return MapState.LEFT;
  }
  if (y > this.y){
    return MapState.DOWN;
  }
  if (y < this.y){
    return MapState.UP;
  }
  return MapState.DOWN;
};
Character.prototype.getFacingLocation = function(){
  var facing_x;
  var facing_y;
  switch(this.orientation){
    case(MapState.UP):
      facing_x = this.x;
      facing_y = this.y - 1;
      break;
    case(MapState.DOWN):
      facing_x = this.x;
      facing_y = this.y + 1;
      break;
    case(MapState.LEFT):
      facing_x = this.x - 1;
      facing_y = this.y;
      break;
    case(MapState.RIGHT):
      facing_x = this.x + 1;
      facing_y = this.y;
      break;
    default:
      facing_x = this.x;
      facing_y = this.y + 1;
      break;
  }
  return new MapLocation(this.mapIndex, facing_x, facing_y);
}
Character.prototype.setLocation = function(loc){
  this.setX(loc.X());
  this.setY(loc.Y());
  this.setMapIndex(loc.mapIndex());
}
Character.prototype.moveTo = function(tile){
  if (tile === undefined){
    return;
  }
  if (tile.isAccessible()){
    this.setLocation(tile.getPortalLoc());
  }
};
Character.prototype.addToInventory = function(item){
  this.inventory.push(item);
};
Character.prototype.removeFromInventory = function(item){
  if (this.hasItem(item)){
    ind = this.inventory.indexOf(item);
    this.inventory.splice(ind, 1);
    return true;
  }
  return false;
};
Character.prototype.hasItem = function(item){
  return this.inventory.indexOf(item) >= 0;
};

var NonPlayerCharacter = function(name, graphic, map_index, x, y, messages){
  Character.call(this, name, graphic, map_index, x, y);
  this.messages = messages;
};
NonPlayerCharacter.prototype = new Character();
NonPlayerCharacter.prototype.getMessages = function(){
  return this.messages;
};

var PlayerCharacter = function(name, graphic, map_index, x, y){
  Character.call(this, name, graphic, map_index, x, y);
};
PlayerCharacter.prototype = new Character();
