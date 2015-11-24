var Character = function(name, map_loc, graphic, modes){
  MapObject.call(this, map_loc, false, graphic, modes);
  this.name = name;
  this.inventory = [];
  this.orientation = undefined; 
};
Character.makeMessages = function(name, messages){
  if (messages !== undefined){
    return messages.map(
      function(m){ 
        return Canvas.characterName(name+':') + '"' + m + '"';
      }
    );
  }
}
Character.prototype = new MapObject();
Character.prototype.constructor = Character;
Character.prototype.getName = function(){
  return this.name;
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
Character.prototype.getFacingLocation = function(){
  var facing_x;
  var facing_y;
  switch(this.orientation){
    case(MapState.UP):
      facing_x = this.X();
      facing_y = this.Y() - 1;
      break;
    case(MapState.DOWN):
      facing_x = this.X();
      facing_y = this.Y() + 1;
      break;
    case(MapState.LEFT):
      facing_x = this.X() - 1;
      facing_y = this.Y();
      break;
    case(MapState.RIGHT):
      facing_x = this.X() + 1;
      facing_y = this.Y();
      break;
    default:
      facing_x = this.X();
      facing_y = this.Y() + 1;
      break;
  }
  return new MapLocation(this.mapIndex(), facing_x, facing_y);
}
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
