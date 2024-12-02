class MapObject {

  #label;
  #map_loc;
  #graphic;
  #is_accessible;
  #modes;

  constructor(label, map_loc, is_accessible, graphic, modes){
    this.#map_loc = map_loc;
    this.#label = label;
    this.#graphic = graphic;
    this.#is_accessible = is_accessible;
    this.#modes = {};
    if (modes !== undefined){
      this.addModes(modes);
    }
  }

  getLabel(){
    return this.#label;
  };
  getGraphic(){
    return this.#graphic;
  };
  isAccessible(){
    return this.#is_accessible;
  }
  X(){
    return this.#map_loc ? this.#map_loc.X() : undefined;
  };
  Y(){
    return this.#map_loc ? this.#map_loc.Y() : undefined;
  };
  mapIndex(){
    return this.#map_loc ? this.#map_loc.mapIndex() : undefined;
  }
  setLocation(map_location){
    this.#map_loc = map_location;
  };
  getLocation(){
    return this.#map_loc ? this.#map_loc.copy() : undefined;
  }
  removeFromMap(){
    this.setLocation(undefined);
  }
  getOrientationTowardsMe(x, y){
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
  getModeSequence(played_states){
    let last_mode_seq = [];
    for (let i=0; i<played_states.length; i++){
      const state = played_states[i];
      if (this.#modes[state] !== undefined){
        last_mode_seq = this.#modes[state];
      }
    }
    return last_mode_seq;
  };
  addMode(game_state, mode){
    if (this.#modes[game_state] === undefined){
      this.#modes[game_state] = [];
    }
    this.#modes[game_state].push(mode);
  };
  addModesForState(game_state, modes){
    if (modes === undefined){
      return;
    }
    if (this.#modes[game_state] === undefined){
      this.#modes[game_state] = [];
    }
    for (var i=0; i<modes.length; i++){
      this.addMode(game_state, modes[i]);
    }
  }
  addModes(modes_per_state){
    if (modes_per_state === undefined){
      return;
    }
    for (let i=0; i<modes_per_state.length; i++){
      const obj = modes_per_state[i];
      this.addModesForState(obj.state, obj.modes);
    }
  }
  startInteracting(controller){}
  endInteracting(controller){}

}


class Item extends MapObject {

  #name;
  
  constructor(obj){
    super(obj.label, obj.map_loc, false, obj.graphic, obj.modes);
    this.#name = obj.name;
  };

  getName(){
    return this.#name;
  }

}


class Tile extends MapObject {

  #portal_loc;

  constructor(label, map_loc, portal_loc, is_accessible, graphic, modes){
    super(label, map_loc, is_accessible, graphic, modes);
    if (portal_loc === undefined){
      this.#portal_loc = map_loc;
    }else{
      this.#portal_loc = portal_loc;
    }
  };

 getPortalLoc(){
    return this.#portal_loc; 
  }

}





