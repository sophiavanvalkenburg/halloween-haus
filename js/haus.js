var Haus = function(){
  this.player = Config.player;
  this.characters = Config.characters.concat(this.player);
  this.num_characters = this.characters.length;
  this.items = Config.items;
  this.maps = {};
  this.text_dialog = new TextDialog();
  this.choice_dialog = new ChoiceDialog();
  this.current_map = -1;
  this.graphics = [];
};
Haus.prototype.addMap = function(map){
  this.maps[map.getId()] = map;
}
Haus.prototype.getCurrentMap = function(){
  return this.getMap(this.current_map);
};
Haus.prototype.setCurrentMap = function(map_index){
  this.current_map = map_index;
};
Haus.prototype.getMap = function(map_index){
  return this.maps[map_index];
};
Haus.prototype.getTileOnMap = function(map_index, tile_x, tile_y){
  var map = this.getMap(map_index);
  return map.getTile(tile_x, tile_y);
};
Haus.prototype.getTileWithLabel = function(label){
  for (var id in this.maps){
    if (this.maps[id].getTileWithLabel !== undefined &&
        this.maps[id].getTileWithLabel(label) !== undefined){
        return this.maps[id].getTileWithLabel(label); 
    }
  }  
};
Haus.prototype.getPlayer = function(){
  return this.player;
};
Haus.prototype.getTextDialog = function(){
  return this.text_dialog;
};
Haus.prototype.getChoiceDialog = function(){
  return this.choice_dialog;
}
Haus.prototype.getCharacters = function(){
  return this.characters;
}
Haus.prototype.getItems = function(){
  return this.items;
}
Haus.prototype.getCharacterOnMap = function(map_loc){
  // don't store a character grid because it's very sparse
  for (var i=0; i<this.num_characters; i++){
    var ch = this.characters[i];
    if (ch.mapIndex() == map_loc.mapIndex() && 
        ch.X() === map_loc.X() && ch.Y() === map_loc.Y()){
      return ch;
    }
  }
};
Haus.prototype.getCharactersOnMap = function(map_index){
  var characters = []
  for (var i=0; i<this.num_characters; i++){
    var ch = this.characters[i];
    if (ch.mapIndex() == map_index){ 
      characters.push(ch);
    }
  }
  return characters;
};

Haus.prototype.getCharacterWithLabel = function(label){
  for (var i=0; i<this.characters.length; i++){
    var ch = this.characters[i];
    if (ch.getLabel() == label){
      return ch;
    }
  }
}

Haus.prototype.getItemOnMap = function(map_loc){
  // don't store an item grid because it's very sparse
  for (var i=0; i<this.items.length; i++){
    var item = this.items[i];
    if (item.mapIndex() == map_loc.mapIndex() && 
        item.X() === map_loc.X() && item.Y() === map_loc.Y()){
      return item;
    }
  }
};
Haus.prototype.getItemsOnMap = function(map_index){
  var items = []
  for (var i=0; i<this.items.length; i++){
    var item = this.items[i];
    if (item.mapIndex() == map_index){ 
      items.push(item);
    }
  }
  return items;
};

Haus.prototype.getItemWithLabel = function(label){
  for (var i=0; i<this.items.length; i++){
    var item = this.items[i];
    if (item.getLabel() == label){
      return item;
    }
  }
}

Haus.prototype.removeItemFromMap = function(label){
  var item = this.getItemWithLabel(label);
  if (item === undefined){
    return;
  }
  item.removeFromMap();
}

Haus.prototype.getFacingObjectOnMap = function(map, character){
  if (map.getId() !== character.mapIndex()){
    return undefined;
  }
  var facing_loc = character.getFacingLocation();
  var facing_obj = this.getCharacterOnMap(facing_loc);
  if (facing_obj === undefined){    
    facing_obj = this.getItemOnMap(facing_loc);
    if (facing_obj === undefined){
      facing_obj = map.getTile(facing_loc.X(), facing_loc.Y());
    }
  }
  return facing_obj;
};
