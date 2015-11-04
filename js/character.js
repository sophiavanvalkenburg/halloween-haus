var Character = function(name, graphic, x, y){
  this.name = name;
  this.x = x;
  this.y = y;
  this.graphic = graphic;
  this.inventory = [];
  this.orientation; 
};
Character.prototype.X = function(){
  return this.x;
}
Character.prototype.Y = function(){
  return this.y;
}
Character.prototype.setX = function(x){
  this.x = x;
};
Character.prototype.setY = function(y){
  this.y = y;
};
Character.prototype.getGraphic = function(){
  return this.graphic;
};
Character.prototype.setOrientation = function(orientation){
  this.orientation = orientation;
};
Character.prototype.getOrientation = function(){
  return this.orientation;
}
Character.prototype.getOrientationTowardsMe = function(x, y){
  if (x > this.x){
    return Map.RIGHT;
  }
  if (x < this.x){
    return Map.LEFT;
  }
  if (y > this.y){
    return Map.DOWN;
  }
  if (y < this.y){
    return Map.UP;
  }
  return Map.DOWN;
};
Character.prototype.moveTo = function(map, x, y){
  this.setOrientation(this.getOrientationTowardsMe(x, y));
  console.log(this.orientation);
  var tile = map.getTile(x, y);
  if (tile !== undefined && tile.isAccessible()){
    this.setX(x);
    this.setY(y);
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

var NonPlayerCharacter = function(name, graphic, x, y, messages){
  Character.call(this, name, graphic, x, y);
  this.messages = messages;
};
NonPlayerCharacter.prototype = new Character();
NonPlayerCharacter.prototype.getMessages = function(){
  return this.messages
};

var PlayerCharacter = function(name, graphic){
  Character.call(this, name, graphic, 0, 0);
};
PlayerCharacter.prototype = new Character();
