class MoveableObject extends MapObject {

  #orientation;
  #initial_orientation;
  #interacts_with_player;
  #animation;
  #is_interacting;

  constructor(obj={}){
    super(obj.label, obj.map_loc, false, obj.graphic, obj.modes);
    this.#orientation = obj.initial_orientation; 
    this.#initial_orientation = obj.initial_orientation;
    this.#interacts_with_player = obj.interacts_with_player === undefined ? true : obj.interacts_with_player;
    this.#animation = obj.animation === undefined ? undefined : new Animation(obj.animation);
    this.#is_interacting = false;
  };

  resetOrientation(){
    this.setOrientation(this.getLastOrientation());
  }
  setOrientation(orientation){
    this.#orientation = orientation;
  };
  getOrientation(){
    return this.#orientation;
  };
  getLastOrientation(){
    if (this.#animation === undefined){
      return this.#initial_orientation;
    }
    var last_orientation = this.#animation.getLastOrientation();
    return last_orientation === undefined ? this.#initial_orientation : last_orientation;
  }
  setOrientationTowards(x, y){
    this.setOrientation(this.getOrientationTowardsMe(x, y));
  }
  getFacingLocation(){
    let facing_x;
    let facing_y;
    switch(this.#orientation){
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
  startInteracting(controller){
    if (this.#interacts_with_player){
      const player = controller.haus.getPlayer();
      this.setOrientationTowards(player.X(), player.Y());
    }
    this.#is_interacting = true;
  };
  endInteracting(controller){
    if (this.#interacts_with_player){
      this.resetOrientation();
    }
    this.#is_interacting = false;
  };
  getNewLocation(ins){
    if (ins.map_loc !== undefined){
      return ins.map_loc;
    }
    if (ins.movement !== undefined){
      const location = this.getLocation();
      const curr_x = location.X();
      const curr_y = location.Y();
      const curr_map_index = location.mapIndex();
      const new_x = ins.movement.x === undefined ? curr_x : curr_x + ins.movement.x;
      const new_y = ins.movement.y === undefined ? curr_y : curr_y + ins.movement.y;
      return new MapLocation(curr_map_index, new_x, new_y);
    }
  }
  animate(controller){
    if (this.#animation === undefined || this.#is_interacting){
      return;
    }
    const instruction = this.#animation.getNextInstruction();
    if (instruction === undefined){
      return;
    }
    if (instruction.wait !== undefined){
      this.#animation.update();
      return;
    }
    const new_orientation = instruction.orientation;
    const new_map_loc = this.getNewLocation(instruction);
    let success;
    if (new_map_loc !== undefined){
      success = controller.movePlayer(this, new_map_loc);
    }
    if (new_orientation !== undefined){
      this.setOrientation(new_orientation);
      success = true;
    }
    if (success){
      this.#animation.update();
    }
  }

}


class Character extends MoveableObject{

  #name;
  #inventory;
  #is_npc;

  constructor(obj){
    super(obj);
    this.#name = obj.name === undefined ? obj.label : obj.name;
    this.#inventory = [];
    this.#is_npc = obj.is_player === undefined ? true : !obj.is_player;
  }

  isNPC(){
    return this.#is_npc;
  }
  getName(){
    return this.#name;
  }
  addToInventory(item){
    this.#inventory.push(item);
  };
  removeFromInventory(item_name){
    const ind = this.indexOfItemInInventory(item_name);
    if (ind >= 0){
      this.#inventory.splice(ind, 1);
      return true;
    }
    return false;
  };
  indexOfItemInInventory(item_label){
    for (let i=0; i < this.#inventory.length; i++){
      if (item_label == this.#inventory[i].getLabel()){
        return i;
      }
    }
    return -1;
  }
  hasItem(item_label){
    return this.indexOfItemInInventory(item_label) >= 0;
  };
  getFormattedInventory(){
    const lines = [];
    for (let i=0; i<this.#inventory.length; i+=6){
      let item_str = "";
      const last_item_index = Math.min(this.#inventory.length, i+6);
      for (var j=i; j<last_item_index; j++){
        item_str += Renderer.objectName(this.#inventory[j].getName());
        if (j < last_item_index-1){
          item_str += ", "
        }
      }
      lines.push(item_str);
    }
    return lines;
  }
  
}