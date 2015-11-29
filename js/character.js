var Character = function(obj){
  MapObject.call(this, obj.label, obj.map_loc, false, obj.graphic, obj.modes);
  this.name = obj.name === undefined ? obj.label : obj.name;
  this.inventory = [];
  this.orientation = obj.initial_orientation; 
  this.initial_orientation = obj.initial_orientation;
  this.interacts_with_player = obj.interacts_with_player === undefined ? true : obj.interacts_with_player;
};
Character.makeMessages = function(name, messages){
  if (messages !== undefined){
    return messages.map(
      function(m){ 
        return Renderer.characterName(name+':') + ' "' + m + '"';
      }
    );
  }
}
Character.prototype = new MapObject();
Character.prototype.constructor = Character;
Character.prototype.getName = function(){
  return this.name;
}
Character.prototype.resetOrientation = function(){
  this.setOrientation(this.getInitialOrientation());
}
Character.prototype.setOrientation = function(orientation){
  this.orientation = orientation;
};
Character.prototype.getOrientation = function(){
  return this.orientation;
};
Character.prototype.getInitialOrientation = function(){
  return this.initial_orientation;
}
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
Character.prototype.startInteracting = function(controller){
  if (this.interacts_with_player){
    var player = controller.haus.getPlayer();
    this.setOrientationTowards(player.X(), player.Y());
  }
}
