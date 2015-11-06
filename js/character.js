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
Character.prototype.setLocation = function(map, x, y){
  if (map.getId() !== this.mapIndex()){
    map.addCharacter(this);
  }  
  this.setX(x);
  this.setY(y);
}
Character.prototype.moveTo = function(map, x, y){
  this.setOrientation(this.getOrientationTowardsMe(x, y));
  var tile = map.getTile(x, y);
  if (tile !== undefined && tile.isAccessible()){
    this.setLocation(map, x, y);
    return true;
  }
  return false;
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

var PlayerCharacter = function(name, graphic, map_index){
  Character.call(this, name, graphic, map_index, 0, 0);
};
PlayerCharacter.prototype = new Character();
