var Character = function(name){
  this.name = name;
  this.x = 0;
  this.y = 0;
  this.inventory = [];
};
Character.prototype.setX = function(x){
  this.x = x;
};
Character.prototype.setY = function(y){
  this.y = y;
};
Character.prototype.moveTo = function(tile){
  if (tile.isAccessible()){
    this.setX(tile.X());
    this.setY(tile.Y());
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

var NonPlayerCharacter = function(name, x, y, messages){
  Character.call(this, name);
  this.setX(x);
  this.setY(y);
  this.messages = messages;
};
NonPlayerCharacter.prototype = Character.prototype;
NonPlayerCharacter.prototype.getMessages = function(){
  return this.messages
};

var PlayerCharacter = function(name){
  Character.call(this, name);
};
PlayerCharacter.prototype = Character.prototype;
