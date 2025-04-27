class Haus {

  #player;
  #characters;
  #items;
  #maps;
  #text_dialog;
  #choice_dialog;
  #current_map;

  constructor() {
    this.#player = Config.player;
    this.#characters = Config.characters.concat(this.#player);
    this.#items = Config.items;
    this.#maps = {};
    this.#text_dialog = new TextDialog();
    this.#choice_dialog = new ChoiceDialog();
    this.#current_map = -1;
  }

  addMap(map){
    this.#maps[map.getId()] = map;
  }
  getCurrentMap(){
    return this.getMap(this.#current_map);
  }
  setCurrentMap(map_index){
    this.#current_map = map_index;
  }
  getMap(map_index){
    return this.#maps[map_index];
  }
  getTileOnMap(map_index, tile_x, tile_y){
    var map = this.getMap(map_index);
    return map.getTile(tile_x, tile_y);
  }
  getTileWithLabel(label){
    for (let id in this.#maps){
      if (this.#maps[id].getTileWithLabel !== undefined &&
          this.#maps[id].getTileWithLabel(label) !== undefined){
          return this.#maps[id].getTileWithLabel(label); 
      }
    }  
  }
  getPlayer(){
    return this.#player;
  }
  getTextDialog(){
    return this.#text_dialog;
  }
  getChoiceDialog(){
    return this.#choice_dialog;
  }
  getCharacters(){
    return this.#characters;
  }
  getItems(){
    return this.#items;
  }
  getCharacterOnMap(map_loc){
    // don't store a character grid because it's very sparse
    for (let ch of this.#characters){
      if (ch.mapIndex() == map_loc.mapIndex() && 
          ch.X() === map_loc.X() && ch.Y() === map_loc.Y()){
        return ch;
      }
    }
  }
  getCharactersOnMap(map_index){
    const characters = [];
    for (let ch of this.#characters){
      if (ch.mapIndex() == map_index){ 
        characters.push(ch);
      }
    }
    return characters;
  }
  getCharacterWithLabel(label){
    for (let ch of this.#characters){
      if (ch.getLabel() == label){
        return ch;
      }
    }
  }
  getItemOnMap(map_loc){
    // don't store an item grid because it's very sparse
    for (let item of this.#items){
      if (item.mapIndex() == map_loc.mapIndex() && 
          item.X() === map_loc.X() && item.Y() === map_loc.Y()){
        return item;
      }
    }
  }
  getItemsOnMap(map_index){
    const items = [];
    for (let item of this.#items){
      if (item.mapIndex() == map_index){ 
        items.push(item);
      }
    }
    return items;
  };
  getItemWithLabel(label){
    for (let item of this.#items){
      if (item.getLabel() == label){
        return item;
      }
    }
  }
  removeItemFromMap(label){
    const item = this.getItemWithLabel(label);
    if (item === undefined){
      return;
    }
    item.removeFromMap();
  }
  getFacingObjectOnMap(map, character){
    if (map.getId() !== character.mapIndex()){
      return undefined;
    }
    const facing_loc = character.getFacingLocation();
    let facing_obj = this.getCharacterOnMap(facing_loc);
    if (facing_obj === undefined){    
      facing_obj = this.getItemOnMap(facing_loc);
      if (facing_obj === undefined){
        facing_obj = map.getTile(facing_loc.X(), facing_loc.Y());
      }
    }
    return facing_obj;
  };
  
}