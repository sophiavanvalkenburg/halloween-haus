var MoveableObject = function(obj){
  obj = obj === undefined ? {} : obj
  MapObject.call(this, obj.label, obj.map_loc, false, obj.graphic, obj.modes);
  this.orientation = obj.initial_orientation; 
  this.initial_orientation = obj.initial_orientation;
  this.interacts_with_player = obj.interacts_with_player === undefined ? true : obj.interacts_with_player;
  this.animation = obj.animation === undefined ? undefined : new Animation(obj.animation);
};
MoveableObject.prototype = new MapObject();
MoveableObject.prototype.constructor = MoveableObject;
MoveableObject.prototype.resetOrientation = function(){
  this.setOrientation(this.getLastOrientation());
}
MoveableObject.prototype.setOrientation = function(orientation){
  this.orientation = orientation;
};
MoveableObject.prototype.getOrientation = function(){
  return this.orientation;
};
MoveableObject.prototype.getLastOrientation = function(){
  if (this.animation === undefined){
    return this.initial_orientation;
  }
  var last_orientation = this.animation.getLastOrientation();
  return last_orientation === undefined ? this.initial_orientation : last_orientation;
}
MoveableObject.prototype.setOrientationTowards = function(x, y){
  this.setOrientation(this.getOrientationTowardsMe(x, y));
}
MoveableObject.prototype.getFacingLocation = function(){
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
MoveableObject.prototype.startInteracting = function(controller){
  if (this.interacts_with_player){
    var player = controller.haus.getPlayer();
    this.setOrientationTowards(player.X(), player.Y());
  }
};
MoveableObject.prototype.endInteracting = function(controller){
  if (this.interacts_with_player){
    this.resetOrientation();
  }
};
MoveableObject.prototype.getNewLocation = function(ins){
  if (ins.map_loc !== undefined){
    return ins.map_loc;
  }
  if (ins.movement !== undefined){
    var curr_x = this.map_loc.X();
    var curr_y = this.map_loc.Y();
    var curr_map_index = this.map_loc.mapIndex();
    var new_x = ins.movement.x === undefined ? curr_x : curr_x + ins.movement.x;
    var new_y = ins.movement.y === undefined ? curr_y : curr_y + ins.movement.y;
    return new MapLocation(curr_map_index, new_x, new_y);
  }
}
MoveableObject.prototype.animate = function(controller){
  if (this.animation === undefined){
    return;
  }
  var instruction = this.animation.getNextInstruction();
  if (instruction.wait !== undefined){
    this.animation.update();
    return;
  }
  var new_orientation = instruction.orientation;
  var new_map_loc = this.getNewLocation(instruction);
  if (new_map_loc !== undefined){
    success = controller.movePlayer(this, new_map_loc);
  }
  if (new_orientation !== undefined){
    this.setOrientation(new_orientation);
    success = true;
  }
  if (success){
    this.animation.update();
  }
}


var Character = function(obj){
  MoveableObject.call(this, obj);
  this.name = obj.name === undefined ? obj.label : obj.name;
  this.inventory = [];
  this.is_npc = obj.is_player === undefined ? true : !obj.is_player;
}
Character.makeMessages = function(name, messages){
  if (messages !== undefined){
    return messages.map(
      function(m){ 
        return Renderer.characterName(name+':') + ' "' + m + '"';
      }
    );
  }
}
Character.prototype = new MoveableObject();
Character.prototype.constructor = Character;
Character.prototype.isNPC = function(){
  return this.is_npc;
}
Character.prototype.getName = function(){
  return this.name;
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

