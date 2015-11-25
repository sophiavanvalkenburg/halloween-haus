var Haus = function(){
  this.player = Config.player;
  this.characters = Config.characters.concat(this.player);
  this.num_characters = this.characters.length;
  this.maps = {};
  this.text_dialog = new TextDialog();
  this.choice_dialog = new ChoiceDialog();
  this.current_map = -1;
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
Haus.prototype.getCharacterWithName = function(name){
  for (var i=0; i<this.characters.length; i++){
    var ch = this.characters[i];
    if (ch.getLabel() == name){
      return ch;
    }
  }
}
Haus.prototype.getFacingObjectOnMap = function(map, character){
  if (map.getId() !== character.mapIndex()){
    return undefined;
  }
  var facing_loc = character.getFacingLocation();
  var facing_obj = this.getCharacterOnMap(facing_loc);
  if (facing_obj === undefined){    
    facing_obj = map.getTile(facing_loc.X(), facing_loc.Y());
  }
  return facing_obj;
};
